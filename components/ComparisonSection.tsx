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
    <details open={defaultOpen} className="bg-white rounded-lg shadow-sm border border-border-color overflow-hidden group">
      <summary className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent cursor-pointer list-none">
        <h2 className="text-lg font-semibold font-display text-text-primary">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="p-4 border-t border-border-color">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-brand-primary">
                <th className="p-3 font-semibold text-text-primary bg-gray-50 sticky left-0 z-10 w-[200px]">Feature</th>
                {laws.map(law => (
                  <th key={law.stateCode} className="p-3 font-semibold text-brand-primary text-center w-[200px]">
                    {law.state}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fields.map(field => {
                  const isDifferent = differenceMap.get(field.key as string) ?? false;

                  return (
                    <tr key={field.label} className={`border-b border-border-color ${isDifferent ? 'bg-yellow-50' : ''}`}>
                      <td className={`p-3 font-medium text-text-secondary sticky left-0 w-[200px] z-10 ${isDifferent ? 'bg-yellow-50' : 'bg-white'}`}>{field.label}</td>
                      {laws.map(law => (
                        <td key={law.stateCode} className="p-3 align-top w-[200px]">
                          <div className={`text-sm ${field.isLongText ? 'text-left whitespace-pre-wrap' : 'text-center'} ${isDifferent ? 'text-gray-900' : 'text-text-secondary'}`}>
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