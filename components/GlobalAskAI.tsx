
import React, { useState, useRef, useEffect } from 'react';
import { StateLaw } from '../types';
import { getGlobalLawSummaryStream } from '../services/geminiService';

interface GlobalAskAIProps {
  laws: StateLaw[];
}

const GlobalAskAI: React.FC<GlobalAskAIProps> = ({ laws }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const responseEndRef = useRef<HTMLDivElement>(null);
  
  const isApiKeySet = !!process.env.API_KEY;

  useEffect(() => {
    responseEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);
  
  if (!isApiKeySet) {
    return null; // Don't render component if API key is not set
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse('');

    try {
      const stream = await getGlobalLawSummaryStream(laws, question);
      for await (const chunk of stream) {
        setResponse(prev => prev + chunk.text);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const predefinedQuestions = [
    "Which states have a 45-day notification timeline?",
    "Which states include 'passport number' in their definition of Personal Information?",
    "List states that require AG notification for a breach of 500 people or fewer.",
    "Which states have an explicit exemption for HIPAA?",
  ];

  return (
    <div className="bg-brand-light border border-brand-accent/50 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-lg font-semibold font-display text-brand-primary">Ask AI a Question Across All Jurisdictions</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-brand-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-4 border-t border-brand-accent/50">
          <div className="mb-4">
            <p className="text-sm text-text-secondary mb-2">Or try one of these comparative questions:</p>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setQuestion(q)}
                  className="px-3 py-1 bg-white border border-border-color text-sm text-text-primary rounded-full hover:bg-gray-100 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., Which states allow for a risk of harm analysis?"
              className="flex-grow p-2 border border-border-color rounded-md focus:ring-2 focus:ring-brand-accent bg-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-secondary text-white font-semibold rounded-md hover:bg-brand-primary transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading || !question.trim()}
            >
              {isLoading ? 'Thinking...' : 'Ask All'}
            </button>
          </form>

          {(isLoading || response || error) && (
            <div className="mt-4 p-4 bg-white rounded-md border border-border-color max-h-96 overflow-y-auto">
              {error && <p className="text-red-600">{error}</p>}
              {response && <div className="prose prose-sm max-w-none text-text-secondary" dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }} />}
              {isLoading && !response && (
                 <div className="flex items-center space-x-2 text-text-secondary">
                    <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-brand-primary"></div>
                    <span>Synthesizing response from all jurisdictions...</span>
                 </div>
              )}
               <div ref={responseEndRef} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalAskAI;
