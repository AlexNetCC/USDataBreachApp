import React, { useState } from 'react';
import { AssessmentData, EntityType } from '../../types';
import WizardStep from './WizardStep';

interface AssessmentStep2Props {
  onNext: (details: Partial<AssessmentData>) => void;
  onBack: () => void;
  initialData: AssessmentData;
}

const commonDataTypes: { id: string; label: string, description: string }[] = [
    { id: 'Social Security Number', label: 'Social Security Numbers', description: 'Often triggers credit monitoring requirements.' },
    { id: 'Driver\'s License Number', label: 'Driver\'s License / State ID', description: 'A key government-issued identifier.' },
    { id: 'Financial Account Number', label: 'Financial / Account Numbers', description: 'Credit/debit card numbers with access codes.' },
    { id: 'Medical Information', label: 'Healthcare / Medical Info', description: 'Medical history, diagnosis, or health insurance info.' },
    { id: 'Online Account Credentials', label: 'Online Account Credentials', description: 'Username/email with password or security question.' },
    { id: 'Biometric Data', label: 'Biometric Data', description: 'Fingerprints, voice prints, retina scans, etc.' },
];

const otherDataTypes: { id: string; label: string, description: string }[] = [
    { id: 'Passport Number', label: 'Passport Number', description: 'A federal government-issued identifier.' },
    { id: 'Taxpayer ID Number', label: 'Taxpayer ID Number', description: 'Federal tax identification numbers.' },
    { id: 'Genetic Data', label: 'Genetic Data', description: 'Information from genetic testing.' },
    { id: 'Health Insurance Information', label: 'Health Insurance ID', description: 'Policy or subscriber numbers.' },
];


