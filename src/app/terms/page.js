export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Terms & Conditions</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
        <p>Welcome to Amezon of California. By accessing our website, you agree to these terms and conditions. Please read them carefully.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Use of the Site</h2>
        <p>You may use our site for personal, non-commercial purposes. You agree not to use the site for any unlawful purpose or in any way that might harm the site or its users.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Products and Pricing</h2>
        <p>All products are subject to availability. We reserve the right to limit quantities or discontinue products at any time. Prices are subject to change without notice.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Shipping and Returns</h2>
        <p>Shipping times are estimates. We are not responsible for delays beyond our control. Please refer to our return policy for details on returning items.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
        <p>Amezon of California shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services.</p>
      </section>

      <p style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last updated: May 2026</p>
    </div>
  );
}
