'use client';
/**
 * Minimal error boundary wrapper (client component).
 * Safe to delete or ignore. Not required for production use.
 */
import { useEffect, useState, ReactNode } from 'react';

function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div style={{ padding: 32, color: 'red' }}>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <p>Please check your environment variables and server logs.</p>
    </div>
  );
}

export default function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.error || new Error('Unknown error'));
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  if (error) return <ErrorBoundary error={error} />;
  return <>{children}</>;
} 