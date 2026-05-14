"use client";

import Link from 'next/link';
import PropTypes from 'prop-types';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  const productId = product._id || product.id;
  const isWishlisted = isInWishlist(productId);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes?.[0] || "Default", product.colors?.[0] || "Default", 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
        <button 
          className={`${styles.wishlistBtn} ${isWishlisted ? styles.active : ''}`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product); }}
        >
          <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
        <Link href={`/product/${productId}`}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </Link>
      </div>
      
      <div className={styles.info}>
        <div className={styles.category}>{product.category}</div>
        <Link href={`/product/${productId}`}>
          <h3 className={styles.title}>{product.title}</h3>
        </Link>
        <div className={styles.priceContainer}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className={styles.price}>${(product.price || 0).toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>${(product.originalPrice || 0).toFixed(2)}</span>
            )}
          </div>
          <button 
            className={styles.quickAddBtn}
            onClick={handleQuickAdd}
            title="Quick Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    originalPrice: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    badge: PropTypes.string,
    sizes: PropTypes.array,
    colors: PropTypes.array,
  }).isRequired,
};
