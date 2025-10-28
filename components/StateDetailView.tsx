
import React, { useState } from 'react';
import { StateLaw } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import InfoCard from './InfoCard';
import BooleanIndicator from './BooleanIndicator';
import AskAI from './AskAI';

interface StateDetailViewProps {
  law: StateLaw;
}

const StateDetailView: React.FC<StateDetailViewProps> = ({ law }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <header className="pb-4 border-b border-border-color">
        <h1 className="text-4xl font-bold font-display text-text-primary">{law.state}</h1>
        <p className="mt-2 text-lg text-text-secondary">{law.statuteTitle}</p>
        <a href={law.statuteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-secondary hover:underline">
          {law.statuteCitation}
        </a>
      </header>

      <AskAI law={law} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard title="Individual Notification Timeline">
            <p className="text-3xl font-bold text-brand-primary">{law.individualNotificationTimelineDays > 0 ? `${law.individualNotificationTimelineDays} days` : 'ASAP'}</p>
        </InfoCard>
         <InfoCard title="AG Notification Required">
            <div className="flex items-center space-x-2">
                <BooleanIndicator value={law.agNotificationIsRequired} />
                <span className="text-lg font-semibold">{law.agNotificationIsRequired ? `Threshold: ${law.agNotificationThreshold || 'N/A'}` : 'No'}</span>
            </div>
        </InfoCard>
        <InfoCard title="Private Right of Action">
             <div className="flex items-center space-x-2">
                <BooleanIndicator value={law.enforcementPrivateRightOfAction} />
                <span className="text-lg font-semibold">{law.enforcementPrivateRightOfAction ? 'Yes' : 'No'}</span>
            </div>
        </InfoCard>
      </div>
      
      <InfoCard title="Breach Definition" defaultOpen>
        <p className="text-text-secondary italic">{law.breachDefinitionText}</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm font-medium text-text-secondary">Trigger</p>
                <p className="font-semibold text-text-primary">{law.breachTrigger}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm font-medium text-text-secondary">Acquisition Alone Triggers</p>
                <p className="font-semibold text-text-primary">{law.breachAcquisitionAloneTriggers ? 'Yes' : 'No'}</p>
            </div>
        </div>
      </InfoCard>
      
       <InfoCard title="Risk of Harm Analysis">
        <div className="space-y-3">
          <p><strong className="font-semibold">Permitted: </strong><BooleanIndicator value={law.riskOfHarmAnalysisCanEliminateNotification} /></p>
          {law.riskOfHarmAnalysisCanEliminateNotification && (
            <div>
              <p className="font-semibold">Standard:</p>
              <blockquote className="pl-4 border-l-4 border-border-color italic text-text-secondary">{law.riskOfHarmAnalysisStandard}</blockquote>
            </div>
          )}
        </div>
      </InfoCard>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-border-color">
         <h2 className="text-2xl font-bold font-display text-text-primary mb-4">Full Legal Summary</h2>
        <MarkdownRenderer content={law.markdownContent} />
      </div>
    </div>
  );
};

export default StateDetailView;
