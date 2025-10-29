
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
    <div className="bg-accent/10 border border-accent/20 rounded-lg shadow-card">
      <div className="w-full flex justify-between items-center p-4 text-left">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span className="text-lg font-semibold font-display text-accent-hover">Ask AI a Question Across All Jurisdictions</span>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 border-t border-accent/20">
          <div className="mb-4">
            <p className="text-sm text-text-secondary mb-2">Or try one of these comparative questions:</p>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setQuestion(q)}
                  className="px-3 py-1 bg-accent/20 border border-accent/30 text-sm text-accent-hover rounded-full hover:bg-accent/30 transition-colors font-medium"
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
              className="flex-grow p-2 border border-border-light rounded-md focus:ring-2 focus:ring-accent bg-surface-light text-text-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition disabled:bg-accent/50 disabled:cursor-not-allowed"
              disabled={isLoading || !question.trim()}
            >
              {isLoading ? 'Thinking...' : 'Ask All'}
            </button>
          </form>

          {(isLoading || response || error) && (
            <div className="mt-4 p-4 bg-surface-light rounded-md border border-border-light max-h-96 overflow-y-auto">
              {error && <p className="text-red-600">{error}</p>}
              {response && <div className="prose prose-sm max-w-none text-text-secondary" dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }} />}
              {isLoading && !response && (
                 <div className="flex items-center space-x-2 text-text-secondary">
                    <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-accent"></div>
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