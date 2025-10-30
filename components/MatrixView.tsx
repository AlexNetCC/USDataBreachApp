import React, { useState, useMemo, useRef, useEffect } from 'react';
import { StateLaw } from '../types';
import { getTimelineColor, getThresholdColor, getBooleanColor } from '../utils/matrixColors';
import MultiStateExportSelector from './MultiStateExportSelector';

interface MatrixViewProps {
  laws: StateLaw[];
  onViewSummary: (stateCode: string) => void;
}

type SortKey = keyof StateLaw | 'state';
type SortDirection = 'asc' | 'desc';

interface ColumnConfig {
    key: keyof StateLaw;
    label: string;
    defaultVisible: boolean;
    sortable?: boolean;
    filterable?: boolean;
    isLongText?: boolean;
    widthClass?: string;
    render?: (law: StateLaw) => React.ReactNode;
}

interface ColumnFilter {
  searchTerm: string;
  selectedValues: Set<string>;
}

const ALL_COLUMNS: ColumnConfig[] = [
    { key: 'individualNotificationTimelineDays', label: 'Individual Timeline (Days)', defaultVisible: true, sortable: true, filterable: true, widthClass: 'min-w-[150px]', render: (law) => {
        const days = law.individualNotificationTimelineDays;
        const text = days > 0 ? days : 'Not Specified';
        return <span className={`font-semibold ${getTimelineColor(days)}`}>{text}</span>;
    }},
    { key: 'agNotificationTimelineDays', label: 'AG Timeline (Days)', defaultVisible: true, sortable: true, filterable: true, widthClass: 'min-w-[150px]', render: (law) => {
        const days = law.agNotificationTimelineDays;
        const text = days !== null ? (days > 0 ? days : 'Concurrent') : 'N/A';
        const displayDays = days === null ? -1 : days;
        return <span className={`font-semibold ${getTimelineColor(displayDays)}`}>{text}</span>;
    }},
    { key: 'agNotificationThreshold', label: 'AG Threshold (#)', defaultVisible: true, sortable: true, filterable: true, widthClass: 'min-w-[150px]', render: (law) => <span className={`font-semibold ${getThresholdColor(law.agNotificationThreshold)}`}>{law.agNotificationThreshold?.toLocaleString() ?? 'N/A'}</span> },
    { key: 'craNotificationThreshold', label: 'CRA Threshold (#)', defaultVisible: true, sortable: true, filterable: true, widthClass: 'min-w-[150px]', render: (law) => <span className={`font-semibold ${getThresholdColor(law.craNotificationThreshold)}`}>{law.craNotificationThreshold?.toLocaleString() ?? 'N/A'}</span> },
    { key: 'riskOfHarmAnalysisCanEliminateNotification', label: 'Risk of Harm Allowed', defaultVisible: true, sortable: true, filterable: true, widthClass: 'min-w-[180px]', render: (law) => <span className={`font-bold ${getBooleanColor(law.riskOfHarmAnalysisCanEliminateNotification)}`}>{law.riskOfHarmAnalysisCanEliminateNotification ? 'Yes' : 'No'}</span> },
    { key: 'enforcementPrivateRightOfAction', label: 'Private Right of Action', defaultVisible: true, sortable: true, filterable: true, widthClass: 'min-w-[200px]', render: (law) => <span className={`font-bold ${getBooleanColor(law.enforcementPrivateRightOfAction)}`}>{law.enforcementPrivateRightOfAction ? 'Yes' : 'No'}</span> },
    { key: 'breachDefinitionText', label: 'Definition of Breach', defaultVisible: false, isLongText: true, widthClass: 'min-w-[350px]' },
    {
        key: 'markdownContent',
        label: 'Definition of Personal Information',
        defaultVisible: false,
        isLongText: true,
        widthClass: 'min-w-[350px]',
        render: (law) => {
            const match = law.markdownContent.match(/### (?:Sensitive |Personally Identifiable )?(?:Personal|Private) Information.*\n([\s\S]*?)\n##/);
            return match ? match[1].trim().replace(/^\s*[-*] /gm, '• ').replace(/(\r\n|\n|\r)/gm, "\n") : 'Not specified.';
        }
    },
    { key: 'breachTrigger', label: 'Breach Trigger', defaultVisible: false, sortable: true, filterable: true, widthClass: 'min-w-[200px]', render: (law) => law.breachTrigger.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') },
    { key: 'riskOfHarmAnalysisStandard', label: 'Risk of Harm Standard', defaultVisible: false, isLongText: true, widthClass: 'min-w-[350px]' },
    { key: 'exemptionEncryptionSafeHarbor', label: 'Encryption Safe Harbor', defaultVisible: false, sortable: true, filterable: true, widthClass: 'min-w-[220px]', render: (law) => <span className={`font-bold ${getBooleanColor(law.exemptionEncryptionSafeHarbor)}`}>{law.exemptionEncryptionSafeHarbor ? 'Yes' : 'No'}</span> },
];

const MatrixView: React.FC<MatrixViewProps> = ({ laws, onViewSummary }) => {
  const [sortKey, setSortKey] = useState<SortKey>('state');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [visibleColumnKeys, setVisibleColumnKeys] = useState<Array<keyof StateLaw>>(
    ALL_COLUMNS.filter(c => c.defaultVisible).map(c => c.key)
  );
  const [openFilterColumn, setOpenFilterColumn] = useState<string | null>(null);
  const [stateFilter, setStateFilter] = useState<ColumnFilter>({ searchTerm: '', selectedValues: new Set() });
  const [columnFilters, setColumnFilters] = useState<Map<keyof StateLaw, ColumnFilter>>(new Map());
  const [showExportSelector, setShowExportSelector] = useState(false);

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const filterRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Close column visibility dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.removeAttribute('open');
      }

      // Close filter dropdowns
      if (openFilterColumn) {
        const filterRef = filterRefs.current.get(openFilterColumn);
        if (filterRef && !filterRef.contains(event.target as Node)) {
          setOpenFilterColumn(null);
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (detailsRef.current?.hasAttribute('open')) {
          detailsRef.current.removeAttribute('open');
        }
        if (openFilterColumn) {
          setOpenFilterColumn(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openFilterColumn]);

  const handleSort = (key: SortKey) => {
    if (!key) return;
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const toggleColumn = (key: keyof StateLaw) => {
    setVisibleColumnKeys(prev =>
      prev.includes(key)
      ? prev.filter(k => k !== key)
      : [...ALL_COLUMNS.filter(c => prev.includes(c.key) || c.key === key).map(c => c.key)]
    );
  };

  const visibleColumns = useMemo(() => {
    const visibleSet = new Set(visibleColumnKeys);
    return ALL_COLUMNS.filter(c => visibleSet.has(c.key));
  }, [visibleColumnKeys]);

  // Get unique values for a column
  const getColumnUniqueValues = (columnKey: keyof StateLaw) => {
    const values = new Set<string>();
    laws.forEach(law => {
      const value = law[columnKey];
      let displayValue: string;

      if (value === null || value === undefined) {
        displayValue = 'N/A';
      } else if (typeof value === 'boolean') {
        displayValue = value ? 'Yes' : 'No';
      } else if (typeof value === 'number') {
        if (columnKey === 'agNotificationTimelineDays' && value === 0) {
          displayValue = 'Concurrent';
        } else if (columnKey.includes('Timeline') && value === 0) {
          displayValue = 'Not Specified';
        } else {
          displayValue = value.toLocaleString();
        }
      } else {
        displayValue = String(value);
      }

      values.add(displayValue);
    });

    return Array.from(values).sort((a, b) => {
      if (a === 'N/A') return 1;
      if (b === 'N/A') return -1;
      // Try numeric sort first
      const numA = parseFloat(a.replace(/,/g, ''));
      const numB = parseFloat(b.replace(/,/g, ''));
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }
      return a.localeCompare(b);
    });
  };

  const getDisplayValue = (law: StateLaw, columnKey: keyof StateLaw): string => {
    const value = law[columnKey];
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'number') {
      if (columnKey === 'agNotificationTimelineDays' && value === 0) return 'Concurrent';
      if (columnKey.includes('Timeline') && value === 0) return 'Not Specified';
      return value.toLocaleString();
    }
    return String(value);
  };

  // Apply filters
  const filteredLaws = useMemo(() => {
    return laws.filter(law => {
      // State filter
      if (stateFilter.selectedValues.size > 0) {
        if (!stateFilter.selectedValues.has(law.stateCode)) {
          return false;
        }
      }

      // Apply column-specific filters
      for (const [columnKey, filter] of columnFilters.entries()) {
        if (filter.selectedValues.size > 0) {
          const displayValue = getDisplayValue(law, columnKey);
          if (!filter.selectedValues.has(displayValue)) {
            return false;
          }
        }
      }

      return true;
    });
  }, [laws, stateFilter, columnFilters]);

  const sortedLaws = useMemo(() => {
    return [...filteredLaws].sort((a, b) => {
      let comparison = 0;

      const valA = a[sortKey as keyof StateLaw];
      const valB = b[sortKey as keyof StateLaw];

      if (sortKey === 'state') {
        comparison = a.state.localeCompare(b.state);
      } else if (sortKey === 'individualNotificationTimelineDays' || sortKey === 'agNotificationTimelineDays') {
          const numA = (typeof valA === 'number' && valA > 0) ? valA : Infinity;
          const numB = (typeof valB === 'number' && valB > 0) ? valB : Infinity;
          comparison = numA - numB;
      } else if (sortKey === 'agNotificationThreshold' || sortKey === 'craNotificationThreshold') {
          const numA = valA !== null ? valA as number : Infinity;
          const numB = valB !== null ? valB as number : Infinity;
          comparison = numA - numB;
      } else if (typeof valA === 'boolean' && typeof valB === 'boolean') {
        comparison = valA === valB ? 0 : (valA ? -1 : 1);
      } else if (typeof valA === 'string' && typeof valB === 'string') {
        comparison = valA.localeCompare(valB);
      }

      if (comparison !== 0) {
        return sortDirection === 'asc' ? comparison : -comparison;
      }

      // Secondary sort by state name
      return a.state.localeCompare(b.state);
    });
  }, [filteredLaws, sortKey, sortDirection]);

  const hasActiveFilters = stateFilter.selectedValues.size > 0 || columnFilters.size > 0;

  const clearAllFilters = () => {
    setStateFilter({ searchTerm: '', selectedValues: new Set() });
    setColumnFilters(new Map());
  };

  const toggleFilterValue = (columnKey: keyof StateLaw | 'state', value: string) => {
    if (columnKey === 'state') {
      setStateFilter(prev => {
        const newSelected = new Set(prev.selectedValues);
        if (newSelected.has(value)) {
          newSelected.delete(value);
        } else {
          newSelected.add(value);
        }
        return { ...prev, selectedValues: newSelected };
      });
    } else {
      setColumnFilters(prev => {
        const newMap = new Map(prev);
        const filter = newMap.get(columnKey) || { searchTerm: '', selectedValues: new Set() };
        const newSelected = new Set(filter.selectedValues);
        if (newSelected.has(value)) {
          newSelected.delete(value);
        } else {
          newSelected.add(value);
        }

        if (newSelected.size === 0) {
          newMap.delete(columnKey);
        } else {
          newMap.set(columnKey, { ...filter, selectedValues: newSelected });
        }

        return newMap;
      });
    }
  };

  const renderColumnFilter = (column: ColumnConfig) => {
    if (!column.filterable) return null;

    const columnKey = column.key;
    const isOpen = openFilterColumn === columnKey;
    const filter = columnFilters.get(columnKey) || { searchTerm: '', selectedValues: new Set() };
    const uniqueValues = getColumnUniqueValues(columnKey);
    const hasActiveFilter = filter.selectedValues.size > 0;

    return (
      <div className="relative inline-block" ref={(el) => el && filterRefs.current.set(columnKey, el)}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenFilterColumn(isOpen ? null : columnKey);
          }}
          className={`ml-1 p-1 rounded hover:bg-accent/20 transition-colors ${hasActiveFilter ? 'bg-accent/20' : ''}`}
          title="Filter column"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 ${hasActiveFilter ? 'text-accent' : 'text-text-secondary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-1 left-0 w-64 bg-white border-2 border-accent/30 rounded-lg shadow-2xl z-50 p-3 max-h-96 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-text-primary">Filter</span>
              {hasActiveFilter && (
                <button
                  onClick={() => {
                    setColumnFilters(prev => {
                      const newMap = new Map(prev);
                      newMap.delete(columnKey);
                      return newMap;
                    });
                  }}
                  className="text-xs text-accent hover:text-accent-hover font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="space-y-1 overflow-y-auto max-h-80">
              {uniqueValues.map(value => {
                const count = laws.filter(law => getDisplayValue(law, columnKey) === value).length;
                return (
                  <label
                    key={value}
                    className="flex items-center p-1.5 hover:bg-accent/5 rounded cursor-pointer text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={filter.selectedValues.has(value)}
                      onChange={() => toggleFilterValue(columnKey, value)}
                      className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent mr-2"
                    />
                    <span className="flex-1 text-text-primary">{value}</span>
                    <span className="text-xs text-text-secondary ml-2">({count})</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderStateFilter = () => {
    const isOpen = openFilterColumn === 'state';
    const uniqueStates = laws.map(law => ({ code: law.stateCode, name: law.state }));
    const hasActiveFilter = stateFilter.selectedValues.size > 0;
    const filteredStates = stateFilter.searchTerm
      ? uniqueStates.filter(s =>
          s.name.toLowerCase().includes(stateFilter.searchTerm.toLowerCase()) ||
          s.code.toLowerCase().includes(stateFilter.searchTerm.toLowerCase())
        )
      : uniqueStates;

    return (
      <div className="relative inline-block" ref={(el) => el && filterRefs.current.set('state', el)}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenFilterColumn(isOpen ? null : 'state');
          }}
          className={`ml-1 p-1 rounded hover:bg-accent/20 transition-colors ${hasActiveFilter ? 'bg-accent/20' : ''}`}
          title="Filter states"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 ${hasActiveFilter ? 'text-accent' : 'text-text-secondary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-1 left-0 w-72 bg-white border-2 border-accent/30 rounded-lg shadow-2xl z-50 p-3 max-h-96 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-text-primary">Filter States</span>
              {hasActiveFilter && (
                <button
                  onClick={() => setStateFilter({ searchTerm: '', selectedValues: new Set() })}
                  className="text-xs text-accent hover:text-accent-hover font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            <input
              type="text"
              placeholder="Search states..."
              value={stateFilter.searchTerm}
              onChange={(e) => setStateFilter(prev => ({ ...prev, searchTerm: e.target.value }))}
              className="w-full p-2 border border-border-light rounded-lg mb-2 text-sm focus:ring-2 focus:ring-accent focus:border-accent"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="space-y-1 overflow-y-auto max-h-80">
              {filteredStates.map(({ code, name }) => (
                <label
                  key={code}
                  className="flex items-center p-1.5 hover:bg-accent/5 rounded cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={stateFilter.selectedValues.has(code)}
                    onChange={() => toggleFilterValue('state', code)}
                    className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent mr-2"
                  />
                  <span className="text-text-primary">{name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8 animate-slide-in">
      <header className="mb-8 pb-6 border-b-2 border-border-light">
        <h1 className="text-6xl font-bold font-display text-text-primary mb-3">Requirements Matrix</h1>
        <p className="text-xl text-text-secondary font-medium">
          An at-a-glance, color-coded view of key data breach law provisions across all jurisdictions.
        </p>
      </header>

      <div className="mb-6 flex items-center gap-3 flex-wrap">
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all duration-250 shadow-md flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Clear All Filters ({stateFilter.selectedValues.size + Array.from(columnFilters.values()).reduce((sum, f) => sum + f.selectedValues.size, 0)})
          </button>
        )}

        {/* Export Analysis Button */}
        <button
          onClick={() => setShowExportSelector(!showExportSelector)}
          className={`px-5 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-250 flex items-center select-none shadow-md border-2 ${
            showExportSelector
              ? 'bg-green-600 text-white border-green-600 hover:bg-green-700'
              : 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export Analysis
        </button>

        {/* Customize Columns Button */}
        <details className="inline-block" ref={detailsRef}>
          <summary className="list-none px-5 py-3 bg-surface text-on-dark border-2 border-surface rounded-lg font-semibold cursor-pointer hover:bg-surface/90 hover:border-surface/90 transition-all duration-250 flex items-center select-none shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
            Customize Columns
          </summary>
          <div className="absolute top-full mt-2 w-80 bg-surface-light border-2 border-border-light rounded-xl shadow-2xl z-50 p-5">
            <p className="text-base font-bold mb-3 text-text-primary">Select columns to display:</p>
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-2">
              {ALL_COLUMNS.map(col => (
                <label key={col.key as string} className="flex items-center space-x-3 text-sm text-text-primary cursor-pointer hover:bg-accent/5 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={visibleColumnKeys.includes(col.key)}
                    onChange={() => toggleColumn(col.key)}
                    className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent focus:ring-2"
                  />
                  <span className="font-medium">{col.label}</span>
                </label>
              ))}
            </div>
          </div>
        </details>

        <div className="text-sm text-text-secondary">
          Showing {sortedLaws.length} of {laws.length} jurisdictions
        </div>
      </div>

      {/* Multi-State Export Selector */}
      {showExportSelector && (
        <div className="mb-6">
          <MultiStateExportSelector
            laws={sortedLaws}
            onExport={(selectedStates) => {
              console.log('Export selected states:', selectedStates);
              setShowExportSelector(false);
            }}
          />
        </div>
      )}

      <div className="overflow-auto border-2 border-border-light rounded-xl shadow-card bg-surface-light" style={{ minHeight: '50vh', maxHeight: '70vh' }}>
        <table className="min-w-full border-collapse text-sm">
            <thead className="bg-accent/10">
                <tr>
                    <th
                        scope="col"
                        className="sticky top-0 left-0 z-30 px-5 py-4 text-left text-xs font-bold text-text-primary uppercase tracking-wider cursor-pointer bg-accent/10 border-b-2 border-r-2 border-accent/30 hover:bg-accent/20 transition-colors"
                        onClick={() => handleSort('state')}
                        onKeyDown={(e) => e.key === 'Enter' && handleSort('state')}
                        style={{ minWidth: '180px' }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Sort by state ${sortKey === 'state' ? (sortDirection === 'asc' ? 'descending' : 'ascending') : ''}`}
                    >
                        <div className="flex items-center gap-2">
                            <span>State</span>
                            {sortKey === 'state' && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                {sortDirection === 'asc' ? <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /> : <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />}
                                </svg>
                            )}
                            {renderStateFilter()}
                        </div>
                    </th>
                    {visibleColumns.map(col => (
                        <th
                            key={col.key as string}
                            scope="col"
                            className={`sticky top-0 z-20 px-5 py-4 text-xs font-bold text-text-primary uppercase tracking-wider select-none bg-accent/10 border-b-2 border-accent/30 ${col.sortable ? 'cursor-pointer hover:bg-accent/20' : ''} ${col.widthClass} ${col.isLongText ? 'text-left' : 'text-center'} transition-colors`}
                            onClick={() => col.sortable && handleSort(col.key as SortKey)}
                            onKeyDown={(e) => col.sortable && e.key === 'Enter' && handleSort(col.key as SortKey)}
                            role={col.sortable ? 'button' : undefined}
                            tabIndex={col.sortable ? 0 : undefined}
                            aria-label={col.sortable ? `Sort by ${col.label} ${sortKey === col.key ? (sortDirection === 'asc' ? 'descending' : 'ascending') : ''}` : col.label}
                        >
                             <div className={`flex items-center gap-1 ${col.isLongText ? 'justify-start' : 'justify-center'}`}>
                                <span>{col.label}</span>
                                {col.sortable && sortKey === col.key && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    {sortDirection === 'asc' ? <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /> : <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />}
                                    </svg>
                                )}
                                {renderColumnFilter(col)}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
                {sortedLaws.map((law, index) => {
                    const isEvenRow = index % 2 === 0;
                    const rowBgClass = isEvenRow ? 'bg-surface-light' : 'bg-gray-50/50';
                    return (
                        <tr key={law.stateCode} className={`${rowBgClass} hover:bg-accent/5 transition-colors`}>
                            <td className={`sticky left-0 z-10 px-5 py-4 font-semibold text-left whitespace-nowrap border-r border-border-light ${rowBgClass}`}>
                                <button
                                    onClick={() => onViewSummary(law.stateCode)}
                                    className="text-accent hover:text-accent-hover font-bold transition-colors"
                                >
                                    {law.state}
                                </button>
                            </td>
                            {visibleColumns.map(col => (
                                <td key={col.key as string} className={`px-5 py-4 text-text-primary ${col.widthClass} ${col.isLongText ? 'text-left align-top whitespace-pre-wrap' : 'text-center'}`}>
                                    {col.render ? col.render(law) : String(law[col.key as keyof StateLaw] ?? 'N/A')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrixView;
