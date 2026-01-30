import React, { useState, useRef, useEffect } from 'react';
import { StateLaw, Filters, TriStateFilter } from '../types';

interface StateSelectorProps {
  laws: StateLaw[];
  selectedStateCodes: string[];
  onSelectState: (stateCode: string) => void;
  onClearSelection: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: Filters;
  onFilterChange: (filterName: keyof Filters, value: any) => void;
  onResetFilters: () => void;
}

const FilterSelect: React.FC<{
    label: string;
    name: keyof Filters;
    value: TriStateFilter;
    onChange: (name: keyof Filters, value: TriStateFilter) => void;
}> = ({ label, name, value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-on-dark-secondary">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value as TriStateFilter)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-border-dark focus:outline-none focus:ring-accent focus:border-accent sm:text-sm rounded-md bg-surface text-on-dark"
        >
            <option value="any">Any</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
    </div>
);

// Helper function to get timeline badge color and text
const getTimelineBadge = (days: number) => {
  if (days === 0) {
    return { color: 'bg-red-500/90', text: 'ASAP', textColor: 'text-white' };
  } else if (days <= 30) {
    return { color: 'bg-orange-500/90', text: `${days}d`, textColor: 'text-white' };
  } else if (days <= 45) {
    return { color: 'bg-yellow-500/90', text: `${days}d`, textColor: 'text-gray-900' };
  } else {
    return { color: 'bg-green-500/90', text: `${days}d`, textColor: 'text-white' };
  }
};

const StateListItem: React.FC<{
  law: StateLaw;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ law, isSelected, onSelect }) => {
  const timelineBadge = getTimelineBadge(law.individualNotificationTimelineDays);

  return (
    <label
      className={`block py-2.5 px-3 rounded-lg cursor-pointer transition-all duration-200 border ${
        isSelected
          ? 'bg-accent/10 border-accent/50 shadow-sm'
          : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="h-5 w-5 mt-0.5 rounded border-gray-600 text-accent focus:ring-accent bg-transparent flex-shrink-0"
          aria-label={`Select ${law.state} for comparison`}
          id={`checkbox-${law.stateCode}`}
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* State name and Timeline badge */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`font-semibold text-base leading-tight ${isSelected ? 'text-accent' : 'text-on-dark'}`}>
              {law.state}
            </span>
            <span className={`${timelineBadge.color} ${timelineBadge.textColor} text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0`}>
              {timelineBadge.text}
            </span>
          </div>

          {/* AG Threshold and State Code */}
          <div className="flex items-center gap-3 text-xs text-on-dark-secondary mb-1.5">
            <span className="font-medium">
              {law.stateCode}
            </span>
            {law.agNotificationThreshold !== null && (
              <>
                <span className="text-on-dark-secondary/40">•</span>
                <span className="font-medium">
                  AG: {law.agNotificationThreshold.toLocaleString()}
                </span>
              </>
            )}
          </div>

          {/* Feature Icons with tooltips */}
          <div className="flex items-center gap-1.5">
            {law.enforcementPrivateRightOfAction && (
              <div
                className="group relative"
                title="Private Right of Action"
              >
                <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  Private Action
                </div>
              </div>
            )}

            {law.riskOfHarmAnalysisCanEliminateNotification && (
              <div
                className="group relative"
                title="Risk of Harm Analysis Allowed"
              >
                <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  Risk of Harm
                </div>
              </div>
            )}

            {law.exemptionEncryptionSafeHarbor && (
              <div
                className="group relative"
                title="Encryption Safe Harbor"
              >
                <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  Encryption Safe Harbor
                </div>
              </div>
            )}
          </div>

          {/* Search snippet */}
          {law.searchSnippet && (
            <div
              className="mt-2 pl-2 border-l-2 border-accent/50 text-xs text-on-dark-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: law.searchSnippet.replace('bg-yellow-200', 'bg-accent/20 text-on-dark') }}
            />
          )}
        </div>
      </div>
    </label>
  );
};

const StateSelector: React.FC<StateSelectorProps> = ({
  laws,
  selectedStateCodes,
  onSelectState,
  onClearSelection,
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  onResetFilters,
}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    // Local state for immediate input feedback (debounced search)
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
    
    // Debounce the search callback (300ms) to prevent excessive re-renders
    useEffect(() => {
      const timer = setTimeout(() => {
        if (localSearchTerm !== searchTerm) {
          onSearchChange(localSearchTerm);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }, [localSearchTerm, searchTerm, onSearchChange]);
    
    // Sync with parent when searchTerm changes externally (e.g., reset filters)
    useEffect(() => {
      setLocalSearchTerm(searchTerm);
    }, [searchTerm]);

    const handleNumericChange = (name: keyof Filters, value: string) => {
        onFilterChange(name, value === '' ? null : Number(value));
    };

    const hasActiveFilters = searchTerm ||
        filters.timelineMaxDays !== null ||
        filters.agThresholdMax !== null ||
        filters.privateRightOfAction !== 'any' ||
        filters.riskOfHarmAllowed !== 'any' ||
        filters.encryptionSafeHarbor !== 'any';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setIsFilterOpen(false);
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isFilterOpen) {
                setIsFilterOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFilterOpen]);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 sticky top-0 bg-surface pt-2 pb-3 z-10">
        <h2 className="text-2xl font-bold font-display mb-3 text-on-dark">Select & Filter</h2>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search states and law text..."
            value={localSearchTerm}
            onChange={e => setLocalSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border-dark rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition bg-surface text-on-dark placeholder-on-dark-secondary"
          />
          <svg className="w-5 h-5 text-on-dark-secondary absolute left-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex justify-between items-center">
            <div className="relative" ref={filterRef}>
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    onKeyDown={(e) => e.key === 'Enter' && setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center justify-between p-2 -mx-2 rounded-md cursor-pointer hover:bg-white/10"
                    aria-expanded={isFilterOpen}
                    aria-haspopup="true"
                    aria-label="Advanced filter options"
                >
                    <span className="font-semibold text-on-dark">Advanced Filters</span>
                    <svg className={`w-5 h-5 text-on-dark-secondary transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isFilterOpen && (
                    <div className="absolute top-full mt-2 w-72 bg-surface rounded-lg shadow-xl border border-border-dark p-4 space-y-4 z-20">
                        <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-on-dark-secondary">Individual Notification Timeline (Max Days)</label>
                            <input
                                type="number"
                                id="timeline"
                                name="timelineMaxDays"
                                value={filters.timelineMaxDays ?? ''}
                                onChange={(e) => handleNumericChange('timelineMaxDays', e.target.value)}
                                placeholder="e.g., 45"
                                className="mt-1 w-full p-2 border border-border-dark rounded-md focus:ring-1 focus:ring-accent bg-surface text-on-dark"
                                min="0"
                            />
                        </div>
                        <div>
                            <label htmlFor="ag-threshold" className="block text-sm font-medium text-on-dark-secondary">AG Notification Threshold (Max Individuals)</label>
                            <input
                                type="number"
                                id="ag-threshold"
                                name="agThresholdMax"
                                value={filters.agThresholdMax ?? ''}
                                onChange={(e) => handleNumericChange('agThresholdMax', e.target.value)}
                                placeholder="e.g., 500"
                                className="mt-1 w-full p-2 border border-border-dark rounded-md focus:ring-1 focus:ring-accent bg-surface text-on-dark"
                                min="0"
                            />
                        </div>
                        <FilterSelect label="Private Right of Action" name="privateRightOfAction" value={filters.privateRightOfAction} onChange={onFilterChange} />
                        <FilterSelect label="Risk of Harm Analysis Permitted" name="riskOfHarmAllowed" value={filters.riskOfHarmAllowed} onChange={onFilterChange} />
                        <FilterSelect label="Encryption Safe Harbor" name="encryptionSafeHarbor" value={filters.encryptionSafeHarbor} onChange={onFilterChange} />

                        <button
                            onClick={() => { onResetFilters(); setIsFilterOpen(false); }}
                            className="w-full text-sm font-semibold text-accent hover:text-accent-hover transition pt-2"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
            {hasActiveFilters && (
                 <button
                    onClick={() => onResetFilters()}
                    className="text-sm font-semibold text-accent hover:text-accent-hover transition"
                >
                    Clear All Filters
                </button>
            )}
        </div>

        {selectedStateCodes.length > 0 && (
          <div className="mt-4 flex justify-between items-center border-t border-border-dark pt-3">
             <p className="text-sm text-on-dark-secondary font-medium">{selectedStateCodes.length} selected</p>
             <button
               onClick={onClearSelection}
               className="text-sm font-semibold text-accent hover:text-accent-hover transition"
             >
               Clear Selection
             </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto -mr-4 pr-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-on-dark-secondary font-medium">
            {laws.length} matching jurisdiction{laws.length !== 1 ? 's' : ''}
          </p>
          {/* Legend for timeline colors */}
          <div className="flex items-center gap-1.5 text-xs text-on-dark-secondary">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
        </div>
        <ul className="space-y-1">
          {laws.map(law => (
            <li key={law.stateCode}>
              <StateListItem
                law={law}
                isSelected={selectedStateCodes.includes(law.stateCode)}
                onSelect={() => onSelectState(law.stateCode)}
              />
            </li>
          ))}
           {laws.length === 0 && (
                <li className="text-center text-on-dark-secondary py-4">No states match the current filters.</li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default StateSelector;
