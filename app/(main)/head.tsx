import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && slug.current == null][0] {
  title
}`;

interface HeadData {
  title: string;
}

export default async function Head() {
  const pages: HeadData = await client.fetch(pageQuery);

  return (
    <>
      <title>{`Wendeltassens | ${pages.title}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Wendeltassans Ragdoll startsida. Beskrivning om Wendeltassens. Uppdateringar från Wendeltassens Ragdoll"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
