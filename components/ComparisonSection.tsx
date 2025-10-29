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
    <details open={defaultOpen} className="bg-surface-light rounded-lg shadow-subtle border border-border-light overflow-hidden group">
      <summary className="w-full flex justify-between items-center p-4 bg-surface-light hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer list-none">
        <h2 className="text-lg font-semibold font-display text-text-primary">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="border-t border-border-light">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead className="bg-gray-50">
              <tr className="border-b-2 border-accent/20">
                <th className="p-3 font-semibold text-text-primary bg-gray-50 sticky left-0 z-10 w-[200px]">Feature</th>
                {laws.map(law => (
                  <th key={law.stateCode} className="p-3 font-semibold text-accent-hover text-center w-[200px]">
                    {law.state}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fields.map(field => {
                  const isDifferent = differenceMap.get(field.key as string) ?? false;
                  const rowBg = isDifferent ? 'bg-accent/5' : 'bg-surface-light';
                  const stickyColBg = isDifferent ? 'bg-accent/5' : 'bg-surface-light';

                  return (
                    <tr key={field.label} className={`border-b border-border-light ${rowBg}`}>
                      <td className={`p-3 font-medium text-text-secondary sticky left-0 w-[200px] z-10 ${stickyColBg}`}>{field.label}</td>
                      {laws.map(law => (
                        <td key={law.stateCode} className="p-3 align-top w-[200px]">
                          <div className={`text-sm ${field.isLongText ? 'text-left whitespace-pre-wrap' : 'text-center'} ${isDifferent ? 'text-text-primary' : 'text-text-secondary'}`}>
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

export default ComparisonSection;