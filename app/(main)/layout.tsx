import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="backgroundPattern">
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </section>
  );
}
