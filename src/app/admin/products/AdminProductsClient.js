"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminProductsClient({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProducts(prev => prev.filter(p => (p._id || p.id) !== id));
      } else {
        alert('Failed to delete product');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting product');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Products Management</h1>
        <Link href="/admin/products/new" className="btn btn-primary">
          <Plus size={20} /> Add New Product
        </Link>
      </div>
      
      <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Image</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Title</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Category</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Price</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id || product.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <img src={product.image} alt={product.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                </td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: '500' }}>{product.title}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{product.category}</td>
                <td style={{ padding: '1rem 1.5rem' }}>${(product.price || 0).toFixed(2)}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <Link href={`/admin/products/edit/${product._id || product.id}`} className="btn btn-outline" style={{ padding: '0.5rem' }}>
                      <Edit size={16} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(product._id || product.id)}
                      className="btn btn-outline" 
                      style={{ padding: '0.5rem', color: 'var(--error)', borderColor: 'var(--error)' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
