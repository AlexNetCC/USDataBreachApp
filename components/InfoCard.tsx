import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, defaultOpen = false }) => {
  return (
    <details open={defaultOpen} className="bg-surface-light rounded-xl shadow-card border-l-4 border-l-accent border-y border-r border-border-light overflow-hidden group hover:shadow-elevated transition-shadow duration-300">
      <summary
        className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer list-none transition-all duration-250"
      >
        <h2 className="text-xl font-bold font-display text-text-primary">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-accent transition-transform duration-300 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="p-6 border-t-2 border-border-light bg-white">
          {children}
      </div>
    </details>
  );
};

export default InfoCard;
