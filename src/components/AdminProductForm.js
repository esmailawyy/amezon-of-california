"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminProductForm.module.css';

export default function AdminProductForm({ initialData = null, isEditing = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    price: '',
    originalPrice: '',
    category: 'tshirts',
    image: '',
    badge: '',
    featured: false,
    trending: false,
    inStock: true,
    colors: '',
    sizes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert comma-separated strings to arrays
    const submissionData = {
      ...formData,
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      colors: typeof formData.colors === 'string' ? formData.colors.split(',').map(s => s.trim()) : formData.colors,
      sizes: typeof formData.sizes === 'string' ? formData.sizes.split(',').map(s => s.trim()) : formData.sizes,
    };

    try {
      const url = isEditing ? `/api/products/${initialData._id}` : '/api/products';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        alert(isEditing ? 'Product updated!' : 'Product added!');
        router.push('/admin/products');
        router.refresh();
      } else {
        alert('Something went wrong. Check console.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <div className={styles.inputGroup}>
          <label>Product Title</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        
        <div className={styles.inputGroup}>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="tshirts">T-Shirts</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="hoodies">Hoodies</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Price ($)</label>
          <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className={styles.inputGroup}>
          <label>Original Price (for Sale, Optional)</label>
          <input type="number" step="0.01" name="originalPrice" value={formData.originalPrice} onChange={handleChange} />
        </div>

        <div className={styles.inputGroup} style={{ gridColumn: 'span 2' }}>
          <label>Main Image URL</label>
          <input name="image" value={formData.image} onChange={handleChange} required placeholder="https://..." />
        </div>

        <div className={styles.inputGroup} style={{ gridColumn: 'span 2' }}>
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />
        </div>

        <div className={styles.inputGroup}>
          <label>Colors (Comma separated)</label>
          <input name="colors" value={formData.colors} onChange={handleChange} placeholder="Black, White, Navy" />
        </div>

        <div className={styles.inputGroup}>
          <label>Sizes (Comma separated)</label>
          <input name="sizes" value={formData.sizes} onChange={handleChange} placeholder="S, M, L, XL" />
        </div>

        <div className={styles.inputGroup}>
          <label>Badge (Optional)</label>
          <input name="badge" value={formData.badge} onChange={handleChange} placeholder="NEW, SALE, LIMITED" />
        </div>

        <div className={styles.checkboxGroup}>
          <label><input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} /> Featured</label>
          <label><input type="checkbox" name="trending" checked={formData.trending} onChange={handleChange} /> Trending</label>
          <label><input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} /> In Stock</label>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className="btn btn-outline" onClick={() => router.back()}>Cancel</button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : isEditing ? 'Update Product' : 'Create Product'}
        </button>
      </div>
    </form>
  );
}
