import React, { useState, useEffect, useRef } from 'react';
import { Filters, TriStateFilter } from '../types';

interface EnhancedSearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: Filters;
  onFilterChange: (name: keyof Filters, value: any) => void;
  onResetFilters: () => void;
  resultCount: number;
}

const EnhancedSearchBar: React.FC<EnhancedSearchBarProps> = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  onResetFilters,
  resultCount
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const hasActiveFilters =
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
    <div className="sticky top-[88px] z-20 bg-background border-b border-border-light shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3">
        {/* Compact Search Bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search states, laws, or requirements..."
              className="w-full pl-10 pr-10 py-2.5 text-sm border-2 border-border-light rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all bg-surface-light"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-text-primary transition"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

          {/* Compact Filter Button */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              onKeyDown={(e) => e.key === 'Enter' && setIsFilterOpen(!isFilterOpen)}
              className={`
                px-4 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 whitespace-nowrap
                ${hasActiveFilters
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-surface-light border-2 border-border-light hover:border-accent text-text-primary'}
              `}
              aria-expanded={isFilterOpen}
              aria-haspopup="true"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Filters
              {hasActiveFilters && (
                <span className="bg-white text-accent px-1.5 py-0.5 rounded-full text-xs font-bold">
                  On
                </span>
              )}
            </button>

            {/* Compact Filter Panel */}
            {isFilterOpen && (
              <div className="absolute top-full right-0 mt-2 w-[600px] bg-surface-light rounded-lg border-2 border-border-light shadow-xl z-50 p-4 animate-fade-in">
                <h3 className="text-sm font-bold text-text-primary mb-3">Advanced Filters</h3>
                <div className="grid grid-cols-5 gap-3">
                  {/* Timeline Filter */}
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Max Timeline
                    </label>
                    <input
                      type="number"
                      value={filters.timelineMaxDays ?? ''}
                      onChange={(e) => onFilterChange('timelineMaxDays', e.target.value === '' ? null : Number(e.target.value))}
                      placeholder="Days"
                      className="w-full px-2.5 py-1.5 text-sm border border-border-light rounded focus:ring-2 focus:ring-accent/20 bg-white"
                      min="0"
                    />
                  </div>

                  {/* AG Threshold Filter */}
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Max AG Threshold
                    </label>
                    <input
                      type="number"
                      value={filters.agThresholdMax ?? ''}
                      onChange={(e) => onFilterChange('agThresholdMax', e.target.value === '' ? null : Number(e.target.value))}
                      placeholder="Count"
                      className="w-full px-2.5 py-1.5 text-sm border border-border-light rounded focus:ring-2 focus:ring-accent/20 bg-white"
                      min="0"
                    />
                  </div>

                  {/* Private Right of Action */}
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Private Action
                    </label>
                    <select
                      value={filters.privateRightOfAction}
                      onChange={(e) => onFilterChange('privateRightOfAction', e.target.value as TriStateFilter)}
                      className="w-full px-2.5 py-1.5 text-sm border border-border-light rounded focus:ring-2 focus:ring-accent/20 bg-white"
                    >
                      <option value="any">Any</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {/* Risk of Harm */}
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Risk of Harm
                    </label>
                    <select
                      value={filters.riskOfHarmAllowed}
                      onChange={(e) => onFilterChange('riskOfHarmAllowed', e.target.value as TriStateFilter)}
                      className="w-full px-2.5 py-1.5 text-sm border border-border-light rounded focus:ring-2 focus:ring-accent/20 bg-white"
                    >
                      <option value="any">Any</option>
                      <option value="yes">Allowed</option>
                      <option value="no">Not Allowed</option>
                    </select>
                  </div>

                  {/* Encryption Safe Harbor */}
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Encryption
                    </label>
                    <select
                      value={filters.encryptionSafeHarbor}
                      onChange={(e) => onFilterChange('encryptionSafeHarbor', e.target.value as TriStateFilter)}
                      className="w-full px-2.5 py-1.5 text-sm border border-border-light rounded focus:ring-2 focus:ring-accent/20 bg-white"
                    >
                      <option value="any">Any</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                {/* Reset Button */}
                {hasActiveFilters && (
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => {
                        onResetFilters();
                        setIsFilterOpen(false);
                      }}
                      className="text-accent hover:text-accent-hover font-semibold text-sm flex items-center gap-1 transition"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      Reset All
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Compact Result Count */}
        <div className="text-xs text-text-secondary mt-2">
          {resultCount} jurisdiction{resultCount !== 1 ? 's' : ''} {searchTerm && `matching "${searchTerm}"`}
        </div>
      </div>
    </div>
  );
};

export default EnhancedSearchBar;
