import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToastContainer from '@/components/ToastContainer';
import './globals.css';

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});


export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://amezonofcalifornia.com'),
  title: 'Amezon of California | Premium International Trading Global',
  description: 'Premium quality apparel, shoes, and accessories. Discover the latest trends in California fashion with international shipping.',
  keywords: 'Amezon, California Fashion, Premium Apparel, International Trading, Luxury Shoes, Fashion Accessories',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Amezon of California',
    description: 'International Trading Global - Premium Apparel & Accessories',
    url: 'https://amezonofcalifornia.com',
    siteName: 'Amezon of California',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
