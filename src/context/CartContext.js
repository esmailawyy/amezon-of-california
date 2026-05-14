"use client";
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const [settings, setSettings] = useState(null);

  // Load from localStorage & Settings
  useEffect(() => {
    const savedCart = localStorage.getItem("aoc_cart");
    const savedWishlist = localStorage.getItem("aoc_wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

    // Fetch settings
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error(err));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("aoc_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("aoc_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = useCallback((message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  }, []);

  const addToCart = useCallback((product, selectedSize, selectedColor, quantity = 1) => {
    const productId = product._id || product.id;
    setCart(prev => {
      const key = `${productId}-${selectedSize}-${selectedColor}`;
      const existing = prev.find(
        item => (item._id || item.id) === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );
      if (existing) {
        return prev.map(item =>
          (item._id || item.id) === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, selectedSize, selectedColor, quantity, cartKey: key }];
    });
    showToast(`${product.title} added to cart`);
  }, [showToast]);

  const removeFromCart = useCallback((cartKey) => {
    setCart(prev => prev.filter(item => item.cartKey !== cartKey));
    showToast("Item removed from cart", "info");
  }, [showToast]);

  const updateQuantity = useCallback((cartKey, delta) => {
    setCart(prev =>
      prev
        .map(item =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter(item => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWishlist = useCallback((product) => {
    const productId = product._id || product.id;
    setWishlist(prev => {
      const exists = prev.find(item => (item._id || item.id) === productId);
      if (exists) {
        showToast("Removed from wishlist", "info");
        return prev.filter(item => (item._id || item.id) !== productId);
      }
      showToast("Added to wishlist ♥");
      return [...prev, product];
    });
  }, [showToast]);

  const isInWishlist = useCallback((productId) => {
    return wishlist.some(item => (item._id || item.id) === productId);
  }, [wishlist]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const checkout = useCallback(() => {
    if (cart.length === 0) return;

    const WHATSAPP_NUMBER = settings?.whatsapp || "19093728995";
    let message = `Hello ${settings?.storeName || 'Amezon of California'}, I want to place an order:%0A%0A`;

    cart.forEach(item => {
      message += `▪ *${item.title}*%0A`;
      message += `  Size: ${item.selectedSize}%0A`;
      message += `  Color: ${item.selectedColor}%0A`;
      message += `  Quantity: ${item.quantity}%0A`;
      message += `  Price: $${(item.price * item.quantity).toFixed(2)}%0A%0A`;
    });

    message += `───────────────%0A`;
    message += `*Total: $${cartTotal.toFixed(2)}*%0A%0A`;
    message += `Please confirm availability.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  }, [cart, cartTotal]);

  const contextValue = useMemo(() => ({
    cart, wishlist, toast, cartTotal, cartCount,
    addToCart, removeFromCart, updateQuantity, clearCart,
    toggleWishlist, isInWishlist, checkout, showToast
  }), [cart, wishlist, toast, cartTotal, cartCount, addToCart, removeFromCart, updateQuantity, clearCart, toggleWishlist, isInWishlist, checkout, showToast]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
