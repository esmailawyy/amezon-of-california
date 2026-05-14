"use client";

import { useCart } from '@/context/CartContext';

export default function ContactPage() {
  const { showToast, settings } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Message sent! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-1px' }}>Contact Us</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Have a question or need assistance with your order? Reach out to us.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label htmlFor="fullName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</label>
          <input 
            id="fullName"
            name="fullName"
            type="text" 
            required
            style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--card-bg)', color: 'var(--foreground)', outline: 'none' }}
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Address</label>
          <input 
            id="email"
            name="email"
            type="email" 
            required
            style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--card-bg)', color: 'var(--foreground)', outline: 'none' }}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Message</label>
          <textarea 
            id="message"
            name="message"
            rows="5"
            required
            style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--card-bg)', color: 'var(--foreground)', resize: 'vertical', outline: 'none' }}
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', fontSize: '1rem' }}>
          Send Message
        </button>
      </form>

      <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Other ways to reach us</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)' }}><strong>Address:</strong> {settings?.address || '8255 Vineyard Ave, Rancho Cucamonga, CA 91730, USA'}</p>
          <p style={{ color: 'var(--text-muted)' }}><strong>WhatsApp/Phone:</strong> {settings?.phone || '+1 (909) 372-8995'}</p>
          <p style={{ color: 'var(--text-muted)' }}><strong>Email:</strong> {settings?.contactEmail || 'aamezonofcalifornian@gmail.com'}</p>
        </div>
      </div>
    </div>
  );
}
