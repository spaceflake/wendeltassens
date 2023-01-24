import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && slug.current == null][0] {
  title,
  seoDescription,
  seoKeywords
}`;

interface HeadData {
  title: string;
  seoDescription: string;
  seoKeywords: string;
}

export default async function Head() {
  const data: HeadData = await client.fetch(pageQuery);

  return (
    <>
      <title>{`Wendeltassens | ${data.title}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={`${data.seoDescription}`} />
      <meta name="keywords" content={`${data.seoKeywords}`} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
