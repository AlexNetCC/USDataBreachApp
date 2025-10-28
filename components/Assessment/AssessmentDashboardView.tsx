import React, { useMemo } from 'react';
import { AssessmentResult } from '../../types';

interface AssessmentDashboardViewProps {
  results: AssessmentResult[];
  discoveryDate: string;
  onViewSummary: (stateCode: string) => void;
}

const parseDays = (timeline: string): number | null => {
  if (!timeline || timeline === 'N/A') return null;
  const lowerTimeline = timeline.toLowerCase();
  if (lowerTimeline.includes('asap') || lowerTimeline.includes('immediate') || lowerTimeline.includes('concurrent') || !lowerTimeline.match(/(\d+)\s*days/)) {
    return null;
  }
  const daysMatch = lowerTimeline.match(/(\d+)\s*days/);
  if (daysMatch) {
    return parseInt(daysMatch[1], 10);
  }
  return null;
};

const addDays = (dateStr: string, days: number): string => {
  if (!dateStr) return '';
  const startDate = new Date(dateStr + 'T00:00:00');
  const deadline = new Date(startDate);
  deadline.setDate(deadline.getDate() + days);
  return deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

type DeadlineGroup = { [days: number]: { name: string, code: string }[] };

const DeadlineCard: React.FC<{ title: string; data: DeadlineGroup; discoveryDate: string, onViewSummary: (stateCode: string) => void; }> = ({ title, data, discoveryDate, onViewSummary }) => {
  const sortedDeadlines = useMemo(() => Object.keys(data).map(Number).sort((a, b) => a - b), [data]);

  if (sortedDeadlines.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
        <h3 className="text-xl font-bold font-display text-text-primary mb-3">{title}</h3>
        <p className="text-text-secondary">No specific numerical deadlines apply based on the current assessment.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold font-display text-text-primary mb-4">{title}</h3>
      <div className="space-y-4">
        {sortedDeadlines.map((days, index) => (
          <div key={days} className={`p-4 rounded-lg ${index === 0 ? 'bg-red-50 border-red-200 border' : 'bg-gray-50 border-gray-200 border'}`}>
            <div className="flex justify-between items-baseline">
              <p className={`text-2xl font-semibold ${index === 0 ? 'text-red-600' : 'text-text-primary'}`}>{days} Days</p>
              {discoveryDate && <p className="text-sm font-medium text-text-secondary">Due: {addDays(discoveryDate, days)}</p>}
            </div>
            <div className="mt-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Applicable Jurisdictions:</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {data[days].sort((a,b) => a.name.localeCompare(b.name)).map(state => (
                   <button key={state.code} onClick={() => onViewSummary(state.code)} className="text-sm text-text-secondary hover:underline">
                      {state.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const AssessmentDashboardView: React.FC<AssessmentDashboardViewProps> = ({ results, discoveryDate, onViewSummary }) => {
  const { individualDeadlines, agDeadlines, craDeadlines } = useMemo(() => {
    const individual: DeadlineGroup = {};
    const ag: DeadlineGroup = {};
    const cra: DeadlineGroup = {};

    results.forEach(res => {
      const state = { name: res.law.state, code: res.stateCode };

      const indDays = parseDays(res.individualNotification.timeline);
      if (res.individualNotification.required !== 'No' && indDays !== null) {
        if (!individual[indDays]) individual[indDays] = [];
        individual[indDays].push(state);
      }

      const agDays = parseDays(res.agNotification.timeline);
      if (res.agNotification.required !== 'No' && agDays !== null) {
        if (!ag[agDays]) ag[agDays] = [];
        ag[agDays].push(state);
      }
      
      const craDays = parseDays(res.craNotification.timeline);
      if (res.craNotification.required !== 'No' && craDays !== null) {
        if (!cra[craDays]) cra[craDays] = [];
        cra[craDays].push(state);
      }
    });

    return { individualDeadlines: individual, agDeadlines: ag, craDeadlines: cra };
  }, [results]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DeadlineCard title="Individual Notification Deadlines" data={individualDeadlines} discoveryDate={discoveryDate} onViewSummary={onViewSummary} />
      <DeadlineCard title="Attorney General Deadlines" data={agDeadlines} discoveryDate={discoveryDate} onViewSummary={onViewSummary} />
      <DeadlineCard title="CRA Notification Deadlines" data={craDeadlines} discoveryDate={discoveryDate} onViewSummary={onViewSummary} />
    </div>
  );
};

export default AssessmentDashboardView;