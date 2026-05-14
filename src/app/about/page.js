export const metadata = {
  title: 'About Us | Amezon of California',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Us</h1>
      
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to <strong>Amezon of California</strong> - International Trading Global. 
          We are a premium destination for luxury-inspired apparel, footwear, and accessories.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Our mission is to bring high-quality, meticulously crafted fashion to the modern lifestyle. 
          We believe that style shouldn't be compromised by comfort, and luxury shouldn't be inaccessible. 
          Every piece in our collection is curated with an uncompromising attention to detail, fabric quality, and fit.
        </p>
        <h2 style={{ color: 'var(--foreground)', marginTop: '3rem', marginBottom: '1rem' }}>Our Philosophy</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Minimalism, durability, and elegance. Whether you're looking for the perfect heavyweight tee, 
          a timeless leather boot, or sophisticated accessories, we provide pieces that will become the 
          foundation of your wardrobe for years to come.
        </p>
      </div>
    </div>
  );
}
