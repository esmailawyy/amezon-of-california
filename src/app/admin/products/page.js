import AdminProductsClient from './AdminProductsClient';
import { getDbProducts } from '@/lib/db-actions';

export default async function AdminProductsPage() {
  const products = await getDbProducts();

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <AdminProductsClient initialProducts={products} />
    </div>
  );
}
