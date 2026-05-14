"use client";

import Link from 'next/link';
import { ShoppingBag, Heart, Menu, X, Moon, Sun } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { cartCount, wishlist, settings } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Logo" className={styles.logoImg} />
          <div className={styles.logoText}>
            {settings?.storeName ? (
              <span className={styles.logoAmazon}>{settings.storeName}</span>
            ) : (
              <>
                <span className={styles.logoAmazon}>Amezon</span>
                <span className={styles.logoOf}>of</span>
                <span className={styles.logoCalifornia}>California</span>
              </>
            )}
          </div>
        </Link>

        {/* Desktop Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className={pathname === '/' ? styles.activeLink : ''}
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            onClick={() => setIsMenuOpen(false)}
            className={pathname.startsWith('/shop') ? styles.activeLink : ''}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={pathname.startsWith('/about') ? styles.activeLink : ''}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className={pathname.startsWith('/contact') ? styles.activeLink : ''}
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className={styles.navActions}>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
            <Heart size={20} />
            {wishlist.length > 0 && <span className={styles.badge}>{wishlist.length}</span>}
          </Link>
          
          <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
