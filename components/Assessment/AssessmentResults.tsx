import React, { useState } from 'react';
import { AssessmentResult, AssessmentData } from '../../types';
import AssessmentChartView from './AssessmentChartView';
import AssessmentCalendarView from './AssessmentCalendarView';
import AssessmentDashboardView from './AssessmentDashboardView';

interface AssessmentResultsProps {
  results: AssessmentResult[];
  assessmentData: AssessmentData;
  onRestart: () => void;
  onViewSummary: (stateCode: string) => void;
}

type View = 'dashboard' | 'summary' | 'chart' | 'calendar';

const ResultIndicator: React.FC<{ result: 'Yes' | 'No' | 'Conditional' }> = ({ result }) => {
  const baseClasses = "px-2.5 py-1 text-xs font-bold rounded-full inline-block leading-none";
  let text = '';
  let colorClasses = '';

  switch(result) {
    case 'Yes':
      text = 'Required';
      colorClasses = 'bg-red-100 text-red-700';
      break;
    case 'No':
      text = 'Not Required';
      colorClasses = 'bg-gray-200 text-gray-700';
      break;
    case 'Conditional':
      text = 'Conditional';
      colorClasses = 'bg-blue-100 text-blue-800';
      break;
    default:
      return null;
  }
  return <span className={`${baseClasses} ${colorClasses}`}>{text}</span>;
};

const DeadlineDisplay: React.FC<{ discoveryDate: string; timeline: string; status: 'Yes' | 'No' | 'Conditional' }> = ({ discoveryDate, timeline, status }) => {
    if (status !== 'Yes') {
        return null;
    }
    
    if (!discoveryDate || !timeline || timeline.toLowerCase().includes('asap') || timeline.toLowerCase().includes('concurrent') || !timeline.match(/(\d+)\s*days/)) {
        return <span className="text-xs text-gray-500 italic">{timeline.includes('days') ? 'Enter date' : 'N/A'}</span>;
    }

    const daysMatch = timeline.match(/(\d+)\s*days/);
    if (!daysMatch) {
        return <span className="text-xs text-gray-500 italic">N/A</span>;
    }

    const days = parseInt(daysMatch[1], 10);
    const startDate = new Date(discoveryDate + 'T00:00:00'); // Ensure local timezone
    const deadline = new Date(startDate);
    deadline.setDate(deadline.getDate() + days);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let colorClass = 'text-gray-600';
    if (diffDays <= 7) {
        colorClass = 'text-red-600 font-bold';
    } else if (diffDays <= 14) {
        colorClass = 'text-orange-600 font-semibold';
    }

    return (
        <div className="text-xs">
            <p className="font-semibold text-text-primary">{deadline.toLocaleDateString()}</p>
            <p className={colorClass}>
                {diffDays >= 0 ? `in ${diffDays} days` : `${Math.abs(diffDays)} days ago`}
            </p>
        </div>
    );
};


