import React, { useState } from 'react';
import { StateLaw } from '../types';
import ExportControls from './ExportControls';

interface MultiStateExportSelectorProps {
  laws: StateLaw[];
  onExport: (selectedStates: string[]) => void;
}

const MultiStateExportSelector: React.FC<MultiStateExportSelectorProps> = ({ laws, onExport }) => {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const allStateCodes = laws.map(law => law.stateCode).sort();

  const handleStateToggle = (stateCode: string) => {
    setSelectedStates(prev => {
      const newSelection = prev.includes(stateCode)
        ? prev.filter(code => code !== stateCode)
        : [...prev, stateCode];

      // Update select all checkbox
      setSelectAll(newSelection.length === allStateCodes.length);

      return newSelection;
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedStates([]);
      setSelectAll(false);
    } else {
      setSelectedStates(allStateCodes);
      setSelectAll(true);
    }
  };

  const handleQuickSelect = (region: string) => {
    const stateGroups: { [key: string]: string[] } = {
      'california': ['CA'],
      'northeast': ['CT', 'ME', 'MA', 'NH', 'RI', 'VT', 'NJ', 'NY', 'PA'],
      'southeast': ['AL', 'AR', 'FL', 'GA', 'KY', 'LA', 'MS', 'NC', 'SC', 'TN', 'VA', 'WV'],
      'midwest': ['IL', 'IN', 'IA', 'KS', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'],
      'southwest': ['AZ', 'NM', 'OK', 'TX'],
      'west': ['AK', 'CA', 'CO', 'HI', 'ID', 'MT', 'NV', 'OR', 'UT', 'WA', 'WY'],
      'territories': ['DC', 'PR', 'VI', 'GU', 'AS', 'MP']
    };

    const states = stateGroups[region.toLowerCase()] || [];
    setSelectedStates(states);
    setSelectAll(states.length === allStateCodes.length);
  };

  const getStateName = (stateCode: string): string => {
    const law = laws.find(l => l.stateCode === stateCode);
    return law ? law.state : stateCode;
  };

  const exportReady = selectedStates.length >= 2 && selectedStates.length <= 10;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-State Analysis Export</h3>
        <p className="text-gray-600">
          Select 2-10 jurisdictions to generate a comprehensive comparative analysis report.
        </p>
      </div>

      {/* Quick Selection Buttons */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Selection</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleQuickSelect('california')}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
          >
            California
          </button>
          <button
            onClick={() => handleQuickSelect('northeast')}
            className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
          >
            Northeast
          </button>
          <button
            onClick={() => handleQuickSelect('southeast')}
            className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition-colors"
          >
            Southeast
          </button>
          <button
            onClick={() => handleQuickSelect('midwest')}
            className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
          >
            Midwest
          </button>
          <button
            onClick={() => handleQuickSelect('southwest')}
            className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors"
          >
            Southwest
          </button>
          <button
            onClick={() => handleQuickSelect('west')}
            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors"
          >
            West
          </button>
        </div>
      </div>

      {/* State Selection Grid */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-gray-700">Select Jurisdictions</h4>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Select All ({allStateCodes.length})</span>
            </label>
            <span className="text-sm text-gray-500">
              {selectedStates.length} selected
            </span>
          </div>
        </div>

        <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {allStateCodes.map(stateCode => (
              <label
                key={stateCode}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                  selectedStates.includes(stateCode)
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedStates.includes(stateCode)}
                  onChange={() => handleStateToggle(stateCode)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm">{getStateName(stateCode)} ({stateCode})</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Selection Status and Export */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            {selectedStates.length === 0 ? (
              <p className="text-sm text-gray-500">Select jurisdictions to enable export</p>
            ) : selectedStates.length < 2 ? (
              <p className="text-sm text-yellow-600">Select at least 2 jurisdictions for comparison</p>
            ) : selectedStates.length > 10 ? (
              <p className="text-sm text-yellow-600">Maximum 10 jurisdictions allowed for export</p>
            ) : (
              <p className="text-sm text-green-600">
                Ready to export {selectedStates.length} jurisdictions: {selectedStates.map(code => getStateName(code)).join(', ')}
              </p>
            )}
          </div>

          <ExportControls
            type="comparison"
            laws={laws}
            selectedStates={exportReady ? selectedStates : undefined}
            className="no-print"
          />
        </div>

        {/* Selected States Preview */}
        {selectedStates.length > 0 && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <h5 className="text-xs font-medium text-gray-700 mb-2">Selected Jurisdictions:</h5>
            <div className="flex flex-wrap gap-1">
              {selectedStates.map(stateCode => (
                <span
                  key={stateCode}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                >
                  {getStateName(stateCode)} ({stateCode})
                  <button
                    onClick={() => handleStateToggle(stateCode)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStateExportSelector;