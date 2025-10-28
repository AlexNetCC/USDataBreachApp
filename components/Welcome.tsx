
import React from 'react';
import { StateLaw } from '../types';
import GlobalAskAI from './GlobalAskAI';

interface WelcomeProps {
  laws: StateLaw[];
}

const Welcome: React.FC<WelcomeProps> = ({ laws }) => {
  return (
    <div className="flex flex-col items-center justify-start pt-10 h-full space-y-8">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-border-color max-w-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-1.096.906-2.457.906-3.885a4.5 4.5 0 00-4.5-4.5V7.5a6 6 0 11-12 0v4.5a4.5 4.5 0 004.5 4.5c.356 0 .703-.04 1.032-.12a1.307 1.307 0 00-1.217 1.811l1.834 1.834a1.307 1.307 0 001.811-1.217c.162.375.36.72.596 1.032.356-1.036.04-2.422-.96-3.422z" />
        </svg>
        <h2 className="mt-4 text-2xl font-bold font-display text-text-primary">Welcome to the Data Breach Law Navigator</h2>
        <p className="mt-2 text-md text-text-secondary">
          Select states to compare, or use the AI assistant below to ask questions across all jurisdictions.
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <GlobalAskAI laws={laws} />
      </div>
    </div>
  );
};

export default Welcome;
