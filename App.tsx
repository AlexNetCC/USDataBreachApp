import React, { useState, useMemo, useEffect } from 'react';
import { StateLaw, Filters, AppState, ViewMode, LawIndex } from './types';
import StateSelector from './components/StateSelector';
import StateDetailView from './components/StateDetailView';
import ComparisonView from './components/ComparisonView';
import Welcome from './components/Welcome';
import BreachAssessmentWizard from './components/Assessment/BreachAssessmentWizard';
import MatrixView from './components/MatrixView';
import matter from 'gray-matter';
import { createLawIndex } from './services/dataIndexService';

// Hardcoded list of all law files to be fetched.
const lawFiles = [
  'alabama.md', 'alaska.md', 'arizona.md', 'arkansas.md', 'california.md', 'colorado.md', 
  'connecticut.md', 'delaware.md', 'district-of-columbia.md', 'florida.md', 'georgia.md', 
  'hawaii.md', 'idaho.md', 'illinois.md', 'indiana.md', 'iowa.md', 'kansas.md', 'kentucky.md', 
  'louisiana.md', 'maine.md', 'maryland.md', 'massachusetts.md', 'michigan.md', 'minnesota.md', 
  'mississippi.md', 'missouri.md', 'montana.md', 'nebraska.md', 'nevada.md', 'new-hampshire.md', 
  'new-jersey.md', 'new-mexico.md', 'new-york.md', 'north-carolina.md', 'north-dakota.md', 
  'ohio.md', 'oklahoma.md', 'oregon.md', 'pennsylvania.md', 'puerto-rico.md', 'rhode-island.md', 
  'south-carolina.md', 'south-dakota.md', 'tennessee.md', 'texas.md', 'utah.md', 'vermont.md', 
  'virginia.md', 'washington.md', 'west-virginia.md', 'wisconsin.md', 'wyoming.md'
];


const initialFilters: Filters = {
  timelineMaxDays: null,
  agThresholdMax: null,
  privateRightOfAction: 'any',
  riskOfHarmAllowed: 'any',
  encryptionSafeHarbor: 'any',
};

const defaultAppState: AppState = {
    viewMode: 'explorer',
    searchTerm: '',
    filters: initialFilters,
    selectedStateCodes: [],
};


