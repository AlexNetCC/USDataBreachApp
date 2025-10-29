import React, { useState, useEffect, useMemo } from 'react';
import { AssessmentData, AssessmentResult, StateLaw, SavedAssessment } from '../../types';
import AssessmentStep1 from './AssessmentStep1';
import AssessmentStep2 from './AssessmentStep2';
import AssessmentResults from './AssessmentResults';
import AssessmentProjectManager from './AssessmentProjectManager';
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

const ASSESSMENT_STORAGE_KEY = 'breachLawNavigator_assessments';

const BreachAssessmentWizard: React.FC<BreachAssessmentWizardProps> = ({ laws, onViewSummary }) => {
  const [assessments, setAssessments] = useState<SavedAssessment[]>([]);
  const [activeAssessmentId, setActiveAssessmentId] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<AssessmentResult[] | null>(null);
  
  useEffect(() => {
    try {
      const saved = localStorage.getItem(ASSESSMENT_STORAGE_KEY);
      if (saved) {
        setAssessments(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load assessments:", e);
      setAssessments([]);
    }
  }, []);

  const saveAssessmentsToStorage = (updatedAssessments: SavedAssessment[]) => {
    try {
      localStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(updatedAssessments));
    } catch (e) {
      console.error("Failed to save assessments:", e);
    }
  };

  const activeAssessment = useMemo(() => {
    return assessments.find(a => a.id === activeAssessmentId) || null;
  }, [activeAssessmentId, assessments]);

  const handleUpdateActiveAssessment = (updatedData: Partial<AssessmentData>) => {
    if (!activeAssessmentId) return;
    
    const updatedAssessments = assessments.map(a => 
      a.id === activeAssessmentId 
        ? { 
            ...a, 
            data: { ...a.data, ...updatedData },
            lastModified: new Date().toISOString(),
          } 
        : a
    );
    setAssessments(updatedAssessments);
    saveAssessmentsToStorage(updatedAssessments);
  };
  
  const handleStep1Next = (affectedCounts: { [stateCode: string]: number }) => {
    handleUpdateActiveAssessment({ affectedCounts });
    setStep(2);
  };

  const handleStep2Next = (incidentDetails: Partial<AssessmentData>) => {
    handleUpdateActiveAssessment(incidentDetails);
    const finalData = { ...activeAssessment!.data, ...incidentDetails };
    const calculatedResults = calculateObligations(finalData, laws);
    setResults(calculatedResults);
    setStep(3);
  };
  
  const handleGoToManager = () => {
    setActiveAssessmentId(null);
    setResults(null);
    setStep(1);
  };

  const handleNewAssessment = (name: string) => {
    const newAssessment: SavedAssessment = {
      id: `asmt_${new Date().getTime()}`,
      name,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      data: initialAssessmentData,
    };
    const updatedAssessments = [newAssessment, ...assessments];
    setAssessments(updatedAssessments);
    saveAssessmentsToStorage(updatedAssessments);
    setActiveAssessmentId(newAssessment.id);
    setStep(1);
  };
  
  const handleLoadAssessment = (id: string) => {
    const assessmentToLoad = assessments.find(a => a.id === id);
    if(assessmentToLoad) {
      // Check if we need to show results or a wizard step
      const hasCounts = Object.keys(assessmentToLoad.data.affectedCounts).length > 0;
      const hasDetails = assessmentToLoad.data.dataTypes.length > 0 || assessmentToLoad.data.isEncrypted !== 'unknown';

      setActiveAssessmentId(id);
      if (hasCounts && hasDetails) {
        // This assessment was likely completed, re-calculate and show results
        const calculatedResults = calculateObligations(assessmentToLoad.data, laws);
        setResults(calculatedResults);
        setStep(3);
      } else if (hasCounts) {
        setStep(2);
      } else {
        setStep(1);
      }
    }
  };
  
  const handleDeleteAssessment = (id: string) => {
    const updatedAssessments = assessments.filter(a => a.id !== id);
    setAssessments(updatedAssessments);
    saveAssessmentsToStorage(updatedAssessments);
  };


  if (!activeAssessmentId || !activeAssessment) {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <AssessmentProjectManager 
          assessments={assessments}
          onNew={handleNewAssessment}
          onLoad={handleLoadAssessment}
          onDelete={handleDeleteAssessment}
        />
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AssessmentStep1 onNext={handleStep1Next} initialData={activeAssessment.data.affectedCounts} laws={laws} />;
      case 2:
        return <AssessmentStep2 onNext={handleStep2Next} onBack={() => setStep(1)} initialData={activeAssessment.data} />;
      case 3:
        return results ? <AssessmentResults results={results} assessmentData={activeAssessment.data} onRestart={handleGoToManager} onViewSummary={onViewSummary} /> : null;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-xl font-semibold text-text-secondary mb-4">
        Assessment: <span className="font-bold text-text-primary">{activeAssessment.name}</span>
      </h2>
      {renderStep()}
    </div>
  );
};

export default BreachAssessmentWizard;