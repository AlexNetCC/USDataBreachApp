import { AssessmentData, AssessmentResult, StateLaw } from '../types';

export const calculateObligations = (data: AssessmentData, allLaws: StateLaw[]): AssessmentResult[] => {
  const results: AssessmentResult[] = [];
  const affectedStateCodes = Object.keys(data.affectedCounts).filter(
    code => data.affectedCounts[code] > 0
  );

  for (const code of affectedStateCodes) {
    const law = allLaws.find(l => l.stateCode === code);
    if (!law) continue;

    const affectedCount = data.affectedCounts[code];
    const result: AssessmentResult = {
      stateCode: code,
      law,
      affectedCount,
      individualNotification: { required: 'No', reason: '', timeline: '' },
      agNotification: { required: 'No', reason: '', timeline: '' },
      craNotification: { required: 'No', reason: '', timeline: '' },
    };

    let baseNotificationRequired = true;
    let reason = 'Breach occurred involving resident data.';

    // Check entity type exemptions
    if (data.entityType === 'government' && !law.provisionGovernmentEntitiesAreSubject) {
        baseNotificationRequired = false;
        reason = `Government entities are exempt or not covered by this statute.`;
    }
    
    // Check HIPAA/GLBA exemptions based on entity type
    if (data.entityType === 'healthcare' && law.exemptionHipaa) {
      baseNotificationRequired = false;
      reason = `Entity may be exempt under HIPAA, provided compliance requirements are met. AG notification may still be required.`;
    }
    if (data.entityType === 'business' && law.exemptionGlba) {
       // A simplification; in reality this applies to financial institutions.
       // For this tool, we assume a 'business' could be one.
      reason += ' GLBA-regulated entities may be exempt if compliant with federal guidelines.';
    }


    // Check encryption safe harbor
    if (baseNotificationRequired && data.isEncrypted === 'yes' && law.exemptionEncryptionSafeHarbor) {
      if (data.wasKeyCompromised !== 'yes') {
        baseNotificationRequired = false;
        reason = 'Data was encrypted and the key was not compromised (Encryption Safe Harbor).';
      } else if (law.exemptionEncryptionSafeHarborNegatedIfKeyCompromised) {
        reason = 'Data was encrypted, but the key was compromised, negating the safe harbor.';
      }
    }
    
    // Determine timeline, considering law enforcement delay
    let individualTimeline = law.individualNotificationTimelineDays > 0 ? `${law.individualNotificationTimelineDays} days` : 'ASAP';
    if (data.lawEnforcementInvolvement && law.provisionLawEnforcementDelay) {
        individualTimeline += ' (Subject to Law Enforcement Delay)';
    }

    // Check risk of harm analysis
    if (baseNotificationRequired && law.riskOfHarmAnalysisCanEliminateNotification && data.lowRiskOfHarmConsidered) {
      result.individualNotification.required = 'Conditional';
      result.individualNotification.reason = `A 'risk of harm' analysis is permitted for this state and is being considered for this incident. If the analysis determines harm is unlikely, notification may not be required.`;
    } else if (baseNotificationRequired) {
      result.individualNotification.required = 'Yes';
      result.individualNotification.reason = reason;
    } else {
       result.individualNotification.required = 'No';
       result.individualNotification.reason = reason;
    }
    result.individualNotification.timeline = individualTimeline;
    
    if (baseNotificationRequired && data.dataTypes.includes('Social Security Number')) {
        const monitoringPattern = /credit monitoring/i;
        if (law.provisionOtherDescription && monitoringPattern.test(law.provisionOtherDescription)) {
            result.individualNotification.reason += ' Credit monitoring is likely required due to SSN involvement.';
        }
    }


    // AG Notification
    let agTimeline = law.agNotificationTimelineDays !== null ? (law.agNotificationTimelineDays > 0 ? `${law.agNotificationTimelineDays} days` : 'Concurrent') : 'ASAP';

    // Handle special cases where AG timeline is relative to individual notice
    if (law.agNotificationTimelineRelativeTo === 'individual_notice' &&
        law.agNotificationTimelineRelativeDescription) {
      agTimeline = law.agNotificationTimelineRelativeDescription;
    }

     if (data.lawEnforcementInvolvement && law.provisionLawEnforcementDelay) {
        agTimeline += ' (Subject to Law Enforcement Delay)';
    }
    if (result.individualNotification.required !== 'No' && law.agNotificationIsRequired) {
        if (law.agNotificationThreshold !== null && affectedCount >= law.agNotificationThreshold) {
            result.agNotification.required = 'Yes';
            result.agNotification.reason = `Affected count (${affectedCount}) meets or exceeds threshold of ${law.agNotificationThreshold}.`;
            result.agNotification.timeline = agTimeline;
        } else {
            result.agNotification.required = 'No';
            result.agNotification.reason = `Affected count (${affectedCount}) is below threshold of ${law.agNotificationThreshold}.`;
        }
    } else {
        result.agNotification.required = 'No';
        result.agNotification.reason = result.individualNotification.required === 'No' ? 'Individual notification not required.' : 'AG notification not required by statute.';
    }
    
    // CRA Notification
    result.craNotification = { required: 'No', reason: '', timeline: 'N/A' };
    if (result.individualNotification.required !== 'No' && law.craNotificationIsRequired) {
       if (law.craNotificationThreshold !== null && affectedCount >= law.craNotificationThreshold) {
           result.craNotification.required = 'Yes';
           result.craNotification.reason = `Affected count (${affectedCount}) meets or exceeds threshold of ${law.craNotificationThreshold}.`;
           
           let craTimeline = law.craNotificationTimelineDays !== null ? (law.craNotificationTimelineDays > 0 ? `${law.craNotificationTimelineDays} days` : 'ASAP/Immediate') : 'N/A';
           if (data.lawEnforcementInvolvement && law.provisionLawEnforcementDelay) {
               craTimeline += ' (Subject to Law Enforcement Delay)';
           }
           result.craNotification.timeline = craTimeline;
       } else {
            result.craNotification.required = 'No';
            result.craNotification.reason = `Affected count (${affectedCount}) is below threshold of ${law.craNotificationThreshold}.`;
       }
    } else {
        result.craNotification.reason = result.individualNotification.required === 'No' ? 'Individual notification not required.' : 'CRA notification not required by statute.';
    }


    results.push(result);
  }

  return results.sort((a, b) => b.affectedCount - a.affectedCount);
};