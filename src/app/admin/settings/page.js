"use client";

import { useState, useEffect } from 'react';
import { Save, RefreshCw } from 'lucide-react';

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    storeName: '',
    contactEmail: '',
    phone: '',
    address: '',
    whatsapp: '',
    currency: 'USD',
    maintenanceMode: false
  });

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading settings:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        alert('Settings updated successfully!');
      } else {
        const errorData = await res.json();
        console.error('Update failed:', errorData);
        alert('Update failed. Check console.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Error updating settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading settings...</div>;

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>Store Settings</h1>

      <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--card-bg)', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="storeName" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Store Name</label>
            <input 
              id="storeName"
              name="storeName" 
              value={settings.storeName} 
              onChange={handleChange}
              style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="contactEmail" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Contact Email</label>
            <input 
              id="contactEmail"
              name="contactEmail" 
              value={settings.contactEmail} 
              onChange={handleChange}
              style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="whatsapp" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>WhatsApp Number (Digits only)</label>
            <input 
              id="whatsapp"
              name="whatsapp" 
              value={settings.whatsapp} 
              onChange={handleChange}
              placeholder="19093728995"
              style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="phone" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Display Phone</label>
            <input 
              id="phone"
              name="phone" 
              value={settings.phone} 
              onChange={handleChange}
              style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
            <label htmlFor="address" style={{ fontWeight: '600', color: 'var(--text-muted)' }}>Store Address</label>
            <input 
              id="address"
              name="address" 
              value={settings.address} 
              onChange={handleChange}
              style={{ padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <input 
              type="checkbox" 
              name="maintenanceMode" 
              checked={settings.maintenanceMode} 
              onChange={handleChange} 
              id="m-mode"
            />
            <label htmlFor="m-mode" style={{ fontWeight: '600', cursor: 'pointer' }}>Maintenance Mode</label>
          </div>
        </div>

        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn btn-primary" disabled={saving} style={{ gap: '0.75rem' }}>
            {saving ? <RefreshCw size={20} className="spin" /> : <Save size={20} />}
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  );
}
