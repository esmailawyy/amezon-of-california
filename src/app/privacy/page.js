export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This may include your name, email address, phone number, and shipping address.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
        <p>We use your information to process orders, communicate with you about your account, and provide customer support. We may also use your information to improve our services and send you updates (if you subscribe).</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Data Security</h2>
        <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Sharing Your Information</h2>
        <p>We do not sell your personal information to third parties. We may share information with service providers who help us operate our business (e.g., shipping companies).</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Your Choices</h2>
        <p>You can access and update your account information at any time. You can also unsubscribe from our marketing emails by following the instructions in the email.</p>
      </section>

      <p style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last updated: May 2026</p>
    </div>
  );
}
