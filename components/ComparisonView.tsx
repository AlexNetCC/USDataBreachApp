
import React from 'react';
import { StateLaw } from '../types';
import ComparisonSection, { ComparisonField } from './ComparisonSection';

interface ComparisonViewProps {
  laws: StateLaw[];
}

const keyTimelineFields: ComparisonField[] = [
    { label: 'Individual Notification', key: 'individualNotificationTimelineDays', render: (val) => val > 0 ? `${val} days` : 'ASAP' },
    { label: 'AG Notification', key: 'agNotificationTimelineDays', render: (val) => val !== null ? (val > 0 ? `${val} days` : 'Concurrent') : 'N/A' },
    { label: 'Vendor to Owner Notification', key: 'vendorNotificationTimelineDays', render: (val) => val > 0 ? `${val} days` : 'ASAP/Immediate' },
];

const notificationTriggerFields: ComparisonField[] = [
    { label: 'Breach Definition', key: 'breachDefinitionText', isLongText: true },
    { label: 'Trigger Type', key: 'breachTrigger', render: (val) => val ? String(val).split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'N/A' },
    { label: 'Risk of Harm Analysis Allowed', key: 'riskOfHarmAnalysisCanEliminateNotification', isBoolean: true },
    { label: 'Risk of Harm Standard', key: 'riskOfHarmAnalysisStandard', isLongText: true },
];

const reportingThresholdFields: ComparisonField[] = [
    { label: 'AG Notification', key: 'agNotificationThreshold', render: (val) => val?.toLocaleString() ?? 'N/A' },
    { label: 'CRA Notification', key: 'craNotificationThreshold', render: (val) => val?.toLocaleString() ?? 'N/A' },
    { label: 'Sub. Notice (Cost Trigger)', key: 'substituteNotificationCostTrigger', render: (val) => val > 0 ? `$${val.toLocaleString()}`: 'N/A' },
    { label: 'Sub. Notice (Count Trigger)', key: 'substituteNotificationAffectedCountTrigger', render: (val) => val > 0 ? val.toLocaleString(): 'N/A' },
];

const exemptionsAndEnforcementFields: ComparisonField[] = [
    { label: 'Private Right of Action', key: 'enforcementPrivateRightOfAction', isBoolean: true },
    { label: 'Enforcement Authority', key: 'enforcementAuthority' },
    { label: 'Encryption Safe Harbor', key: 'exemptionEncryptionSafeHarbor', isBoolean: true },
    { label: 'HIPAA Exemption', key: 'exemptionHipaa', isBoolean: true },
    { label: 'GLBA Exemption', key: 'exemptionGlba', isBoolean: true },
    { label: 'Max Penalty', key: 'enforcementPenaltyMaximum', render: (val) => val > 0 ? `$${val.toLocaleString()}` : 'Not Specified' },
];


const ComparisonView: React.FC<ComparisonViewProps> = ({ laws }) => {
  if (laws.length === 0) {
    return null;
  }
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 printable-content animate-slide-in">
      <header className="pb-8 border-b-2 border-border-light">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-6xl font-bold font-display text-text-primary mb-3">Comparative Analysis</h1>
                <p className="text-xl text-text-secondary font-medium">
                  Comparing {laws.map(l => l.state).join(', ')}
                </p>
            </div>
            <button
              onClick={handlePrint}
              className="no-print px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover hover:shadow-md transition-all duration-250 flex items-center gap-2"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H5zm3 1a1 1 0 000 2h2a1 1 0 100-2H8zM5 12a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M4 8a1 1 0 100 2h12a1 1 0 100-2H4z" />
               </svg>
              <span>Export for Client</span>
            </button>
        </div>
         <div className="mt-6 flex items-start gap-3 text-sm text-text-secondary no-print bg-accent/5 p-4 rounded-lg border border-accent/20">
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="leading-relaxed">Rows are highlighted when legal requirements differ across selected jurisdictions.</span>
        </div>
      </header>

      <ComparisonSection 
        title="Key Timelines"
        laws={laws}
        fields={keyTimelineFields}
        defaultOpen
      />
      <ComparisonSection 
        title="Notification Triggers & Definitions"
        laws={laws}
        fields={notificationTriggerFields}
        defaultOpen
      />
      <ComparisonSection 
        title="Reporting Thresholds"
        laws={laws}
        fields={reportingThresholdFields}
      />
      <ComparisonSection 
        title="Exemptions & Enforcement"
        laws={laws}
        fields={exemptionsAndEnforcementFields}
      />
    </div>
  );
};

export default ComparisonView;
