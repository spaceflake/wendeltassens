import { groq } from 'next-sanity';
import BorderedTextbox from '../../components/BorderedTextbox';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import IntroTextHome from '../../components/IntroTextHome';
import PostContainer from '../../components/PostContainer';
import Section from '../../components/Section';
import { client } from '../../lib/sanity.client';

const postQuery = groq`*[_type == "post"][0..2] | order(_createdAt asc) {_id, title, text, "imageUrl": image.asset->url, publishedAt}`;
const pageQuery = groq`*[_type == "page"] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "heroBtnPath": heroButton,
  "components": component[]->{_type, title, text}
}`;

const Homepage = async () => {
  const posts: Post[] = await client.fetch(postQuery);
  const pageMeta: Page = await client.fetch(pageQuery);

  const components = pageMeta.map((page) => page.components);

  const introbox = components[0].find(
    (component) => component._type === 'introTextHome'
  );
  const borderBox = components[0].find(
    (component) => component._type === 'textboxBordered'
  );
  const postContainerTitle = components[0].find(
    (component) => component._type === 'postContainer'
  );

  return (
    <div>
      <Hero heroImgUrl={pageMeta[0].heroImgUrl}>
        <h1>{pageMeta[0].heroTitle}</h1>
        <div className="mt-4 ml-auto ">
          <Button text="Kattungar" goTo={pageMeta[0].heroBtnPath} />
        </div>
      </Hero>
      <Section>
        {introbox && (
          <IntroTextHome title={introbox.title} text={introbox.text} />
        )}
      </Section>
      <Section>
        {borderBox && (
          <BorderedTextbox title={borderBox.title} text={borderBox.text}>
            <Button text="Läs mer..." goTo="/information-villkor" />
          </BorderedTextbox>
        )}
      </Section>
      <Section>
        <PostContainer title={postContainerTitle?.title} posts={posts} />
      </Section>
    </div>
  );
};

export default Homepage;
