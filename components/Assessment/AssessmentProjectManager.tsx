import React, { useState } from 'react';
import { SavedAssessment } from '../../types';
import { formatRelativeTime } from '../../utils/dateFormat';

interface AssessmentProjectManagerProps {
  assessments: SavedAssessment[];
  onNew: (name: string) => void;
  onLoad: (id: string) => void;
  onDelete: (id: string) => void;
}

const AssessmentProjectManager: React.FC<AssessmentProjectManagerProps> = ({ assessments, onNew, onLoad, onDelete }) => {
  const [newAssessmentName, setNewAssessmentName] = useState('');

  const handleNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAssessmentName.trim()) {
      onNew(newAssessmentName.trim());
      setNewAssessmentName('');
    }
  };

  const sortedAssessments = [...assessments].sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-surface-light p-8 rounded-lg shadow-lg border border-border-light mb-8">
        <h2 className="text-3xl font-bold font-display text-text-primary mb-2">Create New Breach Assessment</h2>
        <p className="text-text-secondary mb-4">Start a new assessment by giving it a name. Your progress will be saved automatically.</p>
        <form onSubmit={handleNewSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={newAssessmentName}
            onChange={(e) => setNewAssessmentName(e.target.value)}
            placeholder="e.g., Q3 Incident, Project Alpha"
            className="flex-grow p-3 border border-border-light rounded-md focus:ring-2 focus:ring-accent bg-surface-light text-text-primary"
            aria-label="New assessment name"
          />
          <button
            type="submit"
            disabled={!newAssessmentName.trim()}
            className="px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition disabled:bg-accent/50 disabled:cursor-not-allowed"
          >
            Start New
          </button>
        </form>
      </div>

      <div className="bg-surface-light p-8 rounded-lg shadow-lg border border-border-light">
        <h2 className="text-3xl font-bold font-display text-text-primary mb-4">Saved Assessments</h2>
        {sortedAssessments.length === 0 ? (
          <p className="text-text-secondary text-center py-8">You have no saved assessments. Start a new one above to begin.</p>
        ) : (
          <ul className="space-y-3">
            {sortedAssessments.map(assessment => (
              <li key={assessment.id} className="p-4 border border-border-light rounded-md flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                  <p className="font-semibold text-text-primary">{assessment.name}</p>
                  <p className="text-sm text-text-secondary">
                    Last modified: {formatRelativeTime(assessment.lastModified)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onLoad(assessment.id)}
                    className="px-4 py-1.5 bg-gray-600 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => onDelete(assessment.id)}
                    className="px-4 py-1.5 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition"
                    aria-label={`Delete ${assessment.name}`}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AssessmentProjectManager;