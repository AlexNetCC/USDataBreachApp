import React from 'react';

interface WizardStepProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onNext: () => void;
  isNextDisabled?: boolean;
  nextButtonText?: string;
  leftFooterContent?: React.ReactNode;
}

const WizardStep: React.FC<WizardStepProps> = ({
  title,
  subtitle,
  children,
  onNext,
  isNextDisabled = false,
  nextButtonText = 'Next',
  leftFooterContent,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-surface-light p-8 rounded-lg shadow-lg border border-border-light">
      <h2 className="text-3xl font-bold font-display text-text-primary mb-2">{title}</h2>
      <p className="text-lg text-text-secondary mb-6">{subtitle}</p>

      {children}

      <div className="mt-8 pt-6 border-t border-border-light flex justify-between items-center">
        <div>
          {leftFooterContent || <div />}
        </div>
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="px-6 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition disabled:bg-accent/50 disabled:cursor-not-allowed"
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
};

export default WizardStep;