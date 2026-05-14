import AdminProductForm from '@/components/AdminProductForm';

export default function NewProductPage() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Add New Product</h1>
        <p style={{ color: 'var(--text-muted)' }}>Fill in the details below to add a new product to your catalog.</p>
      </div>
      
      <AdminProductForm />
    </div>
  );
}