const App: React.FC = () => {
  const [allLaws, setAllLaws] = useState<StateLaw[]>([]);
  const [lawIndex, setLawIndex] = useState<LawIndex | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [appState, setAppState] = useState<AppState>(() => {
    try {
      const savedState = sessionStorage.getItem('breachLawNavigatorState');
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (e) {
      console.error("Could not parse saved state:", e);
    }
    return defaultAppState;
  });

  useEffect(() => {
    try {
      sessionStorage.setItem('breachLawNavigatorState', JSON.stringify(appState));
    } catch(e) {
      console.error("Could not save state:", e);
    }
  }, [appState]);

  useEffect(() => {
    const fetchAndParseLaws = async () => {
      try {
        const lawPromises = lawFiles.map(async (filename) => {
          const response = await fetch(`/raw-laws/${filename}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${filename}`);
          }
          const fileContents = await response.text();
          const { data, content } = matter(fileContents);

          const legislativeHistory = [];
          let i = 1;
          while (data[`legislation_bill_${i}_number`]) {
              legislativeHistory.push({
                  number: data[`legislation_bill_${i}_number`],
                  signedDate: data[`legislation_bill_${i}_signed_date`],
                  effectiveDate: data[`legislation_bill_${i}_effective_date`],
              });
              i++;
          }
  
          const camelCaseData = Object.keys(data).reduce((acc, key) => {
              const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
              acc[camelKey] = data[key];
              return acc;
          }, {} as any);
          
          return {
            ...camelCaseData,
            legislativeHistory,
            markdownContent: content,
          };
        });

        const parsedLaws = (await Promise.all(lawPromises)) as StateLaw[];
        setAllLaws(parsedLaws);
        setLawIndex(createLawIndex(parsedLaws));
      } catch (e: any) {
        setError(`Failed to load or parse law files: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndParseLaws();
  }, []);

  const handleSelectState = (stateCode: string) => {
    setAppState(prev => ({
        ...prev,
        selectedStateCodes: prev.selectedStateCodes.includes(stateCode)
            ? prev.selectedStateCodes.filter(code => code !== stateCode)
            : [...prev.selectedStateCodes, stateCode]
    }));
  };

  const handleClearSelection = () => {
    setAppState(prev => ({ ...prev, selectedStateCodes: [] }));
  };

  const handleFilterChange = (filterName: keyof Filters, value: any) => {
    setAppState(prev => ({ ...prev, filters: { ...prev.filters, [filterName]: value } }));
  };
  
  const handleResetFilters = () => {
    setAppState(prev => ({ ...prev, searchTerm: '', filters: initialFilters }));
  };

  const handleSearchChange = (term: string) => {
    setAppState(prev => ({ ...prev, searchTerm: term }));
  };

  const setViewMode = (mode: ViewMode) => {
    setAppState(prev => ({ ...prev, viewMode: mode }));
  };
  
  const handleViewJurisdictionSummary = (stateCode: string) => {
    setAppState(prev => ({
        ...prev,
        viewMode: 'explorer',
        selectedStateCodes: [stateCode]
    }));
  };

  const filteredLaws = useMemo(() => {
    if (!lawIndex) return [];

    let resultSet = new Set<string>(allLaws.map(l => l.stateCode));

    // Apply boolean filters first using the index for O(1) lookups
    if (appState.filters.privateRightOfAction !== 'any') {
        const targetSet = appState.filters.privateRightOfAction === 'yes' ? lawIndex.privateRightOfActionYes : lawIndex.privateRightOfActionNo;
        resultSet = new Set([...resultSet].filter(x => targetSet.has(x)));
    }
    if (appState.filters.riskOfHarmAllowed !== 'any') {
        const targetSet = appState.filters.riskOfHarmAllowed === 'yes' ? lawIndex.riskOfHarmAllowedYes : lawIndex.riskOfHarmAllowedNo;
        resultSet = new Set([...resultSet].filter(x => targetSet.has(x)));
    }
    if (appState.filters.encryptionSafeHarbor !== 'any') {
        const targetSet = appState.filters.encryptionSafeHarbor === 'yes' ? lawIndex.encryptionSafeHarborYes : lawIndex.encryptionSafeHarborNo;
        resultSet = new Set([...resultSet].filter(x => targetSet.has(x)));
    }
    
    let laws = Array.from(resultSet).map(code => lawIndex.byStateCode.get(code)!);

    // Apply numeric and text filters on the reduced set
    laws = laws
      .filter(law => { // Timeline filter
        if (appState.filters.timelineMaxDays === null) return true;
        return law.individualNotificationTimelineDays <= appState.filters.timelineMaxDays;
      })
      .filter(law => { // AG Threshold filter
        if (appState.filters.agThresholdMax === null) return true;
        if (law.agNotificationThreshold === null) return false; 
        return law.agNotificationThreshold <= appState.filters.agThresholdMax;
      });

    // Full-text search on the already filtered set
    if (appState.searchTerm) {
      const lowercasedTerm = appState.searchTerm.toLowerCase();
      const searchResults: StateLaw[] = [];

      for (const law of laws) {
        delete law.searchSnippet;
        const stateMatch = law.state.toLowerCase().includes(lowercasedTerm) || law.stateCode.toLowerCase().includes(lowercasedTerm);
        const contentMatchIndex = law.markdownContent.toLowerCase().indexOf(lowercasedTerm);
        
        if (stateMatch || contentMatchIndex !== -1) {
          let snippet = '';
          if (!stateMatch && contentMatchIndex !== -1) {
            const snippetRadius = 70;
            const start = Math.max(0, contentMatchIndex - snippetRadius);
            const end = Math.min(law.markdownContent.length, contentMatchIndex + lowercasedTerm.length + snippetRadius);
            
            let rawSnippet = law.markdownContent.substring(start, end);
            if (start > 0) rawSnippet = '...' + rawSnippet;
            if (end < law.markdownContent.length) rawSnippet += '...';

            const regex = new RegExp(appState.searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            snippet = rawSnippet.replace(regex, (match) => `<mark class="bg-yellow-200 px-1 rounded">${match}</mark>`);
          }
          searchResults.push({ ...law, searchSnippet: snippet || undefined });
        }
      }
      laws = searchResults;
    }

    return laws;
  }, [appState.searchTerm, appState.filters, allLaws, lawIndex]);

  const selectedLaws = useMemo(() => {
    if (!lawIndex) return [];
    return appState.selectedStateCodes.map(code => lawIndex.byStateCode.get(code)!).filter(Boolean);
  }, [appState.selectedStateCodes, lawIndex]);

  const renderExplorerContent = () => {
    if (selectedLaws.length === 0) {
      return <Welcome laws={allLaws} />;
    }
    if (selectedLaws.length === 1) {
      return <StateDetailView law={selectedLaws[0]} />;
    }
    return <ComparisonView laws={selectedLaws} />;
  };

  const renderContent = () => {
    if (isLoading || !lawIndex) {
      return <div className="flex justify-center items-center h-screen-minus-header"><p>Loading and parsing {lawFiles.length} jurisdiction summaries...</p></div>;
    }
    if (error) {
      return <div className="flex justify-center items-center h-screen-minus-header"><p className="text-red-600">{error}</p></div>;
    }

    switch(appState.viewMode) {
      case 'explorer':
        return (
          <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-80 lg:w-96 bg-white border-r border-border-color p-4 md:p-6 sticky top-[80px] h-screen-minus-header overflow-y-auto">
              <StateSelector
                laws={filteredLaws}
                selectedStateCodes={appState.selectedStateCodes}
                onSelectState={handleSelectState}
                onClearSelection={handleClearSelection}
                searchTerm={appState.searchTerm}
                onSearchChange={handleSearchChange}
                filters={appState.filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
              />
            </aside>
            <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen-minus-header">
              {renderExplorerContent()}
            </main>
          </div>
        );
      case 'assessment':
        return <BreachAssessmentWizard laws={allLaws} onViewSummary={handleViewJurisdictionSummary} />;
      case 'matrix':
        return <MatrixView laws={allLaws} />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-text-primary">
      <header className="bg-brand-primary shadow-md sticky top-0 z-20 no-print">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-1.096.906-2.457.906-3.885a4.5 4.5 0 00-4.5-4.5V7.5a6 6 0 11-12 0v4.5a4.5 4.5 0 004.5 4.5c.356 0 .703-.04 1.032-.12a1.307 1.307 0 00-1.217 1.811l1.834 1.834a1.307 1.307 0 001.811-1.217c.162.375.36.72.596 1.032.356-1.036.04-2.422-.96-3.422z" />
            </svg>
            <h1 className="text-2xl font-display font-semibold text-white">
              Data Breach Law Navigator
            </h1>
          </div>
           <div className="flex items-center space-x-2 bg-brand-secondary p-1 rounded-lg">
            <button
              onClick={() => setViewMode('explorer')}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition ${appState.viewMode === 'explorer' ? 'bg-white text-brand-primary' : 'text-white hover:bg-brand-accent'}`}
            >
              Manual Explorer
            </button>
            <button
              onClick={() => setViewMode('assessment')}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition ${appState.viewMode === 'assessment' ? 'bg-white text-brand-primary' : 'text-white hover:bg-brand-accent'}`}
            >
              Breach Assessment
            </button>
             <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition ${appState.viewMode === 'matrix' ? 'bg-white text-brand-primary' : 'text-white hover:bg-brand-accent'}`}
            >
              Requirements Matrix
            </button>
          </div>
        </div>
      </header>
      
      {renderContent()}
    </div>
  );
};

export default App;