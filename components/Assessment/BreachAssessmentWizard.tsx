import React, { useState } from 'react';
import { AssessmentData, AssessmentResult, StateLaw } from '../../types';
import AssessmentStep1 from './AssessmentStep1';
import AssessmentStep2 from './AssessmentStep2';
import AssessmentResults from './AssessmentResults';
import { calculateObligations } from '../../services/assessmentService';

interface BreachAssessmentWizardProps {
  laws: StateLaw[];
  onViewSummary: (stateCode: string) => void;
}

const initialAssessmentData: AssessmentData = {
  affectedCounts: {},
  isEncrypted: 'unknown',
  wasKeyCompromised: 'unknown',
  dataTypes: [],
  entityType: 'business',
  lawEnforcementInvolvement: false,
  lowRiskOfHarmConsidered: false,
};

const BreachAssessmentWizard: React.FC<BreachAssessmentWizardProps> = ({ laws, onViewSummary }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AssessmentData>(initialAssessmentData);
  const [results, setResults] = useState<AssessmentResult[] | null>(null);

  const handleStep1Next = (affectedCounts: { [stateCode: string]: number }) => {
    setData(prev => ({ ...prev, affectedCounts }));
    setStep(2);
  };

  const handleStep2Next = (incidentDetails: Partial<AssessmentData>) => {
    const finalData = { ...data, ...incidentDetails };
    setData(finalData);
    const calculatedResults = calculateObligations(finalData, laws);
    setResults(calculatedResults);
    setStep(3);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };
  
  const handleRestart = () => {
    setData(initialAssessmentData);
    setResults(null);
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AssessmentStep1 onNext={handleStep1Next} initialData={data.affectedCounts} laws={laws} />;
      case 2:
        return <AssessmentStep2 onNext={handleStep2Next} onBack={handleBack} initialData={data} />;
      case 3:
        return results ? <AssessmentResults results={results} assessmentData={data} onRestart={handleRestart} onViewSummary={onViewSummary} /> : null;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      {renderStep()}
    </div>
  );
};

export default BreachAssessmentWizard;