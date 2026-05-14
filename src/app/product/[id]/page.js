import ProductClient from './ProductClient';

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
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
