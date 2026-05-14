import { Suspense } from 'react';
import ShopClient from './ShopClient';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export const metadata = {
  title: 'Shop | Amezon of California',
};

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <Suspense fallback={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading products...</div>}>
      <ShopClient products={products} />
    </Suspense>
  );
}
