import Link from 'next/link';
import { Package, Plus, MessageSquare, TrendingUp } from 'lucide-react';

async function getStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' });
  const products = await res.json();
  
  return {
    totalProducts: products.length,
    categories: new Set(products.map(p => p.category)).size,
    featured: products.filter(p => p.featured).length
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <Package color="var(--accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: '600' }}>Active</span>
          </div>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Products</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: '700' }}>{stats.totalProducts}</p>
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <TrendingUp color="var(--accent)" />
          </div>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Categories</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: '700' }}>{stats.categories}</p>
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <MessageSquare color="var(--accent)" />
          </div>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>WhatsApp Inquiries</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: '700' }}>Live</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Quick Actions</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/admin/products/new" className="btn btn-primary">
              <Plus size={18} /> Add New Product
            </Link>
            <Link href="/admin/products" className="btn btn-outline">
              Manage All Products
            </Link>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Tips</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Keep your product descriptions detailed to increase sales. High-quality images (1000x1000px) perform best.
          </p>
        </div>
      </div>
    </div>
  );
}