const AssessmentResults: React.FC<AssessmentResultsProps> = ({ results, assessmentData, onRestart, onViewSummary }) => {
  const [discoveryDate, setDiscoveryDate] = useState(new Date().toISOString().split('T')[0]);
  const [view, setView] = useState<View>('dashboard');

  const renderSummaryView = () => (
    <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border-light">
              <th className="p-4 font-semibold text-text-primary w-[12%]">Jurisdiction</th>
              <th className="p-4 font-semibold text-text-primary w-[8%]">Affected</th>
              <th className="p-4 font-semibold text-text-primary w-[18%]">Individual Notification</th>
              <th className="p-4 font-semibold text-text-primary w-[10%]">Ind. Deadline</th>
              <th className="p-4 font-semibold text-text-primary w-[18%]">AG Notification</th>
              <th className="p-4 font-semibold text-text-primary w-[10%]">AG Deadline</th>
              <th className="p-4 font-semibold text-text-primary w-[14%]">CRA Notification</th>
              <th className="p-4 font-semibold text-text-primary w-[10%]">CRA Deadline</th>
            </tr>
          </thead>
          <tbody>
            {results.map(res => (
              <tr key={res.stateCode} className="border-t border-border-light">
                <td className="p-4 align-top">
                    <button onClick={() => onViewSummary(res.stateCode)} className="font-bold text-accent hover:underline cursor-pointer text-left">
                        {res.law.state}
                    </button>
                </td>
                <td className="p-4 align-top font-medium text-text-primary">{res.affectedCount.toLocaleString()}</td>
                <td className="p-4 align-top">
                  <div>
                    <ResultIndicator result={res.individualNotification.required} />
                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{res.individualNotification.reason}</p>
                    {res.individualNotification.required !== 'No' && (
                       <p className="text-xs text-text-secondary mt-1">
                         <span className="font-semibold text-text-primary">Timeline:</span> {res.individualNotification.timeline}
                       </p>
                    )}
                  </div>
                </td>
                 <td className="p-4 align-top">
                    <DeadlineDisplay discoveryDate={discoveryDate} timeline={res.individualNotification.timeline} status={res.individualNotification.required} />
                </td>
                <td className="p-4 align-top">
                   <div>
                     <ResultIndicator result={res.agNotification.required} />
                     <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{res.agNotification.reason}</p>
                     {res.agNotification.required !== 'No' && (
                       <p className="text-xs text-text-secondary mt-1">
                         <span className="font-semibold text-text-primary">Timeline:</span> {res.agNotification.timeline}
                       </p>
                    )}
                   </div>
                </td>
                <td className="p-4 align-top">
                    <DeadlineDisplay discoveryDate={discoveryDate} timeline={res.agNotification.timeline} status={res.agNotification.required} />
                </td>
                <td className="p-4 align-top">
                  <div>
                    <ResultIndicator result={res.craNotification.required} />
                    <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{res.craNotification.reason}</p>
                    {res.craNotification.required !== 'No' && (
                       <p className="text-xs text-text-secondary mt-1">
                         <span className="font-semibold text-text-primary">Timeline:</span> {res.craNotification.timeline}
                       </p>
                    )}
                  </div>
                </td>
                <td className="p-4 align-top">
                    <DeadlineDisplay discoveryDate={discoveryDate} timeline={res.craNotification.timeline} status={res.craNotification.required} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );

  return (
    <div className="bg-surface-light p-6 sm:p-8 rounded-lg shadow-lg border border-border-light">
      <div className="flex flex-wrap justify-between items-start mb-6 pb-4 border-b border-border-light gap-4">
        <div>
            <h2 className="text-3xl font-bold font-display text-text-primary">Breach Assessment Results</h2>
            <p className="text-lg text-text-secondary mt-1">Summary of likely notification obligations based on your input.</p>
        </div>
        <div className="flex items-start gap-4">
            <div>
              <label htmlFor="discovery-date" className="block text-sm font-medium text-text-primary mb-1">Breach Discovery Date</label>
              <input 
                type="date"
                id="discovery-date"
                value={discoveryDate}
                onChange={(e) => setDiscoveryDate(e.target.value)}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent bg-surface-light text-text-primary"
              />
            </div>
            <button
              onClick={onRestart}
              className="px-4 py-2 bg-surface-light border border-border-light text-text-primary font-semibold rounded-md hover:bg-gray-100 transition whitespace-nowrap self-end"
            >
              Back to Assessments
            </button>
        </div>
      </div>

      <div className="flex items-center justify-start mb-4">
        <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
           <button
             onClick={() => setView('dashboard')}
             className={`px-3 py-1 text-sm font-semibold rounded-md transition ${view === 'dashboard' ? 'bg-white shadow-sm text-accent' : 'text-gray-600 hover:bg-gray-200'}`}
           >
             Dashboard
           </button>
           <button
             onClick={() => setView('summary')}
             className={`px-3 py-1 text-sm font-semibold rounded-md transition ${view === 'summary' ? 'bg-white shadow-sm text-accent' : 'text-gray-600 hover:bg-gray-200'}`}
           >
             Summary View
           </button>
           <button
             onClick={() => setView('chart')}
             className={`px-3 py-1 text-sm font-semibold rounded-md transition ${view === 'chart' ? 'bg-white shadow-sm text-accent' : 'text-gray-600 hover:bg-gray-200'}`}
           >
             Chart View
           </button>
           <button
             onClick={() => setView('calendar')}
             className={`px-3 py-1 text-sm font-semibold rounded-md transition ${view === 'calendar' ? 'bg-white shadow-sm text-accent' : 'text-gray-600 hover:bg-gray-200'}`}
           >
             Calendar View
           </button>
        </div>
      </div>
      
      {view === 'dashboard' ? <AssessmentDashboardView results={results} discoveryDate={discoveryDate} onViewSummary={onViewSummary} /> :
       view === 'summary' ? renderSummaryView() :
       view === 'chart' ? <AssessmentChartView results={results} discoveryDate={discoveryDate} assessmentData={assessmentData} onViewSummary={onViewSummary} /> :
       <AssessmentCalendarView results={results} discoveryDate={discoveryDate} onViewSummary={onViewSummary} />}
      
       <div className="mt-6 p-4 bg-gray-100 rounded-md text-sm text-gray-600 border border-border-light">
        <strong>Disclaimer:</strong> This tool provides a high-level, preliminary assessment based on the provided data and should not be considered legal advice. Always consult with qualified legal counsel and review the full statutes for definitive guidance.
      </div>
    </div>
  );
};

export default AssessmentResults;