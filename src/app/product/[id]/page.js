import ProductClient from './ProductClient';

import { getDbProductById } from '@/lib/db-actions';

async function getProduct(id) {
  return await getDbProductById(id);
}

export const metadata = {
  title: 'Product Details | Amezon of California',
};

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  
  if (!product) {
    return <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>Product not found</div>;
  }

  return <ProductClient product={product} />;
}
