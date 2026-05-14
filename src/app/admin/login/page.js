"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'mamdoh2026') {
      // Set a simple cookie (valid for 7 days)
      document.cookie = "admin_session=true; path=/; max-age=604800";
      router.push('/admin');
      router.refresh();
    } else {
      setError('Wrong password. Please try again.');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Admin Access</h1>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
              placeholder="Enter password"
            />
          </div>

          {error && <p style={{ color: 'var(--error)', fontSize: '0.9rem' }}>{error}</p>}

          <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