const AssessmentStep2: React.FC<AssessmentStep2Props> = ({ onNext, onBack, initialData }) => {
  const [isEncrypted, setIsEncrypted] = useState<'yes' | 'no' | 'unknown'>(initialData.isEncrypted);
  const [wasKeyCompromised, setWasKeyCompromised] = useState<'yes' | 'no' | 'unknown'>(initialData.wasKeyCompromised);
  const [dataTypes, setDataTypes] = useState<string[]>(initialData.dataTypes);
  const [entityType, setEntityType] = useState<EntityType>(initialData.entityType);
  const [lawEnforcementInvolvement, setLawEnforcementInvolvement] = useState<boolean>(initialData.lawEnforcementInvolvement);
  const [lowRiskOfHarmConsidered, setLowRiskOfHarmConsidered] = useState<boolean>(initialData.lowRiskOfHarmConsidered);


  const handleDataTypeChange = (type: string) => {
    setDataTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = () => {
    onNext({
      isEncrypted,
      wasKeyCompromised: isEncrypted === 'yes' ? wasKeyCompromised : 'no',
      dataTypes,
      entityType,
      lawEnforcementInvolvement,
      lowRiskOfHarmConsidered,
    });
  };

  return (
    <WizardStep
        title="Breach Assessment Wizard"
        subtitle="Step 2: Provide details about the incident."
        onNext={handleSubmit}
        nextButtonText="Generate Assessment"
        leftFooterContent={
            <button
                onClick={onBack}
                className="px-6 py-3 bg-gray-200 text-text-primary font-semibold rounded-md hover:bg-gray-300 transition"
            >
                Back
            </button>
        }
    >
      <div className="space-y-8">
        
        <div>
          <label className="block text-md font-semibold text-text-primary mb-2">What type of entity are you?</label>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {(['business', 'government', 'healthcare'] as const).map(option => (
              <label key={option} className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition">
                <input
                  type="radio"
                  name="entityType"
                  value={option}
                  checked={entityType === option}
                  onChange={() => setEntityType(option)}
                  className="h-4 w-4 text-brand-secondary focus:ring-brand-accent"
                />
                <span className="ml-3 capitalize text-text-primary">{option === 'healthcare' ? 'Healthcare/HIPAA Covered' : option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
            <label className="block text-md font-semibold text-text-primary mb-2">What types of personal information were involved?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commonDataTypes.map(option => (
                <label key={option.id} className="flex items-start p-3 border rounded-md hover:bg-gray-50 transition cursor-pointer">
                    <input
                        type="checkbox"
                        checked={dataTypes.includes(option.id)}
                        onChange={() => handleDataTypeChange(option.id)}
                        className="h-5 w-5 rounded border-gray-300 text-brand-secondary focus:ring-brand-accent mt-0.5"
                    />
                    <div className="ml-3">
                        <span className="font-medium text-text-primary">{option.label}</span>
                        <p className="text-xs text-text-secondary">{option.description}</p>
                    </div>
                </label>
            ))}
            </div>
            <details className="group mt-3 border rounded-md">
                <summary className="list-none flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 text-sm font-medium text-text-secondary">
                    <span>Show Other PII Types</span>
                     <svg className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div className="p-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {otherDataTypes.map(option => (
                        <label key={option.id} className="flex items-start p-3 border rounded-md hover:bg-gray-50 transition cursor-pointer">
                            <input
                                type="checkbox"
                                checked={dataTypes.includes(option.id)}
                                onChange={() => handleDataTypeChange(option.id)}
                                className="h-5 w-5 rounded border-gray-300 text-brand-secondary focus:ring-brand-accent mt-0.5"
                            />
                            <div className="ml-3">
                                <span className="font-medium text-text-primary">{option.label}</span>
                                <p className="text-xs text-text-secondary">{option.description}</p>
                            </div>
                        </label>
                    ))}
                </div>
            </details>
        </div>

        <div>
          <label className="block text-md font-semibold text-text-primary mb-2">Was the compromised data encrypted?</label>
          <div className="flex space-x-4">
            {(['yes', 'no', 'unknown'] as const).map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="isEncrypted"
                  value={option}
                  checked={isEncrypted === option}
                  onChange={() => setIsEncrypted(option)}
                  className="h-4 w-4 text-brand-secondary focus:ring-brand-accent"
                />
                <span className="ml-2 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {isEncrypted === 'yes' && (
          <div className="pl-4 border-l-4 border-brand-accent/30">
            <label className="block text-md font-semibold text-text-primary mb-2">Was the encryption key also compromised?</label>
             <div className="flex space-x-4">
                {(['yes', 'no', 'unknown'] as const).map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="wasKeyCompromised"
                      value={option}
                      checked={wasKeyCompromised === option}
                      onChange={() => setWasKeyCompromised(option)}
                      className="h-4 w-4 text-brand-secondary focus:ring-brand-accent"
                    />
                    <span className="ml-2 capitalize">{option}</span>
                  </label>
                ))}
              </div>
          </div>
        )}
        
        <div>
          <label className="block text-md font-semibold text-text-primary mb-2">Is a "low risk of harm" determination being considered for this incident?</label>
          <p className="text-sm text-text-secondary mb-2">Some states allow you to avoid notification if you determine the breach is unlikely to result in harm. Select "Yes" if you plan to perform this analysis.</p>
          <div className="flex space-x-4">
            {[
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ].map(option => (
              <label key={String(option.value)} className="flex items-center">
                <input
                  type="radio"
                  name="lowRiskOfHarmConsidered"
                  checked={lowRiskOfHarmConsidered === option.value}
                  onChange={() => setLowRiskOfHarmConsidered(option.value)}
                  className="h-4 w-4 text-brand-secondary focus:ring-brand-accent"
                />
                <span className="ml-2 capitalize">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-md font-semibold text-text-primary mb-2">Has a law enforcement agency requested a delay in notification?</label>
          <div className="flex space-x-4">
            {([true, false] as const).map(option => (
              <label key={String(option)} className="flex items-center">
                <input
                  type="radio"
                  name="lawEnforcementInvolvement"
                  checked={lawEnforcementInvolvement === option}
                  onChange={() => setLawEnforcementInvolvement(option)}
                  className="h-4 w-4 text-brand-secondary focus:ring-brand-accent"
                />
                <span className="ml-2 capitalize">{option ? 'Yes' : 'No'}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </WizardStep>
  );
};

export default AssessmentStep2;