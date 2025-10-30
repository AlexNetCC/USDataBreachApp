import React, { useState } from 'react';
import { copyToClipboard, formatProvisionForCopy } from '../services/exportService';
import { StateLaw } from '../types';

interface CopyableProvisionProps {
  law: StateLaw;
  provisionType: 'timeline' | 'threshold' | 'exemption' | 'enforcement';
  title: string;
  className?: string;
}

const CopyableProvision: React.FC<CopyableProvisionProps> = ({
  law,
  provisionType,
  title,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = async () => {
    if (copied || isLoading) return;

    setIsLoading(true);
    try {
      const formattedText = formatProvisionForCopy(law, provisionType);
      const success = await copyToClipboard(formattedText);

      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } else {
        // Fallback: create temporary textarea
        const textArea = document.createElement('textarea');
        textArea.value = formattedText;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error('Failed to copy provision:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`group relative ${className}`}>
      <button
        onClick={handleCopy}
        disabled={isLoading}
        className="no-print inline-flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 border border-gray-300 hover:border-gray-400"
        title={`Copy ${title} to clipboard`}
      >
        {isLoading ? (
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : copied ? (
          <>
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-600 font-medium">Copied!</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy {title}</span>
          </>
        )}
      </button>

      {/* Tooltip for desktop */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {copied ? 'Copied to clipboard!' : `Click to copy ${title}`}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
          <div className="border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default CopyableProvision;