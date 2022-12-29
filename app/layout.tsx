import '../styles/globals.css';
import { Tangerine, Montserrat } from '@next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tangerine = Tangerine({
  weight: ['400', '700'],
  variable: '--font-tangerine',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${tangerine.variable}`}>
      <head />
      <body className="backgroundPattern">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
