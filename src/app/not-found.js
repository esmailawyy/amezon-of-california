import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '8rem 2rem' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
        Back to Home
      </Link>
    </div>
  );
}
