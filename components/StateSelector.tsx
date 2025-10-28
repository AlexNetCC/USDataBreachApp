import React from 'react';
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
        <label htmlFor={name} className="block text-sm font-medium text-text-secondary">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value as TriStateFilter)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-border-color focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm rounded-md bg-white text-gray-900"
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
    const handleNumericChange = (name: keyof Filters, value: string) => {
        onFilterChange(name, value === '' ? null : Number(value));
    };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 sticky top-0 bg-white pt-2 pb-3 z-10">
        <h2 className="text-xl font-bold font-display mb-2 text-text-primary">Select & Filter</h2>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search states and law text..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border-color rounded-md focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition bg-white text-gray-900"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <details className="group">
            <summary className="list-none flex items-center justify-between p-2 -mx-2 rounded-md cursor-pointer hover:bg-gray-100">
                <span className="font-semibold text-text-primary">Advanced Filters</span>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-border-color space-y-4">
                <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-text-secondary">Individual Notification Timeline (Max Days)</label>
                    <input
                        type="number"
                        id="timeline"
                        name="timelineMaxDays"
                        value={filters.timelineMaxDays ?? ''}
                        onChange={(e) => handleNumericChange('timelineMaxDays', e.target.value)}
                        placeholder="e.g., 45"
                        className="mt-1 w-full p-2 border border-border-color rounded-md focus:ring-1 focus:ring-brand-accent bg-white text-gray-900"
                        min="0"
                    />
                </div>
                 <div>
                    <label htmlFor="ag-threshold" className="block text-sm font-medium text-text-secondary">AG Notification Threshold (Max Individuals)</label>
                    <input
                        type="number"
                        id="ag-threshold"
                        name="agThresholdMax"
                        value={filters.agThresholdMax ?? ''}
                        onChange={(e) => handleNumericChange('agThresholdMax', e.target.value)}
                        placeholder="e.g., 500"
                        className="mt-1 w-full p-2 border border-border-color rounded-md focus:ring-1 focus:ring-brand-accent bg-white text-gray-900"
                        min="0"
                    />
                </div>
                <FilterSelect label="Private Right of Action" name="privateRightOfAction" value={filters.privateRightOfAction} onChange={onFilterChange} />
                <FilterSelect label="Risk of Harm Analysis Permitted" name="riskOfHarmAllowed" value={filters.riskOfHarmAllowed} onChange={onFilterChange} />
                <FilterSelect label="Encryption Safe Harbor" name="encryptionSafeHarbor" value={filters.encryptionSafeHarbor} onChange={onFilterChange} />
                
                <button
                    onClick={onResetFilters}
                    className="w-full text-sm font-semibold text-brand-secondary hover:text-brand-primary transition pt-2"
                >
                    Reset Filters
                </button>
            </div>
        </details>
        
        {selectedStateCodes.length > 0 && (
          <div className="mt-4 flex justify-between items-center border-t border-border-color pt-3">
             <p className="text-sm text-text-secondary font-medium">{selectedStateCodes.length} selected</p>
             <button
               onClick={onClearSelection}
               className="text-sm font-semibold text-brand-secondary hover:text-brand-primary transition"
             >
               Clear Selection
             </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto -mr-4 pr-4">
        <p className="text-sm text-text-secondary mb-2 font-medium">{laws.length} matching jurisdictions</p>
        <ul className="space-y-2">
          {laws.map(law => (
            <li key={law.stateCode}>
              <label
                className={`block p-3 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                  selectedStateCodes.includes(law.stateCode)
                    ? 'bg-brand-light border-brand-accent shadow-sm'
                    : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedStateCodes.includes(law.stateCode)}
                      onChange={() => onSelectState(law.stateCode)}
                      className="h-5 w-5 rounded border-gray-300 text-brand-secondary focus:ring-brand-accent"
                    />
                    <span className={`ml-3 font-medium ${selectedStateCodes.includes(law.stateCode) ? 'text-brand-primary' : 'text-text-primary'}`}>
                      {law.state}
                    </span>
                </div>
                {law.searchSnippet && (
                    <div 
                        className="mt-2 ml-8 pl-1 border-l-2 border-yellow-300 text-xs text-gray-500"
                        dangerouslySetInnerHTML={{ __html: law.searchSnippet }}
                    />
                )}
              </label>
            </li>
          ))}
           {laws.length === 0 && (
                <li className="text-center text-text-secondary py-4">No states match the current filters.</li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default StateSelector;