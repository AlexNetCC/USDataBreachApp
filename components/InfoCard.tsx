import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, defaultOpen = false }) => {
  return (
    <details open={defaultOpen} className="bg-white rounded-lg shadow-sm border border-border-color overflow-hidden group">
      <summary
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent cursor-pointer list-none"
      >
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
          {children}
      </div>
    </details>
  );
};

export default InfoCard;