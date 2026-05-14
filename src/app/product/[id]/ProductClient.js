"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Product.module.css';
import { Star, Heart, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductClient({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className={`container ${styles.productPage}`}>
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; <Link href={`/shop?category=${product.category}`}>{product.category}</Link> &gt; <span>{product.title}</span>
      </div>

      <div className={styles.productLayout}>
        {/* Images */}
        <div className={styles.imageGallery}>
          <div className={styles.thumbnailList}>
            {product.images.map((img, i) => (
              <button 
                key={i} 
                className={`${styles.thumbnail} ${activeImage === img ? styles.activeThumb : ''}`}
                onClick={() => setActiveImage(img)}
              >
                <img src={img} alt={`Thumbnail ${i}`} />
              </button>
            ))}
          </div>
          <div className={styles.mainImage}>
            <img src={activeImage} alt={product.title} />
            {product.badge && <span className={styles.badge}>{product.badge}</span>}
          </div>
        </div>

        {/* Info */}
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.title}</h1>
          
          <div className={styles.reviews}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} color="var(--accent)" />
              ))}
            </div>
            <span>{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.options}>
            <div className={styles.optionGroup}>
              <div className={styles.optionHeader}>
                <span className={styles.optionLabel}>Color</span>
                <span className={styles.selectedValue}>{selectedColor}</span>
              </div>
              <div className={styles.buttons}>
                {product.colors.map(color => (
                  <button 
                    key={color}
                    className={`${styles.colorBtn} ${selectedColor === color ? styles.selected : ''}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div className={styles.optionGroup}>
              <div className={styles.optionHeader}>
                <span className={styles.optionLabel}>Size</span>
                <span className={styles.selectedValue}>{selectedSize}</span>
              </div>
              <div className={styles.buttons}>
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Quantity</span>
              <div className={styles.quantity}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button className="btn btn-primary" onClick={handleAddToCart} style={{ flex: 1, padding: '1rem' }}>
              Add to Cart
            </button>
            <button 
              className={styles.wishlistBtn} 
              onClick={() => toggleWishlist(product)}
            >
              <Heart size={24} fill={isWishlisted ? 'currentColor' : 'none'} color={isWishlisted ? 'var(--error)' : 'currentColor'} />
            </button>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Check size={16} color="var(--success)" />
              <span>Premium Quality Guarantee</span>
            </div>
            <div className={styles.feature}>
              <Check size={16} color="var(--success)" />
              <span>Free Shipping over $150</span>
            </div>
            <div className={styles.feature}>
              <Check size={16} color="var(--success)" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
