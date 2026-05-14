import AdminProductForm from '@/components/AdminProductForm';

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function EditProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Pre-fill colors and sizes as comma-separated strings for the form
  const initialData = {
    ...product,
    colors: Array.isArray(product.colors) ? product.colors.join(', ') : product.colors,
    sizes: Array.isArray(product.sizes) ? product.sizes.join(', ') : product.sizes,
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Edit Product</h1>
        <p style={{ color: 'var(--text-muted)' }}>Updating: {product.title}</p>
      </div>
      
      <AdminProductForm initialData={initialData} isEditing={true} />
    </div>
  );
}
