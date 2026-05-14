"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, ArrowRight } from 'lucide-react';
import styles from './Cart.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, checkout } = useCart();

  if (cart.length === 0) {
    return (
      <div className={`container ${styles.emptyCart}`}>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className={`container ${styles.cartPage}`}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.cartLayout}>
        <div className={styles.cartItems}>
          <div className={styles.tableHeader}>
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {cart.map((item) => (
            <div key={item.cartKey} className={styles.cartItem}>
              <div className={styles.productCol}>
                <img src={item.image} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <Link href={`/product/${item.id}`} className={styles.itemTitle}>{item.title}</Link>
                  <span className={styles.itemVariant}>Size: {item.selectedSize} | Color: {item.selectedColor}</span>
                  <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                </div>
              </div>

              <div className={styles.qtyCol}>
                <div className={styles.quantity}>
                  <button onClick={() => updateQuantity(item.cartKey, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.cartKey, 1)}>+</button>
                </div>
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFromCart(item.cartKey)}
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className={styles.totalCol}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button className={`btn btn-primary ${styles.checkoutBtn}`} onClick={checkout}>
            Checkout via WhatsApp <ArrowRight size={18} />
          </button>
          
          <div className={styles.secureText}>
            Secure checkout powered by WhatsApp
          </div>
        </div>
      </div>
    </div>
  );
}
