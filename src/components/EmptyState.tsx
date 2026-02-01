import React from 'react';
import { FolderOpen, GitBranch } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    href: string;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon,
  action 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center animate-in fade-in zoom-in-95 duration-700">
      {/* Icon */}
      <div className="mb-6 p-6 rounded-2xl bg-text-primary/5 border border-text-primary/10">
        {icon || <FolderOpen size={48} className="text-text-muted" />}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-text-secondary max-w-md mb-6">
        {description}
      </p>
      
      {/* Optional Action */}
      {action && (
        <a
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-primary shadow-lg shadow-primary/20
                     hover:opacity-90 hover:shadow-primary/30 hover:scale-[1.02]
                     transition-all duration-300 font-semibold no-underline"
          style={{ color: 'var(--color-on-primary)' }}
        >
          <GitBranch size={18} />
          {action.label}
        </a>
      )}
    </div>
  );
};

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  title = 'Oops! Algo salió mal',
  message,
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center animate-in fade-in zoom-in-95 duration-700">
      {/* Error Icon */}
      <div className="mb-6 p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
        <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {title}
      </h3>
      
      {/* Message */}
      <p className="text-text-secondary max-w-md mb-6">
        {message}
      </p>
      
      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-primary shadow-lg shadow-primary/20
                     hover:opacity-90 hover:shadow-primary/30 hover:scale-[1.02]
                     transition-all duration-300 font-semibold"
          style={{ color: 'var(--color-on-primary)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reintentar
        </button>
      )}
    </div>
  );
};
