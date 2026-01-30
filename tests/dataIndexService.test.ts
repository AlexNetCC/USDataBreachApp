import { describe, it, expect } from 'vitest';
import { createLawIndex } from '../services/dataIndexService';
import { StateLaw } from '../types';

describe('dataIndexService', () => {
  const mockLaw: StateLaw = {
    state: 'Test State',
    stateCode: 'TS',
    jurisdictionType: 'State',
    statuteCitation: 'Test Statute',
    statuteTitle: 'Test Title',
    statuteUrl: 'https://example.com',
    sourceDocumentation: 'Test Doc',
    lastVerified: '2024-01-01',
    verifiedBy: 'Test',
    knownContradictions: false,
    knownContradictionsDescription: null,
    complexityLevel: 'low',
    legislativeHistory: [],
    breachDefinitionText: 'Test',
    breachTrigger: 'test',
    breachAccessAloneTriggers: false,
    breachAcquisitionAloneTriggers: false,
    exemptionEncryptionSafeHarbor: true,
    exemptionEncryptionSafeHarborNegatedIfKeyCompromised: false,
    exemptionEncryptionDescription: null,
    riskOfHarmAnalysisIsRequired: false,
    riskOfHarmAnalysisCanEliminateNotification: true,
    riskOfHarmAnalysisStandard: null,
    riskOfHarmAnalysisDocumentationRequired: false,
    riskOfHarmAnalysisDocumentationRetentionYears: 0,
    riskOfHarmAnalysisAgNotificationRequired: false,
    riskOfHarmAnalysisAgNotificationThreshold: 0,
    riskOfHarmAnalysisAgNotificationTimelineDays: 0,
    individualNotificationIsRequired: true,
    individualNotificationTimelineDays: 30,
    individualNotificationTimelineDescription: '30 days',
    individualNotificationExtensionsAvailable: false,
    individualNotificationExtensionMaxDays: 0,
    individualNotificationExtensionRequestDeadlineDays: 0,
    individualNotificationContents: [],
    individualNotificationMethods: [],
    substituteNotificationIsAvailable: false,
    substituteNotificationCostTrigger: 0,
    substituteNotificationAffectedCountTrigger: 0,
    substituteNotificationInsufficientContactInfoTrigger: false,
    substituteNotificationOtherTriggers: [],
    substituteNotificationMethods: [],
    agNotificationIsRequired: true,
    agNotificationThreshold: 1000,
    agNotificationThresholdDescription: null,
    agNotificationTimelineDays: 30,
    agNotificationTimelineDescription: null,
    agNotificationTimelineRelativeTo: null,
    agNotificationTimelineRelativeDescription: null,
    agNotificationRecipients: null,
    agNotificationContents: [],
    craNotificationIsRequired: false,
    craNotificationThreshold: null,
    craNotificationThresholdDescription: null,
    craNotificationTimelineDays: null,
    craNotificationTimelineDescription: null,
    craNotificationRecipients: null,
    craNotificationContents: [],
    vendorNotificationIsRequired: false,
    vendorNotificationTimelineDays: 0,
    vendorNotificationTimelineDescription: '',
    ownerLiabilityForVendorFailure: null,
    vendorCooperationRequired: false,
    exemptionHipaa: false,
    exemptionHipaaDescription: null,
    exemptionGlba: false,
    exemptionGlbaDescription: null,
    exemptionPrimaryRegulator: false,
    exemptionPrimaryRegulatorDescription: null,
    exemptionOwnNotificationPolicy: false,
    exemptionOwnNotificationPolicyDescription: null,
    exemptionOtherDescription: null,
    enforcementPrivateRightOfAction: true,
    enforcementAuthority: 'AG',
    enforcementAuthorityIsExclusive: false,
    enforcementTypeDamagesDescription: null,
    enforcementPenaltyPerDay: 0,
    enforcementPenaltyPerIndividual: 0,
    enforcementPenaltyPerRecord: 0,
    enforcementPenaltyPerViolation: 0,
    enforcementPenaltyFlatAmount: 0,
    enforcementPenaltyMaximum: 0,
    enforcementPenaltyBasis: null,
    enforcementPenaltyNotes: null,
    provisionLawEnforcementDelay: false,
    provisionLawEnforcementDelayDescription: '',
    provisionGovernmentEntitiesAreSubject: true,
    provisionGovernmentEntitiesNotes: null,
    provisionWaiverNotPermitted: false,
    provisionNoticeAtCollectionRequired: false,
    provisionOtherDescription: null,
    tags: [],
    markdownContent: 'Test content',
  };

  describe('createLawIndex', () => {
    it('should create an index from laws array', () => {
      const laws: StateLaw[] = [
        { ...mockLaw, stateCode: 'CA', enforcementPrivateRightOfAction: true },
        { ...mockLaw, stateCode: 'NY', enforcementPrivateRightOfAction: false },
      ];

      const index = createLawIndex(laws);

      expect(index.byStateCode.size).toBe(2);
      expect(index.byStateCode.get('CA')).toBeDefined();
      expect(index.byStateCode.get('NY')).toBeDefined();
    });

    it('should correctly categorize private right of action', () => {
      const laws: StateLaw[] = [
        { ...mockLaw, stateCode: 'CA', enforcementPrivateRightOfAction: true },
        { ...mockLaw, stateCode: 'NY', enforcementPrivateRightOfAction: false },
      ];

      const index = createLawIndex(laws);

      expect(index.privateRightOfActionYes.has('CA')).toBe(true);
      expect(index.privateRightOfActionYes.has('NY')).toBe(false);
      expect(index.privateRightOfActionNo.has('NY')).toBe(true);
    });

    it('should correctly categorize risk of harm analysis', () => {
      const laws: StateLaw[] = [
        { ...mockLaw, stateCode: 'CA', riskOfHarmAnalysisCanEliminateNotification: true },
        { ...mockLaw, stateCode: 'NY', riskOfHarmAnalysisCanEliminateNotification: false },
      ];

      const index = createLawIndex(laws);

      expect(index.riskOfHarmAllowedYes.has('CA')).toBe(true);
      expect(index.riskOfHarmAllowedYes.has('NY')).toBe(false);
      expect(index.riskOfHarmAllowedNo.has('NY')).toBe(true);
    });

    it('should correctly categorize encryption safe harbor', () => {
      const laws: StateLaw[] = [
        { ...mockLaw, stateCode: 'CA', exemptionEncryptionSafeHarbor: true },
        { ...mockLaw, stateCode: 'NY', exemptionEncryptionSafeHarbor: false },
      ];

      const index = createLawIndex(laws);

      expect(index.encryptionSafeHarborYes.has('CA')).toBe(true);
      expect(index.encryptionSafeHarborYes.has('NY')).toBe(false);
      expect(index.encryptionSafeHarborNo.has('NY')).toBe(true);
    });

    it('should skip laws without stateCode', () => {
      const laws: StateLaw[] = [
        { ...mockLaw, stateCode: '' },
        { ...mockLaw, stateCode: 'NY' },
      ];

      const index = createLawIndex(laws);

      expect(index.byStateCode.size).toBe(1);
      expect(index.byStateCode.get('NY')).toBeDefined();
    });

    it('should handle empty laws array', () => {
      const index = createLawIndex([]);

      expect(index.byStateCode.size).toBe(0);
      expect(index.privateRightOfActionYes.size).toBe(0);
      expect(index.privateRightOfActionNo.size).toBe(0);
    });
  });
});
