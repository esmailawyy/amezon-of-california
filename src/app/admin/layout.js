"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Products', href: '/admin/products' },
    { name: 'Orders (WhatsApp)', href: '/admin/orders' },
    { name: 'Settings', href: '/admin/settings' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Admin Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--card-bg)', borderRight: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Admin Panel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          {navItems.map((item) => {
            const isActive = item.href === '/admin' 
              ? pathname === '/admin' 
              : pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href} 
                style={{ 
                  padding: '0.75rem 1rem', 
                  borderRadius: 'var(--radius)', 
                  backgroundColor: isActive ? 'var(--background)' : 'transparent', 
                  fontWeight: isActive ? '600' : '400',
                  color: isActive ? 'var(--accent)' : 'var(--foreground)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                {item.name}
              </Link>
            );
          })}
          
          <button 
            onClick={() => {
              document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
              window.location.href = "/admin/login";
            }}
            style={{ 
              marginTop: 'auto', 
              padding: '0.75rem 1rem', 
              borderRadius: 'var(--radius)', 
              color: 'var(--error)', 
              textAlign: 'left', 
              fontWeight: '600',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
