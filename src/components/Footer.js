"use client";

import styles from './Footer.module.css';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Footer() {
  const { showToast, settings } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    showToast("Thanks for subscribing! Check your email soon.");
    e.target.reset();
  };

  const storeName = settings?.storeName || 'Amezon of California';

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt={storeName} style={{ height: '50px', width: 'auto', marginBottom: '1rem' }} />
          </Link>
          <p className={styles.description}>
            International Trading Global. Premium quality apparel and accessories for the modern lifestyle.
          </p>
        </div>
        
        <div className={styles.links}>
          <h3>Shop</h3>
          <Link href="/shop?category=tshirts">T-Shirts</Link>
          <Link href="/shop?category=pants">Pants</Link>
          <Link href="/shop?category=shoes">Shoes</Link>
          <Link href="/shop?category=accessories">Accessories</Link>
        </div>
        
        <div className={styles.links}>
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Subscribe to get special offers and updates.</p>
          <form className={styles.form} onSubmit={handleSubscribe}>
            <input type="email" placeholder="Email Address" required className={styles.input} />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} {storeName}. All rights reserved.</p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" 
            alt="USA Flag" 
            className={styles.usaFlag} 
          />
        </div>
      </div>
    </footer>
  );
}
