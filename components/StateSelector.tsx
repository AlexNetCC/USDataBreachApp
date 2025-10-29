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
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
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
        <p className="text-sm text-on-dark-secondary mb-2 font-medium">{laws.length} matching jurisdictions</p>
        <ul className="space-y-1">
          {laws.map(law => (
            <li key={law.stateCode}>
              <label
                className={`block py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                  selectedStateCodes.includes(law.stateCode)
                    ? 'bg-accent/10 border-accent/50'
                    : 'bg-transparent border-transparent hover:bg-white/5'
                }`}
              >
                <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedStateCodes.includes(law.stateCode)}
                      onChange={() => onSelectState(law.stateCode)}
                      className="h-5 w-5 rounded border-gray-600 text-accent focus:ring-accent bg-transparent"
                      aria-label={`Select ${law.state} for comparison`}
                      id={`checkbox-${law.stateCode}`}
                    />
                    <span className={`ml-3 font-semibold ${selectedStateCodes.includes(law.stateCode) ? 'text-accent' : 'text-on-dark'}`}>
                      {law.state}
                    </span>
                </div>
                {law.searchSnippet && (
                    <div 
                        className="mt-2 ml-8 pl-1 border-l-2 border-accent/50 text-xs text-on-dark-secondary"
                        dangerouslySetInnerHTML={{ __html: law.searchSnippet.replace('bg-yellow-200', 'bg-accent/20 text-on-dark') }}
                    />
                )}
              </label>
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