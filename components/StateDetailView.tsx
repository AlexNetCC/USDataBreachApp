
import React, { useState } from 'react';
import { StateLaw } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import InfoCard from './InfoCard';
import BooleanIndicator from './BooleanIndicator';
import AskAI from './AskAI';
import CopyableProvision from './CopyableProvision';

interface StateDetailViewProps {
  law: StateLaw;
}

const StateDetailView: React.FC<StateDetailViewProps> = ({ law }) => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-slide-in">
      {/* Header Section */}
      <header className="pb-8 border-b-2 border-border-light">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-6xl font-bold font-display text-text-primary mb-3">{law.state}</h1>
            <p className="text-xl text-text-secondary mb-3 font-medium">{law.statuteTitle}</p>
            <a
              href={law.statuteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
            >
              {law.statuteCitation}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* AI Assistant */}
      <AskAI law={law} />

      {/* Copy Provisions Section */}
      <div className="bg-surface-light p-6 rounded-xl shadow-card border border-border-light no-print">
        <h2 className="text-2xl font-bold font-display text-text-primary mb-4">Copy Legal Provisions</h2>
        <p className="text-text-secondary mb-4">Quickly copy formatted legal provisions for emails, memos, and client communications:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <CopyableProvision law={law} provisionType="timeline" title="Timelines" />
          <CopyableProvision law={law} provisionType="threshold" title="Thresholds" />
          <CopyableProvision law={law} provisionType="exemption" title="Exemptions" />
          <CopyableProvision law={law} provisionType="enforcement" title="Enforcement" />
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard title="Individual Notification Timeline">
            <p className="text-4xl font-bold text-accent">{law.individualNotificationTimelineDays > 0 ? `${law.individualNotificationTimelineDays} days` : 'ASAP'}</p>
        </InfoCard>
         <InfoCard title="AG Notification Required">
            <div className="flex items-center space-x-3">
                <BooleanIndicator value={law.agNotificationIsRequired} />
                <span className="text-lg font-semibold text-text-primary">{law.agNotificationIsRequired ? `Threshold: ${law.agNotificationThreshold || 'N/A'}` : 'No'}</span>
            </div>
        </InfoCard>
        <InfoCard title="Private Right of Action">
             <div className="flex items-center space-x-3">
                <BooleanIndicator value={law.enforcementPrivateRightOfAction} />
                <span className="text-lg font-semibold text-text-primary">{law.enforcementPrivateRightOfAction ? 'Yes' : 'No'}</span>
            </div>
        </InfoCard>
      </div>

      {/* Detailed Information Sections */}
      <InfoCard title="Breach Definition" defaultOpen>
        <p className="text-text-secondary italic leading-relaxed text-base">{law.breachDefinitionText}</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-1">Trigger</p>
                <p className="font-bold text-text-primary text-lg">{law.breachTrigger.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</p>
            </div>
            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-1">Acquisition Alone Triggers</p>
                <p className="font-bold text-text-primary text-lg">{law.breachAcquisitionAloneTriggers ? 'Yes' : 'No'}</p>
            </div>
        </div>
      </InfoCard>

       <InfoCard title="Risk of Harm Analysis">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-text-primary">Permitted:</span>
            <BooleanIndicator value={law.riskOfHarmAnalysisCanEliminateNotification} />
          </div>
          {law.riskOfHarmAnalysisCanEliminateNotification && (
            <div>
              <p className="font-semibold text-text-primary mb-2">Standard:</p>
              <blockquote className="pl-4 border-l-4 border-accent/30 italic text-text-secondary leading-relaxed bg-accent/5 p-4 rounded-r-lg">{law.riskOfHarmAnalysisStandard}</blockquote>
            </div>
          )}
        </div>
      </InfoCard>

      {/* Full Legal Summary */}
      <div className="bg-surface-light p-8 rounded-xl shadow-card border border-border-light">
         <h2 className="text-3xl font-bold font-display text-text-primary mb-6">Full Legal Summary</h2>
        <MarkdownRenderer content={law.markdownContent} />
      </div>
    </div>
  );
};

export default StateDetailView;
