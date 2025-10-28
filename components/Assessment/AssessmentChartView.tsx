import React, { useState, useMemo } from 'react';
import { AssessmentResult, AssessmentData } from '../../types';

type SortKey = 'state' | 'affectedCount' | 'individualNotice' | 'agNotice' | 'craNotice' | 'agThreshold' | 'craThreshold';
type SortDirection = 'asc' | 'desc';

interface AssessmentChartViewProps {
  results: AssessmentResult[];
  discoveryDate: string;
  assessmentData: AssessmentData;
  onViewSummary: (stateCode: string) => void;
}

const AssessmentChartView: React.FC<AssessmentChartViewProps> = ({ results, discoveryDate, assessmentData, onViewSummary }) => {
    const [sortKey, setSortKey] = useState<SortKey>('state');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    
    const totalAffected = results.reduce((sum, res) => sum + res.affectedCount, 0);
    const indNoticesRequired = results.filter(res => res.individualNotification.required === 'Yes' || res.individualNotification.required === 'Conditional').length;
    const agNoticesRequired = results.filter(res => res.agNotification.required === 'Yes').length;
    const craNoticesRequired = results.filter(res => res.craNotification.required === 'Yes').length;

    const getStatusClass = (status: 'Yes' | 'No' | 'Conditional' | boolean) => {
        if (status === 'Yes' || status === 'Conditional' || status === true) {
            return 'text-red-600';
        }
        return 'text-green-600';
    };
    
    const formatBoolean = (status: 'Yes' | 'No' | 'Conditional') => {
      if (status === 'Yes') return 'TRUE';
      if (status === 'No') return 'FALSE';
      return 'FALSE'; // Default for conditional in this view
    }
    
     const formatBooleanStrict = (status: 'Yes' | 'No' | 'Conditional') => {
      if (status === 'Yes') return 'TRUE';
      return 'FALSE';
    }

    const sortedResults = useMemo(() => {
        const sortable = [...results];
        if (!sortKey) return sortable;

        const getStatusValue = (status: 'Yes' | 'No' | 'Conditional') => {
            if (status === 'Yes') return 2;
            if (status === 'Conditional') return 1;
            return 0;
        };

        sortable.sort((a, b) => {
            let comparison = 0;
            let valA: any, valB: any;

            switch (sortKey) {
                case 'state':
                    comparison = a.law.state.localeCompare(b.law.state);
                    break;
                case 'affectedCount':
                    comparison = a.affectedCount - b.affectedCount;
                    break;
                case 'individualNotice':
                    comparison = getStatusValue(a.individualNotification.required) - getStatusValue(b.individualNotification.required);
                    break;
                case 'agNotice':
                    comparison = getStatusValue(a.agNotification.required) - getStatusValue(b.agNotification.required);
                    break;
                case 'craNotice':
                    comparison = getStatusValue(a.craNotification.required) - getStatusValue(b.craNotification.required);
                    break;
                case 'agThreshold':
                    valA = a.law.agNotificationThreshold ?? Number.MAX_SAFE_INTEGER;
                    valB = b.law.agNotificationThreshold ?? Number.MAX_SAFE_INTEGER;
                    comparison = valA - valB;
                    break;
                case 'craThreshold':
                    valA = a.law.craNotificationThreshold ?? Number.MAX_SAFE_INTEGER;
                    valB = b.law.craNotificationThreshold ?? Number.MAX_SAFE_INTEGER;
                    comparison = valA - valB;
                    break;
                default:
                    comparison = 0;
            }

            // Apply direction to primary sort
            if (comparison !== 0) {
                return sortDirection === 'asc' ? comparison : -comparison;
            }

            // If primary sort is equal, apply secondary sort (always ascending by state)
            if (sortKey !== 'state') {
                return a.law.state.localeCompare(b.law.state);
            }

            return 0;
        });
        
        return sortable;
    }, [results, sortKey, sortDirection]);

    const handleSort = (key: SortKey) => {
        if (sortKey === key) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    const SortableHeader: React.FC<{ aKey: SortKey; label: string; className?: string; }> = ({ aKey, label, className = '' }) => {
        const isActive = sortKey === aKey;
        return (
            <th className={`p-2 border-l border-r border-gray-300 cursor-pointer hover:bg-gray-300 transition-colors ${className}`} onClick={() => handleSort(aKey)}>
                <div className={`flex items-center ${className.includes('text-center') ? 'justify-center' : 'justify-between'}`}>
                    <span>{label}</span>
                    <span className="w-4 h-4 ml-1 flex-shrink-0">
                        {isActive && (sortDirection === 'asc' ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        )}
                    </span>
                </div>
            </th>
        );
    };


  return (
    <div className="overflow-x-auto printable-content">
        <div className="border border-gray-300">
            <table className="w-full min-w-[1400px] border-collapse text-sm">
                <thead className="bg-gray-200 text-left font-bold text-gray-700 select-none">
                    <tr>
                        <SortableHeader aKey="state" label="State" />
                        <SortableHeader aKey="affectedCount" label="Affected" className="text-center" />
                        <SortableHeader aKey="individualNotice" label="Individual Notice Required" className="text-center" />
                        <th className="p-2 border-l border-r border-gray-300 text-center">Individual Due Date</th>
                        <SortableHeader aKey="agNotice" label="AG Notice Required" className="text-center" />
                        <SortableHeader aKey="agThreshold" label="AG Threshold" className="text-center" />
                        <th className="p-2 border-l border-r border-gray-300 text-center">AG Due Date</th>
                        <SortableHeader aKey="craNotice" label="CRA Notice Required" className="text-center" />
                        <SortableHeader aKey="craThreshold" label="CRA Threshold" className="text-center" />
                    </tr>
                </thead>
                <tbody className="bg-yellow-100/60 text-gray-800">
                    {sortedResults.map((res) => {
                        const indStatus = res.individualNotification.required;

                        return (
                            <tr key={res.stateCode}>
                                <td className="p-2 border border-gray-300 font-semibold">
                                    <button onClick={() => onViewSummary(res.stateCode)} className="text-brand-secondary hover:underline text-left">
                                        {res.law.state}
                                    </button>
                                </td>
                                <td className="p-2 border border-gray-300 text-center">{res.affectedCount}</td>
                                <td className={`p-2 border border-gray-300 text-center font-bold ${getStatusClass(indStatus)}`}>
                                    {indStatus.toUpperCase()}
                                </td>
                                <td className="p-2 border border-gray-300 text-center">
                                    {indStatus !== 'No' ? res.individualNotification.timeline : 'N/A'}
                                </td>
                                <td className={`p-2 border border-gray-300 text-center font-bold ${getStatusClass(res.agNotification.required === 'Yes')}`}>
                                    {formatBoolean(res.agNotification.required)}
                                </td>
                                <td className="p-2 border border-gray-300 text-center">{res.law.agNotificationThreshold ?? 'N/A'}</td>
                                <td className="p-2 border border-gray-300 text-center">
                                    {res.agNotification.required === 'Yes' ? res.agNotification.timeline : 'N/A'}
                                </td>
                                <td className={`p-2 border border-gray-300 text-center font-bold ${getStatusClass(res.craNotification.required === 'Yes')}`}>
                                    {formatBooleanStrict(res.craNotification.required)}
                                </td>
                                <td className="p-2 border border-gray-300 text-center">{res.law.craNotificationThreshold ?? 'N/A'}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot className="bg-gray-200 font-bold text-gray-800">
                    <tr>
                        <td className="p-2 border border-gray-300">TOTAL</td>
                        <td className="p-2 border border-gray-300 text-center">{totalAffected.toLocaleString()}</td>
                        <td className="p-2 border border-gray-300 text-center">{indNoticesRequired}</td>
                        <td className="p-2 border border-gray-300"></td>
                        <td className="p-2 border border-gray-300 text-center">{agNoticesRequired}</td>
                        <td className="p-2 border border-gray-300"></td>
                        <td className="p-2 border border-gray-300"></td>
                        <td className="p-2 border border-gray-300 text-center">{craNoticesRequired}</td>
                        <td className="p-2 border border-gray-300"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  );
};

export default AssessmentChartView;