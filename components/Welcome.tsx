
import React from 'react';
import { StateLaw } from '../types';
import GlobalAskAI from './GlobalAskAI';

interface WelcomeProps {
  laws: StateLaw[];
}

const WelcomeCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-surface-light p-8 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 text-left border border-border-light group hover:-translate-y-1">
    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-display text-text-primary mb-3">{title}</h3>
    <p className="text-text-secondary leading-relaxed text-base">{description}</p>
  </div>
);

const Welcome: React.FC<WelcomeProps> = ({ laws }) => {
  return (
    <div className="animate-fade-in text-center max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="py-16">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            {laws.length} U.S. Jurisdictions
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold font-display text-text-primary leading-tight mb-6">
          Navigate Breach Laws<br />with Confidence
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light">
          Your comprehensive resource for analyzing, comparing, and understanding U.S. data breach notification laws. Get started below or use our AI assistant.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <WelcomeCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          title="Explore a Single State"
          description="Select a jurisdiction from the list on the left to dive deep into its specific statutes, timelines, and requirements."
        />
        <WelcomeCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
          title="Compare Jurisdictions"
          description="Choose two or more states to generate an instant, side-by-side comparison of key legal provisions."
        />
        <WelcomeCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
          title="Use the AI Assistant"
          description="Ask complex comparative questions across all 50+ jurisdictions using the powerful AI assistant below."
        />
      </div>

      {/* AI Assistant Section */}
      <div className="w-full max-w-5xl mx-auto mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-display text-text-primary mb-3">
            AI-Powered Legal Analysis
          </h2>
          <p className="text-text-secondary text-lg">
            Ask complex questions across all jurisdictions and get instant, comprehensive answers
          </p>
        </div>
        <GlobalAskAI laws={laws} />
      </div>
    </div>
  );
};

export default Welcome;
