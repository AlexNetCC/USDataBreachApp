import React, { useState } from 'react';
import {
  downloadAsPDF,
  downloadAsFile,
  generateAssessmentReport,
  generateMultiStateComparisonReport,
  FirmBranding,
  ExportOptions,
  AssessmentReportData
} from '../services/exportService';

interface ExportControlsProps {
  type: 'assessment' | 'comparison';
  data?: AssessmentReportData;
  laws?: any[]; // StateLaw[]
  selectedStates?: string[];
  className?: string;
}

interface ExportMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: (format: 'pdf' | 'html', options: ExportOptions) => void;
  type: 'assessment' | 'comparison';
}

const ExportMenu: React.FC<ExportMenuProps> = ({ isOpen, onClose, onExport, type }) => {
  const [branding, setBranding] = useState<FirmBranding>({
    firmName: '',
    attorneyName: '',
    address: '',
    phone: '',
    email: ''
  });
  const [options, setOptions] = useState<ExportOptions>({
    includeBranding: false,
    includeConfidentialHeader: true,
    includeTimestamp: true,
    format: 'pdf'
  });

  const handleExport = (format: 'pdf' | 'html') => {
    onExport(format, { ...options, format });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Export {type === 'assessment' ? 'Assessment Report' : 'Comparison Analysis'}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Export Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
            <div className="flex gap-3">
              <button
                onClick={() => handleExport('pdf')}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                PDF Report
              </button>
              <button
                onClick={() => handleExport('html')}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                HTML File
              </button>
            </div>
          </div>

          {/* Branding Options */}
          <div className="border-t pt-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={options.includeBranding}
                onChange={(e) => setOptions(prev => ({ ...prev, includeBranding: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="font-medium text-gray-700">Include firm branding</span>
            </label>

            {options.includeBranding && (
              <div className="mt-3 space-y-3 pl-6">
                <input
                  type="text"
                  placeholder="Firm Name"
                  value={branding.firmName}
                  onChange={(e) => setBranding(prev => ({ ...prev, firmName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Attorney Name"
                  value={branding.attorneyName}
                  onChange={(e) => setBranding(prev => ({ ...prev, attorneyName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={branding.address}
                  onChange={(e) => setBranding(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={branding.phone}
                    onChange={(e) => setBranding(prev => ({ ...prev, phone: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={branding.email}
                    onChange={(e) => setBranding(prev => ({ ...prev, email: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Additional Options */}
          <div className="space-y-2 border-t pt-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={options.includeConfidentialHeader}
                onChange={(e) => setOptions(prev => ({ ...prev, includeConfidentialHeader: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="font-medium text-gray-700">Include "Confidential" header</span>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={options.includeTimestamp}
                onChange={(e) => setOptions(prev => ({ ...prev, includeTimestamp: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="font-medium text-gray-700">Include date/timestamp</span>
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ExportControls: React.FC<ExportControlsProps> = ({
  type,
  data,
  laws,
  selectedStates,
  className = ''
}) => {
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: 'pdf' | 'html', options: ExportOptions) => {
    if (!data && !laws) return;

    setIsExporting(true);
    try {
      let htmlContent: string;
      let filename: string;

      if (type === 'assessment' && data) {
        const branding = options.includeBranding ? {
          firmName: 'Law Firm Name', // These would come from the form
          attorneyName: 'Attorney Name',
          address: '123 Main Street, Suite 100, City, State 12345',
          phone: '(555) 123-4567',
          email: 'attorney@lawfirm.com'
        } : undefined;

        htmlContent = generateAssessmentReport(data, branding, options);
        filename = `data-breach-assessment-${new Date().toISOString().split('T')[0]}`;
      } else if (type === 'comparison' && laws && selectedStates) {
        const branding = options.includeBranding ? {
          firmName: 'Law Firm Name',
          attorneyName: 'Attorney Name',
          address: '123 Main Street, Suite 100, City, State 12345',
          phone: '(555) 123-4567',
          email: 'attorney@lawfirm.com'
        } : undefined;

        htmlContent = generateMultiStateComparisonReport(laws, selectedStates, branding, options);
        filename = `multi-state-comparison-${new Date().toISOString().split('T')[0]}`;
      } else {
        throw new Error('Invalid export configuration');
      }

      if (format === 'pdf') {
        downloadAsPDF(htmlContent, `${filename}.pdf`);
      } else {
        downloadAsFile(htmlContent, `${filename}.html`, 'text/html');
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  if (type === 'assessment' && !data) return null;
  if (type === 'comparison' && (!laws || !selectedStates)) return null;

  return (
    <>
      <div className={`flex items-center gap-2 ${className}`}>
        <button
          onClick={() => setShowExportMenu(true)}
          disabled={isExporting}
          className="no-print px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-250 flex items-center gap-2"
        >
          {isExporting ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Exporting...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Report
            </>
          )}
        </button>
      </div>

      <ExportMenu
        isOpen={showExportMenu}
        onClose={() => setShowExportMenu(false)}
        onExport={handleExport}
        type={type}
      />
    </>
  );
};

export default ExportControls;