import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Suspense } from 'react';
import Loading from './loading';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="backgroundPattern">
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="container mx-auto">{children}</main>
      </Suspense>
      <Footer />
    </section>
  );
}
