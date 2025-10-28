import React, { useMemo } from 'react';
import { AssessmentResult } from '../../types';

interface AssessmentTimelineViewProps {
  results: AssessmentResult[];
  discoveryDate: string;
  onViewSummary: (stateCode: string) => void;
}

const parseDays = (timeline: string): number | null => {
    if (!timeline || timeline === 'N/A') return null;
    const lowerTimeline = timeline.toLowerCase();
    if (lowerTimeline.includes('asap') || lowerTimeline.includes('immediate') || lowerTimeline.includes('concurrent') || !lowerTimeline.match(/(\d+)\s*days/)) {
        // These are not specific numerical deadlines and should not be charted.
        return null;
    }
    const daysMatch = lowerTimeline.match(/(\d+)\s*days/);
    if (daysMatch) {
        return parseInt(daysMatch[1], 10);
    }
    return null;
};

const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const AssessmentTimelineView: React.FC<AssessmentTimelineViewProps> = ({ results, discoveryDate, onViewSummary }) => {
    const timelineData = useMemo(() => {
        return results
            .map(res => ({
                stateCode: res.law.stateCode,
                stateName: res.law.state,
                individual: { required: res.individualNotification.required !== 'No', days: parseDays(res.individualNotification.timeline) },
                ag: { required: res.agNotification.required !== 'No', days: parseDays(res.agNotification.timeline) },
                cra: { required: res.craNotification.required !== 'No', days: parseDays(res.craNotification.timeline) },
            }))
            .filter(data => 
                (data.individual.required && data.individual.days !== null) ||
                (data.ag.required && data.ag.days !== null) ||
                (data.cra.required && data.cra.days !== null)
            )
            .sort((a, b) => a.stateName.localeCompare(b.stateName));
    }, [results]);

    const { maxDays, earliestIndividual, earliestAg, earliestCra } = useMemo(() => {
        let max = 0;
        let earliestIndividual = Infinity;
        let earliestAg = Infinity;
        let earliestCra = Infinity;

        timelineData.forEach(d => {
            const days = [d.individual.days, d.ag.days, d.cra.days];
            days.forEach(day => {
                if (day !== null && day > max) max = day;
            });

            if (d.individual.days !== null && d.individual.days < earliestIndividual) earliestIndividual = d.individual.days;
            if (d.ag.days !== null && d.ag.days < earliestAg) earliestAg = d.ag.days;
            if (d.cra.days !== null && d.cra.days < earliestCra) earliestCra = d.cra.days;
        });

        return {
            maxDays: Math.ceil((max + 1) / 15) * 15 || 30, // Round up to nearest 15, default to 30
            earliestIndividual,
            earliestAg,
            earliestCra
        };
    }, [timelineData]);

    const dayMarkers = Array.from({ length: maxDays / 15 + 1 }, (_, i) => i * 15);

    if (!discoveryDate) {
        return (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
                <p className="text-lg text-text-secondary">Please select a "Breach Discovery Date" above to calculate and visualize deadlines.</p>
            </div>
        );
    }

    const startDate = new Date(discoveryDate + 'T00:00:00');

    const handlePrint = () => {
        window.print();
    }

    if (timelineData.length === 0) {
        return (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
                <p className="text-lg text-text-secondary">No states with specific numerical deadlines apply to this assessment.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 printable-content">
            <div className="flex justify-between items-center no-print">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center"><div className="w-4 h-4 bg-blue-500 mr-2 rounded-sm"></div>Individual</div>
                    <div className="flex items-center"><div className="w-4 h-4 bg-green-500 mr-2 rounded-sm"></div>Attorney General</div>
                    <div className="flex items-center"><div className="w-4 h-4 bg-orange-500 mr-2 rounded-sm"></div>CRA</div>
                    <div className="flex items-center"><span className="text-lg mr-1">🔥</span>Critical Deadline</div>
                </div>
                <button 
                    onClick={handlePrint}
                    className="px-4 py-2 bg-brand-secondary text-white font-semibold rounded-md hover:bg-brand-primary transition flex items-center space-x-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H5zm3 1a1 1 0 000 2h2a1 1 0 100-2H8zM5 12a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M4 8a1 1 0 100 2h12a1 1 0 100-2H4z" />
                    </svg>
                    <span>Print Timeline</span>
                </button>
            </div>
            
            <div className="border border-gray-200 rounded-lg bg-white p-4">
                 {/* Timeline Header */}
                <div className="flex items-center border-b-2 border-gray-300 pb-2">
                    <div className="w-40 font-semibold text-text-primary pr-2">Jurisdiction</div>
                    <div className="flex-1 relative grid grid-cols-1">
                        <div className="flex justify-between text-xs text-gray-500">
                            {dayMarkers.map(day => (
                                <div key={day} style={{ left: `${(day / maxDays) * 100}%` }} className="absolute text-center transform -translate-x-1/2">
                                    <span className="block">Day {day}</span>
                                    <span className="block text-gray-400">{addDays(startDate, day).toLocaleDateString('en-US', {month:'2-digit', day:'2-digit'})}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Rows */}
                <div className="space-y-3 mt-3">
                    {timelineData.map(data => (
                        <div key={data.stateCode} className="flex items-center text-sm">
                            <div className="w-40 font-medium text-text-primary pr-2 truncate">
                                <button onClick={() => onViewSummary(data.stateCode)} className="text-brand-secondary hover:underline text-left" title={data.stateName}>
                                    {data.stateName}
                                </button>
                            </div>
                            <div className="flex-1 h-12 relative bg-gray-100 rounded">
                                {data.individual.required && data.individual.days !== null && (
                                    <div 
                                        className="absolute top-1 left-0 h-4 bg-blue-500 rounded-sm flex items-center px-2 text-white text-xs font-semibold"
                                        style={{ width: `${Math.max(2, (data.individual.days / maxDays) * 100)}%`}}
                                        title={`Individual: ${data.individual.days} days`}
                                    >
                                        {data.individual.days === earliestIndividual && <span className="mr-1" title="Critical Deadline">🔥</span>}
                                        {data.individual.days}d
                                    </div>
                                )}
                                {data.ag.required && data.ag.days !== null && (
                                    <div 
                                        className="absolute top-6 left-0 h-4 bg-green-500 rounded-sm flex items-center px-2 text-white text-xs font-semibold"
                                        style={{ width: `${Math.max(2, (data.ag.days / maxDays) * 100)}%`}}
                                        title={`AG: ${data.ag.days} days`}
                                    >
                                        {data.ag.days === earliestAg && <span className="mr-1" title="Critical Deadline">🔥</span>}
                                        {data.ag.days}d
                                    </div>
                                )}
                                {data.cra.required && data.cra.days !== null && (
                                     <div 
                                        className="absolute top-11 left-0 h-4 bg-orange-500 rounded-sm flex items-center px-2 text-white text-xs font-semibold"
                                        style={{ width: `${Math.max(2, (data.cra.days / maxDays) * 100)}%`}}
                                        title={`CRA: ${data.cra.days} days`}
                                    >
                                        {data.cra.days === earliestCra && <span className="mr-1" title="Critical Deadline">🔥</span>}
                                        {data.cra.days}d
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssessmentTimelineView;