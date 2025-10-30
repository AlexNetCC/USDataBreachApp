import React from 'react';
import { StateLaw } from '../types';

interface SelectedStatesBarProps {
  selectedLaws: StateLaw[];
  onRemoveState: (code: string) => void;
  onClearAll: () => void;
  onViewComparison: () => void;
}

const SelectedStatesBar: React.FC<SelectedStatesBarProps> = ({
  selectedLaws,
  onRemoveState,
  onClearAll,
  onViewComparison
}) => {
  if (selectedLaws.length === 0) return null;

  return (
    <div className="sticky top-[152px] z-10 bg-white border-b border-border-light shadow-sm animate-slide-down">
      <div className="container mx-auto px-4 md:px-6 py-2">
        <div className="flex items-center justify-between gap-3">
          {/* Selected States Chips - Compact */}
          <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
            <span className="text-xs font-semibold text-text-secondary whitespace-nowrap">
              Selected ({selectedLaws.length}):
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {selectedLaws.slice(0, 8).map(law => (
                <div
                  key={law.stateCode}
                  className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 border border-accent/30 rounded text-accent font-medium text-xs"
                >
                  <span>{law.stateCode}</span>
                  <button
                    onClick={() => onRemoveState(law.stateCode)}
                    className="hover:bg-accent/20 rounded-full p-0.5 transition"
                    aria-label={`Remove ${law.state}`}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
              {selectedLaws.length > 8 && (
                <span className="text-xs text-text-secondary">
                  +{selectedLaws.length - 8} more
                </span>
              )}
            </div>
            <button
              onClick={onClearAll}
              className="text-xs text-text-secondary hover:text-accent transition font-medium whitespace-nowrap ml-1"
            >
              Clear All
            </button>
          </div>

          {/* Compare Button - Only show if 2+ states */}
          {selectedLaws.length >= 2 && (
            <button
              onClick={onViewComparison}
              className="px-4 py-1.5 bg-accent text-white font-semibold text-sm rounded-lg hover:bg-accent-hover transition shadow-md flex items-center gap-1.5 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Compare
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedStatesBar;
