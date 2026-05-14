import AdminProductsClient from './AdminProductsClient';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <AdminProductsClient initialProducts={products} />
    </div>
  );
}
