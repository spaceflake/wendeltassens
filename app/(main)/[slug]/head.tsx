import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  title,
  seoDescription,
  seoKeywords,
  "seoImage": seoImage.asset->url
}`;

interface HeadData {
  title: string;
  seoDescription: string;
  seoKeywords: string;
  seoImage: string;
}

export default async function Head({ params }: Props) {
  const queryParams = {
    slug: params.slug,
  };

  const data: HeadData = await client.fetch(pageQuery, queryParams);

  return (
    <>
      <title>{`${data.title} | Wendeltassens`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={`${data.seoDescription}`} />
      <meta name="keywords" content={`${data.seoKeywords}`} />
      <meta property="og:title" content={`${data.title}`} />
      <meta property="og:description" content={`${data.seoDescription}`} />
      <meta property="og:image" content={`${data.seoImage}`} />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
