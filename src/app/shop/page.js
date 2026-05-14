import { Suspense } from 'react';
import ShopClient from './ShopClient';

import { getDbProducts } from '@/lib/db-actions';

async function getProducts() {
  return await getDbProducts();
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
