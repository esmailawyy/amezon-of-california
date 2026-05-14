"use client";

import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist } = useCart();

  return (
    <div className="container" style={{ padding: '3rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Your Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
          <h2 style={{ marginBottom: '1rem' }}>Your wishlist is empty</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Save items you love to your wishlist to review them later.</p>
          <Link href="/shop" className="btn btn-primary">Discover Products</Link>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {wishlist.map(product => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
