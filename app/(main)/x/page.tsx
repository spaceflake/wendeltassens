import { groq } from 'next-sanity';
import {
  heroFragment,
  kittenSectionFragment,
  postContainerFragment,
  sectionFragment,
} from '../../../cms/fragments';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Button from '../../../components/Button';
import ComponentSection from '../../../components/ComponentSection';
import Hero from '../../../components/Hero';
import IntroTextHome from '../../../components/IntroTextHome';
import KittenSection from '../../../components/KittenSection';
import PostContainer from '../../../components/PostContainer';
import Section from '../../../components/Section';
import { client } from '../../../lib/sanity.client';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && slug == null] {
  "sections": sections[]->{
    _type,
    _id,
    title,
    text,

    ${heroFragment},
    ${sectionFragment},
    ${kittenSectionFragment},
    ${postContainerFragment},
  }
}[0]`;

const page = async ({ params }: Props) => {
  const page: Page = await client.fetch(pageQuery);
  console.log(page);

  return (
    <div className="text-DarkBrown">
      {page.sections.map((section, index) => {
        switch (section._type) {
          case 'hero':
            const hero = section as Hero;

            return (
              <Hero
                key={index}
                heroImgUrl={hero.heroImage}
                isHomePage={hero.addButton}
              >
                <h1 className="text-center text-AngelBlue">{hero.heroTitle}</h1>
                {hero.heroButtonText && (
                  <p className="pl-4 text-sm font-medium md:pl-12 lg:text-lg text-DarkBrown font-Montserrat">
                    {hero.heroText}
                  </p>
                )}
                {hero.heroButtonText && hero.heroButtonPath && (
                  <div className="self-center mt-8 md:self-end">
                    <Button
                      text={hero.heroButtonText}
                      goTo={hero.heroButtonPath}
                    />
                  </div>
                )}
              </Hero>
            );

          case 'introTextHome':
            return (
              <Section>
                <IntroTextHome title={section.title} text={section.text} />
              </Section>
            );

          case 'postContainer':
            const postContainer = section as PostContainer;
            return (
              <Section>
                <PostContainer
                  title={postContainer?.title}
                  posts={postContainer.posts}
                />
              </Section>
            );

          case 'section':
            return (
              <ComponentSection
                componentSection={section as ComponentSection}
              />
            );

          case 'textboxBordered':
            const textbox = section as TextboxBordered;

            return (
              <BorderedTextbox
                key={index}
                title={textbox.title}
                text={textbox.text}
                buttonPath={textbox.buttonPath}
                buttonText={textbox.buttonText}
              />
            );

          case 'kittenSection':
            const kittenSection = section as KittenSection;

            return (
              <KittenSection key={index} litters={kittenSection.litters} />
            );

          default:
        }
      })}
    </div>
  );
};

export default page;
