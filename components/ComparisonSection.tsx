import React, { useMemo } from 'react';
import { StateLaw } from '../types';
import BooleanIndicator from './BooleanIndicator';

export type ComparisonField = {
  label: string;
  key: keyof StateLaw;
  render?: (value: any) => React.ReactNode;
  isBoolean?: boolean;
  isLongText?: boolean;
};

interface ComparisonSectionProps {
  title: string;
  laws: StateLaw[];
  fields: ComparisonField[];
  defaultOpen?: boolean;
}

const areValuesDifferent = (values: any[]): boolean => {
    if (values.length <= 1) return false;
    const firstValue = JSON.stringify(values[0] ?? null);
    for (let i = 1; i < values.length; i++) {
        if (JSON.stringify(values[i] ?? null) !== firstValue) {
            return true;
        }
    }
    return false;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = React.memo(({ title, laws, fields, defaultOpen = false }) => {
  
  const differenceMap = useMemo(() => {
    const map = new Map<string, boolean>();
    fields.forEach(field => {
      const values = laws.map(law => law[field.key]);
      map.set(field.key as string, areValuesDifferent(values));
    });
    return map;
  }, [laws, fields]);
  
  return (
    <details open={defaultOpen} className="bg-surface-light rounded-xl shadow-card border border-border-light overflow-hidden group">
      <summary className="w-full flex justify-between items-center p-5 bg-surface-light hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer list-none transition-colors duration-200">
        <h2 className="text-2xl font-bold font-display text-text-primary">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-text-secondary transition-transform duration-300 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="border-t-2 border-border-light">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead className="bg-accent/10">
              <tr className="border-b-2 border-accent/30">
                <th className="p-4 font-bold text-text-primary bg-accent/10 sticky left-0 z-10 w-[200px]">Feature</th>
                {laws.map(law => (
                  <th key={law.stateCode} className="p-4 font-bold text-accent text-center w-[200px]">
                    {law.state}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => {
                  const isDifferent = differenceMap.get(field.key as string) ?? false;
                  const isEvenRow = index % 2 === 0;
                  const rowBg = isDifferent
                    ? 'bg-accent/10'
                    : isEvenRow
                      ? 'bg-surface-light'
                      : 'bg-gray-50/50';
                  const stickyColBg = isDifferent
                    ? 'bg-accent/10'
                    : isEvenRow
                      ? 'bg-surface-light'
                      : 'bg-gray-50/50';

                  return (
                    <tr key={field.label} className={`border-b border-border-light ${rowBg} hover:bg-accent/5 transition-colors`}>
                      <td className={`p-4 font-semibold text-text-secondary sticky left-0 w-[200px] z-10 ${stickyColBg}`}>{field.label}</td>
                      {laws.map(law => (
                        <td key={law.stateCode} className="p-4 align-top w-[200px]">
                          <div className={`text-sm ${field.isLongText ? 'text-left whitespace-pre-wrap leading-relaxed' : 'text-center'} ${isDifferent ? 'text-text-primary font-medium' : 'text-text-secondary'}`}>
                            {field.render
                                ? field.render(law[field.key])
                                : field.isBoolean
                                    ? <div className="flex justify-center"><BooleanIndicator value={!!law[field.key]} /></div>
                                    : String(law[field.key] ?? 'N/A')}
                          </div>
                        </td>
                      ))}
                    </tr>
                  )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  );
}, (prevProps, nextProps) => {
    // Custom comparison function to prevent re-renders if the set of laws hasn't changed.
    if (prevProps.laws.length !== nextProps.laws.length) return false;
    
    const prevCodes = prevProps.laws.map(l => l.stateCode).sort().join(',');
    const nextCodes = nextProps.laws.map(l => l.stateCode).sort().join(',');
    
    return prevCodes === nextCodes && prevProps.fields === nextProps.fields;
});

ComparisonSection.displayName = 'ComparisonSection';

export default ComparisonSection;