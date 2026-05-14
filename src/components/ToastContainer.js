"use client";

import { useCart } from '@/context/CartContext';
import { CheckCircle, Info } from 'lucide-react';

export default function ToastContainer() {
  const { toast } = useCart();
  
  if (!toast.show) return null;
  
  return (
    <div className="toast-container">
      <div className={`toast ${toast.type}`}>
        {toast.type === 'success' ? <CheckCircle size={20} color="var(--success)" /> : <Info size={20} color="var(--primary)" />}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
