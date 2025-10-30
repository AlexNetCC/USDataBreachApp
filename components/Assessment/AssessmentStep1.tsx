import React, { useState, useMemo } from 'react';
import { StateLaw } from '../../types';
import WizardStep from './WizardStep';

interface AssessmentStep1Props {
  onNext: (affectedCounts: { [stateCode: string]: number }) => void;
  initialData: { [stateCode: string]: number };
  laws: StateLaw[];
}

const AssessmentStep1: React.FC<AssessmentStep1Props> = ({ onNext, initialData, laws }) => {
  const [counts, setCounts] = useState<{ [key: string]: string }>(
    Object.entries(initialData).reduce((acc, [key, val]) => {
      acc[key] = String(val);
      return acc;
    }, {} as {[key: string]: string})
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [pastedData, setPastedData] = useState('');

  const jurisdictionMap = useMemo(() => {
    const map = new Map<string, string>();
    laws.forEach(law => {
      map.set(law.state.toLowerCase(), law.stateCode);
      map.set(law.stateCode.toLowerCase(), law.stateCode);
    });
    return map;
  }, [laws]);

  const handleCountChange = (stateCode: string, value: string) => {
    setCounts(prev => ({ ...prev, [stateCode]: value }));
  };

  const handleAddState = (stateCode: string) => {
    if (!counts.hasOwnProperty(stateCode)) {
      setCounts(prev => ({ ...prev, [stateCode]: '' }));
    }
    setSearchTerm('');
  };

  const handleRemoveState = (stateCode: string) => {
    setCounts(prev => {
      const newCounts = { ...prev };
      delete newCounts[stateCode];
      return newCounts;
    });
  };

  const handleParsePastedData = () => {
    const newCounts: { [key: string]: string } = {};
    const rows = pastedData.split(/[\r\n]+/).filter(row => row.trim() !== '');

    rows.forEach(row => {
      const parts = row.split(/[\t,|]/);
      if (parts.length < 2) return;

      const statePart = parts[0].trim();
      const countPart = parts[parts.length - 1].trim().replace(/,/g, '');
      const count = parseInt(countPart, 10);

      if (isNaN(count)) return;

      let stateCode: string | undefined;

      // Try matching the whole state part first
      stateCode = jurisdictionMap.get(statePart.toLowerCase());
      
      // If not found, try parsing formats like "Alabama - AL"
      if (!stateCode && statePart.includes(' - ')) {
          const subParts = statePart.split(' - ');
          stateCode = jurisdictionMap.get(subParts[0].trim().toLowerCase()) || jurisdictionMap.get(subParts[1].trim().toLowerCase());
      }
      
      if (stateCode) {
        newCounts[stateCode] = String(count);
      }
    });

    setCounts(prev => ({ ...prev, ...newCounts }));
    setPastedData('');
  };

  const addedStateCodes = useMemo(() => new Set(Object.keys(counts)), [counts]);

  const filteredLawsForAutocomplete = useMemo(() => {
    if (!searchTerm) return [];
    return laws.filter(law => 
      !addedStateCodes.has(law.stateCode) &&
      (law.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
       law.stateCode.toLowerCase().includes(searchTerm.toLowerCase()))
    ).slice(0, 5); // Limit to 5 results
  }, [searchTerm, laws, addedStateCodes]);

  const handleSubmit = () => {
    const numericCounts = Object.entries(counts).reduce((acc, [key, val]: [string, string]) => {
      const num = parseInt(val, 10);

      // Validation
      if (isNaN(num) || num < 1) {
        return acc; // Skip invalid entries
      }
      if (num > 1_000_000_000) {
        const lawName = laws.find(l => l.stateCode === key)?.state || key;
        alert(`Affected count for ${lawName} exceeds maximum (1 billion). Please verify.`);
        return acc;
      }

      acc[key] = num;
      return acc;
    }, {} as { [key: string]: number });

    if (Object.keys(numericCounts).length === 0) {
      alert('Please enter at least one valid affected count greater than 0.');
      return;
    }

    onNext(numericCounts);
  };
  
  // FIX: Explicitly type `sum` and `val` to prevent type inference issues.
  const totalAffected = Object.values(counts).reduce((sum: number, val: string) => sum + (parseInt(val, 10) || 0), 0);
  const statesWithResidents = Object.keys(counts).filter(key => (parseInt(counts[key], 10) || 0) > 0).length;
  
  const sortedAddedStateLaws = useMemo(() => {
    return Object.keys(counts)
      .map(code => laws.find(l => l.stateCode === code))
      .filter((l): l is StateLaw => !!l)
      .sort((a, b) => a.state.localeCompare(b.state));
  }, [counts, laws]);


  return (
    <WizardStep
      title="Breach Assessment Wizard"
      subtitle="Step 1: Enter the number of affected residents per jurisdiction."
      onNext={handleSubmit}
      isNextDisabled={totalAffected === 0}
      nextButtonText="Next: Incident Details"
      leftFooterContent={
        <div>
          <p className="text-text-primary font-semibold">Total Affected: {totalAffected.toLocaleString()}</p>
          <p className="text-text-secondary text-sm">{statesWithResidents} jurisdictions with affected residents.</p>
        </div>
      }
    >
        <div className="space-y-8">
            <details className="group border-2 border-border-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <summary className="list-none flex items-center justify-between p-4 cursor-pointer hover:bg-accent/5 transition-colors bg-gradient-to-r from-accent/5 to-transparent">
                    <span className="font-bold text-text-primary text-lg">Quick Add from Spreadsheet</span>
                    <svg className="w-5 h-5 text-accent transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div className="p-5 border-t-2 border-border-light bg-accent/5">
                    <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                        Paste two-column data here. Each line should contain the jurisdiction name or abbreviation, followed by a comma, tab, or pipe (|), then the count.
                    </p>
                    <textarea
                        value={pastedData}
                        onChange={(e) => setPastedData(e.target.value)}
                        placeholder={`e.g.\nCA, 546\nFlorida | 3927\nTexas   592`}
                        className="w-full p-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-white text-text-primary font-mono text-sm hover:border-accent/50"
                        rows={5}
                    />
                    <div className="mt-3 flex justify-end">
                        <button onClick={handleParsePastedData} disabled={!pastedData} className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover hover:shadow-md transition-all duration-250 disabled:bg-accent/50 disabled:cursor-not-allowed disabled:shadow-none">
                            Process Pasted Data
                        </button>
                    </div>
                </div>
            </details>

            <div>
                <label htmlFor="jurisdiction-search" className="block text-lg font-bold text-text-primary mb-3">Add Jurisdictions Manually</label>
                <div className="relative">
                    <input
                        id="jurisdiction-search"
                        type="text"
                        placeholder="Type to search for a state or territory..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-white text-text-primary hover:border-accent/50"
                    />
                     <svg className="w-5 h-5 text-text-secondary absolute left-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchTerm && (
                        <div className="relative">
                            <ul className="absolute z-20 w-full bg-white border-2 border-accent/30 rounded-b-lg mt-0 max-h-60 overflow-y-auto shadow-xl">
                                {filteredLawsForAutocomplete.length > 0 ? (
                                    filteredLawsForAutocomplete.map(law => (
                                        <li key={law.stateCode} onClick={() => handleAddState(law.stateCode)} className="px-4 py-3 hover:bg-accent/10 cursor-pointer text-text-primary font-medium transition-colors">
                                            {law.state}
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-4 py-3 text-text-secondary">No matching jurisdictions found.</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-text-primary border-b-2 border-border-light pb-3 mb-4">Affected Jurisdictions ({sortedAddedStateLaws.length})</h3>
                {sortedAddedStateLaws.length === 0 ? (
                    <div className="text-center text-text-secondary py-8 bg-accent/5 rounded-lg border-2 border-dashed border-accent/30">
                        <svg className="w-12 h-12 mx-auto mb-3 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="font-semibold mb-1">No jurisdictions added yet.</p>
                        <p className="text-sm">Use the search bar or paste from a spreadsheet to begin.</p>
                    </div>
                ) : (
                    <div className="space-y-2 max-h-[40vh] overflow-y-auto -mr-3 pr-3">
                        {sortedAddedStateLaws.map(law => (
                            <div key={law.stateCode} className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-accent/5 animate-fade-in border border-transparent hover:border-accent/20 transition-all">
                                <label htmlFor={law.stateCode} className="font-semibold text-text-primary flex-1">{law.state}</label>
                                <input
                                    type="number"
                                    id={law.stateCode}
                                    value={counts[law.stateCode] || ''}
                                    onChange={e => handleCountChange(law.stateCode, e.target.value)}
                                    placeholder="Count"
                                    min="1"
                                    max="1000000000"
                                    step="1"
                                    className="w-36 p-2.5 border-2 border-border-light rounded-lg bg-white text-text-primary text-right focus:ring-2 focus:ring-accent focus:border-accent transition-all hover:border-accent/50 font-semibold"
                                />
                                <button onClick={() => handleRemoveState(law.stateCode)} className="text-text-secondary hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all" aria-label={`Remove ${law.state}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
      </div>
    </WizardStep>
  );
};

export default AssessmentStep1;