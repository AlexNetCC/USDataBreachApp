import React, { useMemo, useState } from 'react';
import { AssessmentResult } from '../../types';

interface AssessmentCalendarViewProps {
  results: AssessmentResult[];
  discoveryDate: string;
  onViewSummary: (stateCode: string) => void;
}

interface DeadlineEvent {
  date: Date;
  dateString: string;
  stateName: string;
  stateCode: string;
  type: 'individual' | 'ag' | 'cra';
  days: number;
  isCritical: boolean;
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

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const getMonthName = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

const AssessmentCalendarView: React.FC<AssessmentCalendarViewProps> = ({
  results,
  discoveryDate,
  onViewSummary
}) => {
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0);

  const { deadlineEvents, criticalDates } = useMemo(() => {
    if (!discoveryDate) return { deadlineEvents: [], criticalDates: new Set<number>() };

    const startDate = new Date(discoveryDate + 'T00:00:00');
    const events: DeadlineEvent[] = [];
    const criticals = { individual: Infinity, ag: Infinity, cra: Infinity };

    // First pass: find critical (earliest) deadlines
    results.forEach(res => {
      const individualDays = parseDays(res.individualNotification.timeline);
      const agDays = parseDays(res.agNotification.timeline);
      const craDays = parseDays(res.craNotification.timeline);

      if (res.individualNotification.required !== 'No' && individualDays !== null && individualDays < criticals.individual) {
        criticals.individual = individualDays;
      }
      if (res.agNotification.required !== 'No' && agDays !== null && agDays < criticals.ag) {
        criticals.ag = agDays;
      }
      if (res.craNotification.required !== 'No' && craDays !== null && craDays < criticals.cra) {
        criticals.cra = craDays;
      }
    });

    // Second pass: create events
    results.forEach(res => {
      const individualDays = parseDays(res.individualNotification.timeline);
      const agDays = parseDays(res.agNotification.timeline);
      const craDays = parseDays(res.craNotification.timeline);

      if (res.individualNotification.required !== 'No' && individualDays !== null) {
        const date = addDays(startDate, individualDays);
        events.push({
          date,
          dateString: formatDate(date),
          stateName: res.law.state,
          stateCode: res.law.stateCode,
          type: 'individual',
          days: individualDays,
          isCritical: individualDays === criticals.individual
        });
      }

      if (res.agNotification.required !== 'No' && agDays !== null) {
        const date = addDays(startDate, agDays);
        events.push({
          date,
          dateString: formatDate(date),
          stateName: res.law.state,
          stateCode: res.law.stateCode,
          type: 'ag',
          days: agDays,
          isCritical: agDays === criticals.ag
        });
      }

      if (res.craNotification.required !== 'No' && craDays !== null) {
        const date = addDays(startDate, craDays);
        events.push({
          date,
          dateString: formatDate(date),
          stateName: res.law.state,
          stateCode: res.law.stateCode,
          type: 'cra',
          days: craDays,
          isCritical: craDays === criticals.cra
        });
      }
    });

    // Sort by date
    events.sort((a, b) => a.date.getTime() - b.date.getTime());

    const criticalDaysSet = new Set<number>();
    if (criticals.individual !== Infinity) criticalDaysSet.add(criticals.individual);
    if (criticals.ag !== Infinity) criticalDaysSet.add(criticals.ag);
    if (criticals.cra !== Infinity) criticalDaysSet.add(criticals.cra);

    return { deadlineEvents: events, criticalDates: criticalDaysSet };
  }, [results, discoveryDate]);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, DeadlineEvent[]>();
    deadlineEvents.forEach(event => {
      const dateStr = event.dateString;
      if (!map.has(dateStr)) {
        map.set(dateStr, []);
      }
      map.get(dateStr)!.push(event);
    });
    return map;
  }, [deadlineEvents]);

  if (!discoveryDate) {
    return (
      <div className="text-center p-8 bg-accent/5 rounded-lg border-2 border-dashed border-accent/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-3 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg text-text-secondary font-semibold mb-1">No Discovery Date Set</p>
        <p className="text-sm text-text-secondary">Please select a "Breach Discovery Date" above to view deadlines on the calendar.</p>
      </div>
    );
  }

  if (deadlineEvents.length === 0) {
    return (
      <div className="text-center p-8 bg-accent/5 rounded-lg border-2 border-dashed border-accent/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-3 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-lg text-text-secondary font-semibold mb-1">No Deadlines to Display</p>
        <p className="text-sm text-text-secondary">No states with specific numerical deadlines apply to this assessment.</p>
      </div>
    );
  }

  const startDate = new Date(discoveryDate + 'T00:00:00');
  const displayDate = new Date(startDate);
  displayDate.setMonth(displayDate.getMonth() + currentMonthOffset);

  const year = displayDate.getFullYear();
  const month = displayDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfMonth(year, month);

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const handlePrint = () => {
    window.print();
  };

  const getTypeColor = (type: 'individual' | 'ag' | 'cra') => {
    switch (type) {
      case 'individual': return 'bg-accent text-white';
      case 'ag': return 'bg-text-secondary text-white';
      case 'cra': return 'bg-text-secondary/70 text-white';
    }
  };

  const getTypeLabel = (type: 'individual' | 'ag' | 'cra') => {
    switch (type) {
      case 'individual': return 'Indiv';
      case 'ag': return 'AG';
      case 'cra': return 'CRA';
    }
  };

  const upcomingDeadlines = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return deadlineEvents
      .filter(e => e.date >= today)
      .slice(0, 10);
  }, [deadlineEvents]);

  const nextMonthHasEvents = useMemo(() => {
    const nextMonth = new Date(displayDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const nextMonthStart = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
    const nextMonthEnd = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);

    return deadlineEvents.some(e => e.date >= nextMonthStart && e.date <= nextMonthEnd);
  }, [deadlineEvents, displayDate]);

  const prevMonthHasEvents = currentMonthOffset > 0;

  return (
    <div className="space-y-6 printable-content">
      <div className="flex justify-between items-center no-print">
        <div className="flex items-center space-x-4 text-sm text-text-secondary">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-accent mr-2 rounded-sm"></div>
            Individual
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-text-secondary mr-2 rounded-sm"></div>
            Attorney General
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-text-secondary/70 mr-2 rounded-sm"></div>
            CRA
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-1">🔥</span>
            Critical Deadline
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all duration-250 flex items-center space-x-2 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H5zm3 1a1 1 0 000 2h2a1 1 0 100-2H8zM5 12a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M4 8a1 1 0 100 2h12a1 1 0 100-2H4z" />
          </svg>
          <span>Print Calendar</span>
        </button>
      </div>

      <div className="border-2 border-border-light rounded-xl bg-surface-light p-6 shadow-card">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentMonthOffset(prev => prev - 1)}
            disabled={!prevMonthHasEvents}
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-250 flex items-center gap-2 ${
              prevMonthHasEvents
                ? 'bg-accent text-white hover:bg-accent-hover shadow-sm'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </button>

          <h2 className="text-2xl font-bold font-display text-text-primary">
            {getMonthName(displayDate)}
          </h2>

          <button
            onClick={() => setCurrentMonthOffset(prev => prev + 1)}
            disabled={!nextMonthHasEvents}
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-250 flex items-center gap-2 ${
              nextMonthHasEvents
                ? 'bg-accent text-white hover:bg-accent-hover shadow-sm'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-bold text-sm text-text-secondary py-2">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square"></div>;
            }

            const dateStr = formatDate(new Date(year, month, day));
            const events = eventsByDate.get(dateStr) || [];
            const hasEvents = events.length > 0;
            const hasCritical = events.some(e => e.isCritical);

            // Check if this is the discovery date
            const isDiscoveryDate = dateStr === discoveryDate;

            return (
              <div
                key={day}
                className={`aspect-square border-2 rounded-lg p-1.5 transition-all duration-200 ${
                  isDiscoveryDate
                    ? 'border-accent bg-accent/10'
                    : hasEvents
                    ? 'border-accent/30 bg-white hover:border-accent hover:shadow-md'
                    : 'border-border-light bg-gray-50/50'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className={`text-sm font-semibold mb-1 flex items-center justify-between ${
                    isDiscoveryDate ? 'text-accent' : 'text-text-primary'
                  }`}>
                    <span>{day}</span>
                    {hasCritical && <span className="text-xs" title="Critical Deadline">🔥</span>}
                    {isDiscoveryDate && !hasEvents && (
                      <span className="text-xs px-1 bg-accent text-white rounded">Start</span>
                    )}
                  </div>
                  <div className="flex-1 space-y-0.5 overflow-y-auto">
                    {events.slice(0, 3).map((event, i) => (
                      <button
                        key={i}
                        onClick={() => onViewSummary(event.stateCode)}
                        className={`w-full text-xs px-1 py-0.5 rounded ${getTypeColor(event.type)} hover:opacity-80 transition-opacity text-left truncate`}
                        title={`${event.stateName} - ${getTypeLabel(event.type)} (${event.days}d)`}
                      >
                        {event.isCritical && '🔥 '}
                        {event.stateName.length > 10 ? event.stateCode : event.stateName}
                      </button>
                    ))}
                    {events.length > 3 && (
                      <div className="text-xs text-text-secondary font-semibold px-1">
                        +{events.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Deadlines List */}
      <div className="border-2 border-border-light rounded-xl bg-surface-light p-6 shadow-card">
        <h3 className="text-2xl font-bold font-display text-text-primary mb-4">Upcoming Deadlines</h3>
        {upcomingDeadlines.length === 0 ? (
          <p className="text-text-secondary">No upcoming deadlines.</p>
        ) : (
          <div className="space-y-2">
            {upcomingDeadlines.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white border border-border-light rounded-lg hover:border-accent/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`px-2.5 py-1 rounded-md ${getTypeColor(event.type)} text-xs font-bold min-w-[60px] text-center`}>
                    {getTypeLabel(event.type).toUpperCase()}
                  </div>
                  <button
                    onClick={() => onViewSummary(event.stateCode)}
                    className="font-semibold text-text-primary hover:text-accent transition-colors"
                  >
                    {event.stateName}
                  </button>
                  {event.isCritical && (
                    <span className="text-sm" title="Critical Deadline">🔥 Critical</span>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-bold text-text-primary">
                    {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Day {event.days}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentCalendarView;
