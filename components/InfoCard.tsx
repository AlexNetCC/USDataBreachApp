import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, defaultOpen = false }) => {
  return (
    <details open={defaultOpen} className="bg-surface-light rounded-lg shadow-subtle border border-border-light overflow-hidden group">
      <summary
        className="w-full flex justify-between items-center p-4 bg-surface-light hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer list-none"
      >
        <h2 className="text-lg font-semibold font-display text-text-primary">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="p-4 border-t border-border-light">
          {children}
      </div>
    </details>
  );
};

export default InfoCard;