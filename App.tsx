
import React, { useState, useMemo, useEffect } from 'react';
import { StateLaw, Filters, AppState, ViewMode, LawIndex } from './types';
import StateSelector from './components/StateSelector';
import StateDetailView from './components/StateDetailView';
import ComparisonView from './components/ComparisonView';
import Welcome from './components/Welcome';
import BreachAssessmentWizard from './components/Assessment/BreachAssessmentWizard';
import MatrixView from './components/MatrixView';
import ErrorBoundary from './components/ErrorBoundary';
import StateCardGallery from './components/StateCardGallery';
import EnhancedSearchBar from './components/EnhancedSearchBar';
import SelectedStatesBar from './components/SelectedStatesBar';
import QuickCompareSheet from './components/QuickCompareSheet';
import { createLawIndex } from './services/dataIndexService';
import { loadAppState, saveAppState } from './services/stateService';
import { highlightSearchTerm } from './utils/searchHighlight';

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
  const [loadingProgress, setLoadingProgress] = useState<{stage: string, percent: number}>({
    stage: 'Fetching law data...',
    percent: 0
  });
  const [isQuickCompareOpen, setIsQuickCompareOpen] = useState(false);

  // Track what view mode for explorer (gallery, detail, or comparison)
  const [explorerView, setExplorerView] = useState<'gallery' | 'detail' | 'comparison'>('gallery');
  const [detailStateCode, setDetailStateCode] = useState<string | null>(null);

  const [appState, setAppState] = useState<AppState>(() => {
    return loadAppState() || defaultAppState;
  });

  useEffect(() => {
    saveAppState(appState);
  }, [appState]);

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        setLoadingProgress({ stage: 'Fetching law data...', percent: 25 });
        const res = await fetch('laws.json');
        if (!res.ok) {
          throw new Error(`Failed to fetch laws.json: ${res.statusText}`);
        }

        setLoadingProgress({ stage: 'Parsing jurisdictions...', percent: 50 });
        const laws: StateLaw[] = await res.json();

        setLoadingProgress({ stage: 'Building search index...', percent: 75 });
        setAllLaws(laws.sort((a, b) => a.state.localeCompare(b.state)));
        setLawIndex(createLawIndex(laws));

        setLoadingProgress({ stage: 'Ready!', percent: 100 });
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

            snippet = highlightSearchTerm(rawSnippet, appState.searchTerm);
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

  // Auto-open quick compare sheet when 2+ states are selected in gallery view
  useEffect(() => {
    if (explorerView === 'gallery' && selectedLaws.length >= 2) {
      setIsQuickCompareOpen(true);
    } else {
      setIsQuickCompareOpen(false);
    }
  }, [selectedLaws.length, explorerView]);

  const handleViewState = (stateCode: string) => {
    setDetailStateCode(stateCode);
    setExplorerView('detail');
  };

  const handleBackToGallery = () => {
    setExplorerView('gallery');
    setDetailStateCode(null);
  };

  const handleViewComparison = () => {
    if (selectedLaws.length >= 2) {
      setExplorerView('comparison');
      setIsQuickCompareOpen(false);
    }
  };

  const renderExplorerContent = () => {
    if (explorerView === 'detail' && detailStateCode) {
      const law = lawIndex?.byStateCode.get(detailStateCode);
      if (law) {
        return (
          <div className="p-4 md:p-8">
            <button
              onClick={handleBackToGallery}
              className="mb-4 flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Gallery
            </button>
            <StateDetailView law={law} />
          </div>
        );
      }
    }

    if (explorerView === 'comparison' && selectedLaws.length >= 2) {
      return (
        <div className="p-4 md:p-8">
          <button
            onClick={handleBackToGallery}
            className="mb-4 flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Gallery
          </button>
          <ComparisonView laws={selectedLaws} />
        </div>
      );
    }

    // Default: Show gallery
    return (
      <StateCardGallery
        laws={filteredLaws}
        selectedStateCodes={appState.selectedStateCodes}
        onSelectState={handleSelectState}
        onViewState={handleViewState}
      />
    );
  };

  const renderContent = () => {
    if (isLoading || !lawIndex) {
      return (
        <div className="flex flex-col justify-center items-center h-screen-minus-header">
          <div className="w-64">
            <div className="mb-4">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
            <p className="text-center text-text-primary font-semibold mb-2">
              {loadingProgress.stage}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress.percent}%` }}
              />
            </div>
            <p className="text-center text-text-secondary text-sm mt-2">
              {loadingProgress.percent}%
            </p>
          </div>
        </div>
      );
    }
    if (error) {
      return <div className="flex justify-center items-center h-screen-minus-header"><p className="text-red-600">{error}</p></div>;
    }

    switch(appState.viewMode) {
      case 'explorer':
        return (
          <>
            {/* Enhanced Search Bar */}
            <EnhancedSearchBar
              searchTerm={appState.searchTerm}
              onSearchChange={handleSearchChange}
              filters={appState.filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              resultCount={filteredLaws.length}
            />

            {/* Selected States Bar (only show in gallery view when states are selected) */}
            {explorerView === 'gallery' && appState.selectedStateCodes.length > 0 && (
              <SelectedStatesBar
                selectedLaws={selectedLaws}
                onRemoveState={handleSelectState}
                onClearAll={handleClearSelection}
                onViewComparison={handleViewComparison}
              />
            )}

            {/* Main Content */}
            <main className="overflow-y-auto">
              {renderExplorerContent()}
            </main>

            {/* Quick Compare Sheet (only show in gallery view when 2+ states selected) */}
            <QuickCompareSheet
              laws={selectedLaws}
              isOpen={isQuickCompareOpen && explorerView === 'gallery' && selectedLaws.length >= 2}
              onClose={() => setIsQuickCompareOpen(false)}
              onViewFull={handleViewComparison}
            />
          </>
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

      <ErrorBoundary>
        {renderContent()}
      </ErrorBoundary>
    </div>
  );
};

export default App;