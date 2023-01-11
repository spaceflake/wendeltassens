import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Suspense } from 'react';
import Loading from './loading';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

const contactInformationQuery = groq`*[_type == 'contactInformation']{
  name, email, phoneNumber,

}`;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMeta: ContactInformation[] = await client.fetch(
    contactInformationQuery
  );

  const { name, email, phoneNumber } = pageMeta[0];
  return (
    <section className="backgroundPattern">
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="container mx-auto">{children}</main>
      </Suspense>
      <Footer name={name} email={email} phoneNumber={phoneNumber} />
    </section>
  );
}
