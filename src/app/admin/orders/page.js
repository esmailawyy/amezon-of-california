import { ShoppingBag, MessageCircle, CheckCircle } from 'lucide-react';

export default function AdminOrdersPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>Orders Management</h1>
      
      <div style={{ backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem', display: 'inline-flex', padding: '1.5rem', backgroundColor: 'rgba(230, 119, 46, 0.1)', borderRadius: '50%' }}>
          <ShoppingBag size={48} color="var(--accent)" />
        </div>
        
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Your Orders go directly to WhatsApp</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          Currently, "Amezon of California" uses a <strong>Direct-to-WhatsApp</strong> checkout system. This means when a customer places an order, you receive a detailed message on your WhatsApp with the product details, size, and color.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
          <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            <MessageCircle size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>1. Receive Order</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Customer clicks checkout and sends you a message on +1 (909) 372-8995.</p>
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            <CheckCircle size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>2. Confirm Details</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Discuss payment and shipping details directly with the customer on WhatsApp.</p>
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            <ShoppingBag size={24} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>3. Fulfill Order</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Once payment is confirmed, ship the items and update your customer.</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--background)', borderRadius: 'var(--radius)' }}>
          <p style={{ fontSize: '0.9rem' }}>
            <strong>Need a database for orders?</strong> In the next version, we can integrate a checkout system that saves orders here before sending to WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
