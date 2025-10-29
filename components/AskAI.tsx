import React, { useState, useRef, useEffect } from 'react';
import { StateLaw } from '../types';
import { getLawSummaryStream } from '../services/geminiService';

interface AskAIProps {
  law: StateLaw;
}

const AskAI: React.FC<AskAIProps> = ({ law }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      const stream = await getLawSummaryStream(law, question);
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
    "What are the penalties for non-compliance?",
    "Summarize the rules for substitute notification.",
    "Does this state have a HIPAA exemption?",
    "What is the timeline for notifying the Attorney General?"
  ];

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span className="text-lg font-semibold font-display text-accent-hover">Ask AI About {law.state}'s Law</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-4 border-t border-accent/20">
          <div className="mb-4">
            <p className="text-sm text-text-secondary mb-2">Or try one of these common questions:</p>
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
              placeholder="Ask a question..."
              className="flex-grow p-2 border border-border-light rounded-md focus:ring-2 focus:ring-accent bg-surface-light text-text-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition disabled:bg-accent/50 disabled:cursor-not-allowed"
              disabled={isLoading || !question.trim()}
            >
              {isLoading ? 'Thinking...' : 'Ask'}
            </button>
          </form>

          {(isLoading || response || error) && (
            <div className="mt-4 p-4 bg-surface-light rounded-md border border-border-light max-h-60 overflow-y-auto">
              {error && <p className="text-red-600">{error}</p>}
              {response && <div className="prose max-w-none text-text-secondary" dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }} />}
              {isLoading && !response && (
                 <div className="flex items-center space-x-2 text-text-secondary">
                    <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-accent"></div>
                    <span>Generating response...</span>
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

export default AskAI;