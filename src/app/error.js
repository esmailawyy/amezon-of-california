'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container" style={{ textAlign: 'center', padding: '8rem 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Something went wrong!</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
        We encountered an unexpected error. Please try refreshing the page.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button className="btn btn-primary" onClick={() => reset()}>
          Try again
        </button>
        <button className="btn btn-outline" onClick={() => window.location.href = '/'}>
          Go Home
        </button>
      </div>
    </div>
  );
}
