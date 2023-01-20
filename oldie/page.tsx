import { groq } from 'next-sanity';
import BorderedTextbox from '../components/BorderedTextbox';
import Button from '../components/Button';
import Hero from '../components/Hero';
import IntroTextHome from '../components/IntroTextHome';
import PostContainer from '../components/PostContainer';
import Section from '../components/Section';
import { client } from '../lib/sanity.client';

const postQuery = groq`*[_type == "post"][0..2] | order(publishedAt desc) {_id, title, text, "imageUrl": image.asset->url, publishedAt}`;
const pageQuery = groq`*[_type == "page" && title == "Hem"] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "heroBtnPath": heroButtonPath,
  "heroBtnText": heroButtonText,
  "components": component[]->{_type, title, text, buttonPath, buttonText}
}`;

const Homepage = async () => {
  // const posts: Post[] = await client.fetch(postQuery);
  // const pageMeta: Page[] = await client.fetch(pageQuery);

  // const { heroImgUrl, heroTitle, heroBtnPath, heroBtnText } = pageMeta[0];

  // const components = pageMeta.map((page) => page.components) as Component[][];

  // const introbox = components[0].find(
  //   (component) => component._type === 'introTextHome'
  // );
  // const borderedTextboxText: TextboxBordered = components[0].find(
  //   (component) => component._type === 'textboxBordered'
  // ) as TextboxBordered;

  // const postContainerTitle = components[0].find(
  //   (component) => component._type === 'postContainer'
  // );

  return (
    <div>
      {/* <Hero isHomePage heroImgUrl={heroImgUrl}>
        <div className="flex flex-col w-3/4 text-left">
          <h1>{heroTitle}</h1>
          <p className="pl-4 text-sm font-medium md:pl-12 lg:text-lg text-DarkBrown font-Montserrat">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            ab ullam quis, eos cumque quod adipisci vero quas. Ea minima
            assumenda accusantium libero, eaque quod!
          </p>
          <div className="self-center mt-8 md:self-end">
            <Button text={heroBtnText} goTo={heroBtnPath} />
          </div>
        </div>
      </Hero>
      <Section>
        {introbox && (
          <IntroTextHome title={introbox.title} text={introbox.text} />
        )}
      </Section>
      <Section>
        {borderedTextboxText && (
          <BorderedTextbox
            title={borderedTextboxText.title}
            text={borderedTextboxText.text}
            buttonPath={borderedTextboxText.buttonPath}
            buttonText={borderedTextboxText.buttonText}
          />
        )}
      </Section>
      <Section>
        <PostContainer title={postContainerTitle?.title} posts={posts} />
      </Section> */}
    </div>
  );
};

export default Homepage;
