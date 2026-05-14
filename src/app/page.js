import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const trendingProducts = products.filter(p => p.trending).slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Premium Style, Defined.</h1>
          <p className={styles.heroSubtitle}>
            Discover our curated collection of luxury-inspired apparel and accessories designed for the modern lifestyle.
          </p>
          <div className={styles.heroActions}>
            <Link href="/shop" className="btn btn-primary">Shop Collection</Link>
            <Link href="/shop?category=tshirts" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View Essentials</Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container" style={{ padding: '5rem 2rem' }}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          <Link href="/shop?category=tshirts" className={styles.categoryCard}>
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" alt="T-Shirts" className={styles.categoryImg} />
            <div className={styles.categoryContent}>
              <h3>Premium Tees</h3>
              <span>Shop Now &rarr;</span>
            </div>
          </Link>
          <Link href="/shop?category=shoes" className={styles.categoryCard}>
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Footwear" className={styles.categoryImg} />
            <div className={styles.categoryContent}>
              <h3>Luxury Footwear</h3>
              <span>Shop Now &rarr;</span>
            </div>
          </Link>
          <Link href="/shop?category=accessories" className={styles.categoryCard}>
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" alt="Accessories" className={styles.categoryImg} />
            <div className={styles.categoryContent}>
              <h3>Accessories</h3>
              <span>Shop Now &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending Now */}
      <section className={styles.productSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trending Now</h2>
            <Link href="/shop" className={styles.viewAll}>View All</Link>
          </div>
          <div className={styles.productGrid}>
            {trendingProducts.map(product => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className={styles.banner}>
        <div className="container">
          <div className={styles.bannerContent}>
            <h2>The Fall Collection</h2>
            <p>Elevate your wardrobe with our latest arrivals. Heavyweight fabrics, refined cuts, and uncompromising quality.</p>
            <Link href="/shop" className="btn btn-primary" style={{ backgroundColor: '#fff', color: '#000' }}>Explore Now</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.productSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Picks</h2>
            <Link href="/shop" className={styles.viewAll}>View All</Link>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map(product => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
