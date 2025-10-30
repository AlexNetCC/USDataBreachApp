import React from 'react';
import { StateLaw } from '../types';

interface StateCardProps {
  law: StateLaw;
  isSelected: boolean;
  onSelect: () => void;
  onClick: () => void;
}

const StateCard: React.FC<StateCardProps> = ({ law, isSelected, onSelect, onClick }) => {
  // Determine timeline color
  const getTimelineColor = (days: number) => {
    if (days === 0) return 'bg-red-500';
    if (days <= 30) return 'bg-orange-500';
    if (days <= 45) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const timelineText = law.individualNotificationTimelineDays > 0
    ? `${law.individualNotificationTimelineDays}d`
    : 'ASAP';

  return (
    <div
      className={`
        relative group
        bg-surface-light rounded-lg border-2 transition-all duration-200 cursor-pointer
        hover:shadow-lg hover:scale-[1.02] hover:z-10
        ${isSelected
          ? 'border-accent shadow-md ring-2 ring-accent/20'
          : 'border-border-light hover:border-accent/40'}
      `}
      onClick={onClick}
    >
      {/* Compact Card Content */}
      <div className="p-3">
        {/* Header Row: State Name + Checkbox */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-text-primary font-display truncate">
              {law.state}
            </h3>
            <p className="text-xs text-text-secondary">{law.stateCode}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className={`
              flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ml-2
              ${isSelected
                ? 'bg-accent border-accent'
                : 'bg-white border-gray-300 hover:border-accent'}
            `}
            aria-label={`Select ${law.state}`}
          >
            {isSelected && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Compact Key Metrics */}
        <div className="space-y-1.5 mb-2">
          {/* Timeline Badge - Compact */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-secondary">Timeline</span>
            <div className={`
              px-2 py-0.5 rounded-full text-white text-xs font-semibold
              ${getTimelineColor(law.individualNotificationTimelineDays)}
            `}>
              {timelineText}
            </div>
          </div>

          {/* AG Threshold - Compact */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-secondary">AG</span>
            <span className="font-semibold text-text-primary">
              {law.agNotificationThreshold?.toLocaleString() || 'N/A'}
            </span>
          </div>
        </div>

        {/* Compact Feature Indicators - Icon-based */}
        <div className="flex items-center gap-1 pt-2 border-t border-border-light">
          {law.enforcementPrivateRightOfAction && (
            <div
              className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center"
              title="Private Right of Action"
            >
              <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {law.riskOfHarmAnalysisCanEliminateNotification && (
            <div
              className="w-6 h-6 rounded bg-green-100 flex items-center justify-center"
              title="Risk of Harm Analysis Allowed"
            >
              <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {law.exemptionEncryptionSafeHarbor && (
            <div
              className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center"
              title="Encryption Safe Harbor"
            >
              <svg className="w-3.5 h-3.5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Hover Effect - No overlay, just a small tooltip */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-text-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Click to view details
        </div>
      </div>
    </div>
  );
};

interface StateCardGalleryProps {
  laws: StateLaw[];
  selectedStateCodes: string[];
  onSelectState: (code: string) => void;
  onViewState: (code: string) => void;
}

const StateCardGallery: React.FC<StateCardGalleryProps> = ({
  laws,
  selectedStateCodes,
  onSelectState,
  onViewState
}) => {
  return (
    <div className="p-4 md:p-6">
      {/* Compact Header */}
      <div className="mb-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl font-bold font-display text-text-primary">
            U.S. Data Breach Laws
          </h2>
          <span className="text-sm text-text-secondary">
            {laws.length} jurisdiction{laws.length !== 1 ? 's' : ''}
            {selectedStateCodes.length > 0 && (
              <> • <span className="font-semibold text-accent">{selectedStateCodes.length} selected</span></>
            )}
          </span>
        </div>
      </div>

      {/* Dense Grid - More columns, tighter spacing */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {laws.map(law => (
          <StateCard
            key={law.stateCode}
            law={law}
            isSelected={selectedStateCodes.includes(law.stateCode)}
            onSelect={() => onSelectState(law.stateCode)}
            onClick={() => onViewState(law.stateCode)}
          />
        ))}
      </div>

      {/* Empty State */}
      {laws.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-text-primary mb-1">No states match your filters</h3>
          <p className="text-sm text-text-secondary">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default StateCardGallery;
