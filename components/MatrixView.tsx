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

  // Close details dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.removeAttribute('open');
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && detailsRef.current?.hasAttribute('open')) {
        detailsRef.current.removeAttribute('open');
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

  const sortedLaws = useMemo(() => {
    return [...laws].sort((a, b) => {
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
  }, [laws, sortKey, sortDirection]);

  return (
    <div className="p-4 md:p-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold font-display text-text-primary">Requirements Matrix</h1>
        <p className="mt-2 text-lg text-text-secondary">
          An at-a-glance, color-coded view of key data breach law provisions across all jurisdictions.
        </p>
      </header>

       <div className="mb-4 relative">
        <details className="inline-block" ref={detailsRef}>
          <summary className="list-none px-4 py-2 bg-surface-light border border-border-light rounded-md font-semibold text-text-primary cursor-pointer hover:bg-gray-50 flex items-center select-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
            Customize Columns
          </summary>
          <div className="absolute top-full mt-2 w-72 bg-surface-light border border-border-light rounded-lg shadow-xl z-50 p-4">
            <p className="text-sm font-semibold mb-2 text-text-primary">Select columns to display:</p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {ALL_COLUMNS.map(col => (
                <label key={col.key as string} className="flex items-center space-x-2 text-sm text-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={visibleColumnKeys.includes(col.key)}
                    onChange={() => toggleColumn(col.key)}
                    className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                  />
                  <span>{col.label}</span>
                </label>
              ))}
            </div>
          </div>
        </details>
      </div>

      <div className="overflow-auto border border-border-light rounded-lg shadow-md bg-surface-light" style={{ maxHeight: '70vh' }}>
        <table className="min-w-full border-collapse text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th
                        scope="col"
                        className="sticky top-0 left-0 z-30 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer bg-gray-100 border-b border-r border-border-light"
                        onClick={() => handleSort('state')}
                        onKeyDown={(e) => e.key === 'Enter' && handleSort('state')}
                        style={{ minWidth: '180px' }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Sort by state ${sortKey === 'state' ? (sortDirection === 'asc' ? 'descending' : 'ascending') : ''}`}
                    >
                        <div className="flex items-center">
                            <span>State</span>
                            {sortKey === 'state' && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                {sortDirection === 'asc' ? <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /> : <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />}
                                </svg>
                            )}
                        </div>
                    </th>
                    {visibleColumns.map(col => (
                        <th
                            key={col.key as string}
                            scope="col"
                            className={`sticky top-0 z-20 px-4 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider select-none bg-gray-100 border-b border-border-light ${col.sortable ? 'cursor-pointer' : ''} ${col.widthClass} ${col.isLongText ? 'text-left' : 'text-center'}`}
                            onClick={() => col.sortable && handleSort(col.key as SortKey)}
                            onKeyDown={(e) => col.sortable && e.key === 'Enter' && handleSort(col.key as SortKey)}
                            role={col.sortable ? 'button' : undefined}
                            tabIndex={col.sortable ? 0 : undefined}
                            aria-label={col.sortable ? `Sort by ${col.label} ${sortKey === col.key ? (sortDirection === 'asc' ? 'descending' : 'ascending') : ''}` : col.label}
                        >
                             <div className={`flex items-center ${col.isLongText ? 'justify-start' : 'justify-center'}`}>
                                <span>{col.label}</span>
                                {col.sortable && sortKey === col.key && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                    const rowBgClass = index % 2 === 0 ? 'bg-surface-light' : 'bg-gray-50/50';
                    return (
                        <tr key={law.stateCode}>
                            <td className={`sticky left-0 z-10 px-4 py-3 font-medium text-left whitespace-nowrap border-r border-border-light ${rowBgClass}`}>
                                <button
                                    onClick={() => onViewSummary(law.stateCode)}
                                    className="text-accent hover:underline text-left"
                                >
                                    {law.state}
                                </button>
                            </td>
                            {visibleColumns.map(col => (
                                <td key={col.key as string} className={`px-4 py-3 text-text-primary ${col.widthClass} ${col.isLongText ? 'text-left align-top whitespace-pre-wrap' : 'text-center'}`}>
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