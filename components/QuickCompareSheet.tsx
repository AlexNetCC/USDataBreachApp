import React from 'react';
import { StateLaw } from '../types';

interface QuickCompareSheetProps {
  laws: StateLaw[];
  isOpen: boolean;
  onClose: () => void;
  onViewFull: () => void;
}

const QuickCompareSheet: React.FC<QuickCompareSheetProps> = ({
  laws,
  isOpen,
  onClose,
  onViewFull
}) => {
  if (!isOpen || laws.length < 2) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-border-light shadow-2xl animate-slide-up rounded-t-2xl">
        {/* Drag Handle */}
        <div className="flex justify-center pt-2 pb-1 cursor-pointer" onClick={onClose}>
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 pb-4">
          {/* Compact Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold font-display text-text-primary">
              Quick Comparison ({laws.length} states)
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={onViewFull}
                className="px-3 py-1.5 bg-accent text-white font-semibold text-sm rounded-lg hover:bg-accent-hover transition"
              >
                Full Comparison
              </button>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Compact Comparison Table */}
          <div className="overflow-x-auto max-h-48">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-text-primary border-b border-border-light">
                    Metric
                  </th>
                  {laws.map(law => (
                    <th
                      key={law.stateCode}
                      className="px-3 py-2 text-left font-semibold text-text-primary border-b border-border-light min-w-[100px]"
                    >
                      {law.state}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-text-secondary">Timeline</td>
                  {laws.map(law => (
                    <td key={law.stateCode} className="px-3 py-2 font-semibold text-text-primary">
                      {law.individualNotificationTimelineDays > 0
                        ? `${law.individualNotificationTimelineDays} days`
                        : 'ASAP'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-text-secondary">AG Threshold</td>
                  {laws.map(law => (
                    <td key={law.stateCode} className="px-3 py-2 text-text-primary">
                      {law.agNotificationThreshold?.toLocaleString() || 'N/A'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-text-secondary">CRA Threshold</td>
                  {laws.map(law => (
                    <td key={law.stateCode} className="px-3 py-2 text-text-primary">
                      {law.craNotificationThreshold?.toLocaleString() || 'N/A'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-text-secondary">Private Action</td>
                  {laws.map(law => (
                    <td key={law.stateCode} className="px-3 py-2">
                      {law.enforcementPrivateRightOfAction ? (
                        <span className="text-green-600 font-medium">✓ Yes</span>
                      ) : (
                        <span className="text-gray-400">✗ No</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-text-secondary">Risk of Harm</td>
                  {laws.map(law => (
                    <td key={law.stateCode} className="px-3 py-2">
                      {law.riskOfHarmAnalysisCanEliminateNotification ? (
                        <span className="text-green-600 font-medium">✓ Allowed</span>
                      ) : (
                        <span className="text-gray-400">✗ No</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-text-secondary">Encryption Safe Harbor</td>
                  {laws.map(law => (
                    <td key={law.stateCode} className="px-3 py-2">
                      {law.exemptionEncryptionSafeHarbor ? (
                        <span className="text-green-600 font-medium">✓ Yes</span>
                      ) : (
                        <span className="text-gray-400">✗ No</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickCompareSheet;
