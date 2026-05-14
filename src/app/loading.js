"use client";

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      gap: '1rem'
    }}>
      <div className="spinner"></div>
      <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Amezon of California...</p>
      
      <style jsx>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
