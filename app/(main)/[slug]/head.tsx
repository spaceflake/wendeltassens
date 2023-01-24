import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  title
}`;

interface HeadData {
  title: string;
}

export default async function Head({ params }: Props) {
  const queryParams = {
    slug: params.slug,
  };

  const pages: HeadData = await client.fetch(pageQuery, queryParams);

  return (
    <>
      <title>{`${pages.title} | Wendeltassens`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Wendeltassans Ragdoll startsida. Beskrivning om Wendeltassens. Uppdateringar från Wendeltassens Ragdoll"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
