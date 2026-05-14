"use client";

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/products';
import { Filter, X, ChevronDown, Search } from 'lucide-react';
import styles from './Shop.module.css';

export default function ShopClient({ products }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get('search');
  const categoryParam = searchParams.get('category');

  // Compute max price dynamically from products so no product is hidden by default
  const maxProductPrice = products?.length > 0
    ? Math.ceil(Math.max(...products.map(p => p.price)) / 50) * 50
    : 500;

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState(maxProductPrice);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [localSearch, setLocalSearch] = useState(search || '');

  // Sync state with URL params when they change (e.g., navigating from home page category links)
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  useEffect(() => {
    setLocalSearch(search || '');
  }, [search]);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Search
    if (search) {
      const query = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Price
    result = result.filter(p => p.price <= priceRange);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = [...result].filter(p => p.badge === 'NEW').concat(result.filter(p => p.badge !== 'NEW'));
        break;
      case 'featured':
      default:
        break;
    }

    return result;
  }, [products, selectedCategory, priceRange, sortBy, search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (localSearch.trim()) {
      params.set('search', localSearch.trim());
    } else {
      params.delete('search');
    }
    router.push(`/shop?${params.toString()}`);
  };

  const handleClearSearch = () => {
    setLocalSearch('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.push(`/shop?${params.toString()}`);
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const params = new URLSearchParams(searchParams.toString());
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    router.push(`/shop?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange(maxProductPrice);
    setLocalSearch('');
    router.push('/shop');
  };

  return (
    <div className={`container ${styles.shopPage}`}>
      <div className={styles.shopHeader}>
        <div>
          <h1 className={styles.title}>The Collection</h1>
          <p className={styles.subtitle}>Showing {filteredProducts.length} products</p>
        </div>

        <div className={styles.headerActions}>
          {/* Search Bar on Shop Page */}
          <form onSubmit={handleSearchSubmit} className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search products..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className={styles.searchInput}
            />
            {localSearch && (
              <button type="button" onClick={handleClearSearch} className={styles.searchClear}>
                <X size={16} />
              </button>
            )}
          </form>

          <button
            className={`btn btn-outline ${styles.filterToggle}`}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} /> Filters
          </button>

          <div className={styles.sortSelect}>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>
      </div>

      {/* Active search indicator */}
      {search && (
        <div className={styles.activeSearch}>
          <span>Searching for: <strong>&ldquo;{search}&rdquo;</strong></span>
          <button onClick={handleClearSearch} className={styles.clearSearchBtn}>
            <X size={16} /> Clear Search
          </button>
        </div>
      )}

      <div className={styles.shopLayout}>
        {/* Sidebar Filters */}
        <aside className={`${styles.sidebar} ${isFilterOpen ? styles.open : ''}`}>
          <div className={styles.filterHeaderMobile}>
            <h3>Filters</h3>
            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Categories</h3>
            <div className={styles.filterList}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.active : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>Max Price: ${priceRange}</h3>
            <input
              type="range"
              min="50"
              max={maxProductPrice}
              step="5"
              value={priceRange}
              onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
              className={styles.rangeSlider}
            />
            <div className={styles.rangeLabels}>
              <span>$50</span>
              <span>${maxProductPrice}</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className={styles.main}>
          {filteredProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No products found</h3>
              <p>Try adjusting your filters to see more results.</p>
              <button
                className="btn btn-primary"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filteredProducts.map(product => (
                <ProductCard key={product._id || product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Overlay for mobile filters */}
      {isFilterOpen && (
        <button
          className={styles.overlay}
          onClick={() => setIsFilterOpen(false)}
          aria-label="Close filters"
        ></button>
      )}
    </div>
  );
}

ShopClient.propTypes = {
  products: PropTypes.array.isRequired,
};
