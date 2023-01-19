import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Suspense } from 'react';
import Loading from './loading';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

const contactInformationQuery = groq`*[_type == 'contactInformation']{ name, email, phoneNumber }[0]`;

const pagesQuery = groq`*[_type == 'menu'][0].pages[]->{ 
  title, 
  "slug": slug.current,
}`;

const socialLinksQuery = groq`*[_type == 'socialLinks'][0].links[]{
  text,
  url,
}`;

const externalLinksQuery = groq`*[_type == 'externalLinks'][0].links[]{
  text,
  url,
}`;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactInformation: ContactInformation = await client.fetch(
    contactInformationQuery
  );

  const pages: PageNav[] = await client.fetch(pagesQuery);

  const socialLinks: ExternalLink[] =
    (await client.fetch(socialLinksQuery)) ?? [];

  const externalLinks: ExternalLink[] =
    (await client.fetch(externalLinksQuery)) ?? [];

  return (
    <section className="backgroundPattern">
      <Header pages={pages} />
      <Suspense fallback={<Loading />}>
        <main className="container mx-auto">{children}</main>
      </Suspense>
      <Footer
        contactInformation={contactInformation}
        pages={pages}
        socialLinks={socialLinks}
        externalLinks={externalLinks}
      />
    </section>
  );
}
