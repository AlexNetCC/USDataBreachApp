import React, { useState, useMemo, useRef, useEffect } from 'react';
import { StateLaw } from '../types';
import { getTimelineColor, getThresholdColor, getBooleanColor } from '../utils/matrixColors';

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
    isLongText?: boolean;
    widthClass?: string;
    render?: (law: StateLaw) => React.ReactNode;
}

const ALL_COLUMNS: ColumnConfig[] = [
    { key: 'individualNotificationTimelineDays', label: 'Individual Timeline (Days)', defaultVisible: true, sortable: true, widthClass: 'min-w-[150px]', render: (law) => {
        const days = law.individualNotificationTimelineDays;
        const text = days > 0 ? days : 'Not Specified';
        return <span className={`font-semibold ${getTimelineColor(days)}`}>{text}</span>;
    }},
    { key: 'agNotificationTimelineDays', label: 'AG Timeline (Days)', defaultVisible: true, sortable: true, widthClass: 'min-w-[150px]', render: (law) => {
        const days = law.agNotificationTimelineDays;
        const text = days !== null ? (days > 0 ? days : 'Concurrent') : 'N/A';
        const displayDays = days === null ? -1 : days;
        return <span className={`font-semibold ${getTimelineColor(displayDays)}`}>{text}</span>;
    }},
    { key: 'agNotificationThreshold', label: 'AG Threshold (#)', defaultVisible: true, sortable: true, widthClass: 'min-w-[150px]', render: (law) => <span className={`font-semibold ${getThresholdColor(law.agNotificationThreshold)}`}>{law.agNotificationThreshold?.toLocaleString() ?? 'N/A'}</span> },
    { key: 'craNotificationThreshold', label: 'CRA Threshold (#)', defaultVisible: true, sortable: true, widthClass: 'min-w-[150px]', render: (law) => <span className={`font-semibold ${getThresholdColor(law.craNotificationThreshold)}`}>{law.craNotificationThreshold?.toLocaleString() ?? 'N/A'}</span> },
    { key: 'riskOfHarmAnalysisCanEliminateNotification', label: 'Risk of Harm Allowed', defaultVisible: true, sortable: true, widthClass: 'min-w-[180px]', render: (law) => <span className={`font-bold ${getBooleanColor(law.riskOfHarmAnalysisCanEliminateNotification)}`}>{law.riskOfHarmAnalysisCanEliminateNotification ? 'Yes' : 'No'}</span> },
    { key: 'enforcementPrivateRightOfAction', label: 'Private Right of Action', defaultVisible: true, sortable: true, widthClass: 'min-w-[200px]', render: (law) => <span className={`font-bold ${getBooleanColor(law.enforcementPrivateRightOfAction)}`}>{law.enforcementPrivateRightOfAction ? 'Yes' : 'No'}</span> },
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
    { key: 'breachTrigger', label: 'Breach Trigger', defaultVisible: false, sortable: true, widthClass: 'min-w-[200px]', render: (law) => law.breachTrigger.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') },
    { key: 'riskOfHarmAnalysisStandard', label: 'Risk of Harm Standard', defaultVisible: false, isLongText: true, widthClass: 'min-w-[350px]' },
    { key: 'exemptionEncryptionSafeHarbor', label: 'Encryption Safe Harbor', defaultVisible: false, sortable: true, widthClass: 'min-w-[220px]', render: (law) => <span className={`font-bold ${getBooleanColor(law.exemptionEncryptionSafeHarbor)}`}>{law.exemptionEncryptionSafeHarbor ? 'Yes' : 'No'}</span> },
];

const MatrixView: React.FC<MatrixViewProps> = ({ laws, onViewSummary }) => {
  const [sortKey, setSortKey] = useState<SortKey>('state');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [visibleColumnKeys, setVisibleColumnKeys] = useState<Array<keyof StateLaw>>(
    ALL_COLUMNS.filter(c => c.defaultVisible).map(c => c.key)
  );
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const filterRef = useRef<HTMLDetailsElement>(null);

  // Filter state
  const [selectedStates, setSelectedStates] = useState<Set<string>>(new Set());
  const [agThresholds, setAgThresholds] = useState<Set<number | null>>(new Set());
  const [privateAction, setPrivateAction] = useState<'all' | 'yes' | 'no'>('all');
  const [riskOfHarm, setRiskOfHarm] = useState<'all' | 'yes' | 'no'>('all');
  const [encryptionSafeHarbor, setEncryptionSafeHarbor] = useState<'all' | 'yes' | 'no'>('all');

  // Close details dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.removeAttribute('open');
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        filterRef.current.removeAttribute('open');
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (detailsRef.current?.hasAttribute('open')) {
          detailsRef.current.removeAttribute('open');
        }
        if (filterRef.current?.hasAttribute('open')) {
          filterRef.current.removeAttribute('open');
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

  // Get unique AG thresholds for filter options
  const uniqueAgThresholds = useMemo(() => {
    const thresholds = new Set<number | null>();
    laws.forEach(law => thresholds.add(law.agNotificationThreshold));
    return Array.from(thresholds).sort((a, b) => {
      if (a === null) return 1;
      if (b === null) return -1;
      return a - b;
    });
  }, [laws]);

  // Apply filters
  const filteredLaws = useMemo(() => {
    return laws.filter(law => {
      // State filter
      if (selectedStates.size > 0 && !selectedStates.has(law.stateCode)) {
        return false;
      }

      // AG Threshold filter
      if (agThresholds.size > 0 && !agThresholds.has(law.agNotificationThreshold)) {
        return false;
      }

      // Private Action filter
      if (privateAction !== 'all') {
        if (privateAction === 'yes' && !law.enforcementPrivateRightOfAction) return false;
        if (privateAction === 'no' && law.enforcementPrivateRightOfAction) return false;
      }

      // Risk of Harm filter
      if (riskOfHarm !== 'all') {
        if (riskOfHarm === 'yes' && !law.riskOfHarmAnalysisCanEliminateNotification) return false;
        if (riskOfHarm === 'no' && law.riskOfHarmAnalysisCanEliminateNotification) return false;
      }

      // Encryption Safe Harbor filter
      if (encryptionSafeHarbor !== 'all') {
        if (encryptionSafeHarbor === 'yes' && !law.exemptionEncryptionSafeHarbor) return false;
        if (encryptionSafeHarbor === 'no' && law.exemptionEncryptionSafeHarbor) return false;
      }

      return true;
    });
  }, [laws, selectedStates, agThresholds, privateAction, riskOfHarm, encryptionSafeHarbor]);

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

  const hasActiveFilters = selectedStates.size > 0 || agThresholds.size > 0 ||
    privateAction !== 'all' || riskOfHarm !== 'all' || encryptionSafeHarbor !== 'all';

  const clearFilters = () => {
    setSelectedStates(new Set());
    setAgThresholds(new Set());
    setPrivateAction('all');
    setRiskOfHarm('all');
    setEncryptionSafeHarbor('all');
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
        {/* Filter Button */}
        <details className="inline-block" ref={filterRef}>
          <summary className="list-none px-5 py-3 bg-surface text-on-dark border-2 border-surface rounded-lg font-semibold cursor-pointer hover:bg-surface/90 hover:border-surface/90 transition-all duration-250 flex items-center select-none shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter Matrix
            {hasActiveFilters && (
              <span className="ml-2 px-2 py-0.5 bg-accent text-white text-xs rounded-full">
                Active
              </span>
            )}
          </summary>
          <div className="absolute top-full mt-2 w-96 bg-surface-light border-2 border-border-light rounded-xl shadow-2xl z-50 p-5 max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold text-text-primary">Filter Options</p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:text-accent-hover font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* State Filter */}
            <div className="mb-5">
              <p className="text-sm font-bold text-text-primary mb-2">States/Jurisdictions</p>
              <div className="max-h-40 overflow-y-auto border border-border-light rounded-lg p-2 bg-white">
                {laws.map(law => (
                  <label key={law.stateCode} className="flex items-center p-1.5 hover:bg-accent/5 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedStates.has(law.stateCode)}
                      onChange={(e) => {
                        const newSet = new Set(selectedStates);
                        if (e.target.checked) {
                          newSet.add(law.stateCode);
                        } else {
                          newSet.delete(law.stateCode);
                        }
                        setSelectedStates(newSet);
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    <span className="ml-2 text-sm text-text-primary">{law.state}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* AG Threshold Filter */}
            <div className="mb-5">
              <p className="text-sm font-bold text-text-primary mb-2">AG Notification Threshold</p>
              <div className="space-y-1.5">
                {uniqueAgThresholds.map(threshold => (
                  <label key={threshold === null ? 'null' : threshold} className="flex items-center p-1.5 hover:bg-accent/5 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agThresholds.has(threshold)}
                      onChange={(e) => {
                        const newSet = new Set(agThresholds);
                        if (e.target.checked) {
                          newSet.add(threshold);
                        } else {
                          newSet.delete(threshold);
                        }
                        setAgThresholds(newSet);
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    <span className="ml-2 text-sm text-text-primary font-medium">
                      {threshold === null ? 'N/A' : threshold.toLocaleString()}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Boolean Filters */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-text-primary mb-2">Private Right of Action</p>
                <select
                  value={privateAction}
                  onChange={(e) => setPrivateAction(e.target.value as 'all' | 'yes' | 'no')}
                  className="w-full p-2 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="all">All</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <p className="text-sm font-bold text-text-primary mb-2">Risk of Harm Analysis</p>
                <select
                  value={riskOfHarm}
                  onChange={(e) => setRiskOfHarm(e.target.value as 'all' | 'yes' | 'no')}
                  className="w-full p-2 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="all">All</option>
                  <option value="yes">Allowed</option>
                  <option value="no">Not Allowed</option>
                </select>
              </div>

              <div>
                <p className="text-sm font-bold text-text-primary mb-2">Encryption Safe Harbor</p>
                <select
                  value={encryptionSafeHarbor}
                  onChange={(e) => setEncryptionSafeHarbor(e.target.value as 'all' | 'yes' | 'no')}
                  className="w-full p-2 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="all">All</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
        </details>

        {/* Customize Columns Button */}
        <details className="inline-block" ref={detailsRef}>
          <summary className="list-none px-5 py-3 bg-accent text-white border-2 border-accent rounded-lg font-semibold cursor-pointer hover:bg-accent-hover hover:border-accent-hover transition-all duration-250 flex items-center select-none shadow-md">
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
      </div>

      <div className="overflow-auto border-2 border-border-light rounded-xl shadow-card bg-surface-light" style={{ maxHeight: '70vh' }}>
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
                             <div className={`flex items-center gap-2 ${col.isLongText ? 'justify-start' : 'justify-center'}`}>
                                <span>{col.label}</span>
                                {col.sortable && sortKey === col.key && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    {sortDirection === 'asc' ? <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /> : <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />}
                                    </svg>
                                )}
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