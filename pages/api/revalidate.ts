import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const pageQuery = groq`*[_type == "page"]{
      title,
      "slug": slug.current,
    }`;

    const pages: PageNav[] = await client.fetch(pageQuery);
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    const promises = pages.map((page) => {
      return res.revalidate(`/${page.slug ?? ''}`);
    });
    // [
    //   res.revalidate('/'),
    //   res.revalidate('/katter'),
    //   res.revalidate('/kattungar'),
    //   res.revalidate('/kontakt'),
    //   res.revalidate('/information-villkor'),
    //   res.revalidate('/om-mig'),
    // ];

    await Promise.all(promises);

    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
