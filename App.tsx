
import React, { useState, useMemo, useEffect } from 'react';
import { StateLaw, Filters, AppState, ViewMode, LawIndex } from './types';
import StateSelector from './components/StateSelector';
import StateDetailView from './components/StateDetailView';
import ComparisonView from './components/ComparisonView';
import Welcome from './components/Welcome';
import BreachAssessmentWizard from './components/Assessment/BreachAssessmentWizard';
import MatrixView from './components/MatrixView';
import { createLawIndex } from './services/dataIndexService';
import { loadAppState, saveAppState } from './services/stateService';

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
    return loadAppState() || defaultAppState;
  });

  useEffect(() => {
    saveAppState(appState);
  }, [appState]);

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        const res = await fetch('laws.json');
        if (!res.ok) {
          throw new Error(`Failed to fetch laws.json: ${res.statusText}`);
        }
        const laws: StateLaw[] = await res.json();
        
        setAllLaws(laws.sort((a, b) => a.state.localeCompare(b.state)));
        setLawIndex(createLawIndex(laws));
      } catch (e: any) {
        setError(`Failed to load law files: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaws();
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
    
    let laws = Array.from(resultSet).map(code => lawIndex.byStateCode.get(code)!).filter(Boolean);

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
            snippet = rawSnippet.replace(regex, (match) => `<mark class="bg-accent/20 text-text-primary px-1 rounded">${match}</mark>`);
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
      return <div className="flex justify-center items-center h-screen-minus-header"><p>Loading and parsing 52 jurisdiction summaries...</p></div>;
    }
    if (error) {
      return <div className="flex justify-center items-center h-screen-minus-header"><p className="text-red-600">{error}</p></div>;
    }

    switch(appState.viewMode) {
      case 'explorer':
        return (
          <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-96 lg:w-[420px] bg-surface border-r border-border-dark p-4 md:p-6 sticky top-[88px] h-screen-minus-header overflow-y-auto text-on-dark">
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
            <main className="flex-1 p-4 md:p-12 overflow-y-auto h-screen-minus-header">
              {renderExplorerContent()}
            </main>
          </div>
        );
      case 'assessment':
        return <BreachAssessmentWizard laws={allLaws} onViewSummary={handleViewJurisdictionSummary} />;
      case 'matrix':
        return <MatrixView laws={allLaws} onViewSummary={handleViewJurisdictionSummary} />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <header className="bg-surface shadow-lg sticky top-0 z-30 no-print h-[88px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-on-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-display font-semibold text-on-dark">
              Data Breach Law Navigator
            </h1>
          </div>
           <nav className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('explorer')}
              className={`px-5 py-2 text-base font-semibold rounded-md transition-colors duration-200 ${appState.viewMode === 'explorer' ? 'bg-accent text-white' : 'text-on-dark-secondary hover:bg-white/10 hover:text-on-dark'}`}
            >
              Manual Explorer
            </button>
            <button
              onClick={() => setViewMode('assessment')}
              className={`px-5 py-2 text-base font-semibold rounded-md transition-colors duration-200 ${appState.viewMode === 'assessment' ? 'bg-accent text-white' : 'text-on-dark-secondary hover:bg-white/10 hover:text-on-dark'}`}
            >
              Breach Assessment
            </button>
             <button
              onClick={() => setViewMode('matrix')}
              className={`px-5 py-2 text-base font-semibold rounded-md transition-colors duration-200 ${appState.viewMode === 'matrix' ? 'bg-accent text-white' : 'text-on-dark-secondary hover:bg-white/10 hover:text-on-dark'}`}
            >
              Requirements Matrix
            </button>
          </nav>
        </div>
      </header>
      
      {renderContent()}
    </div>
  );
};

export default App;