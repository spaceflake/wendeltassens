import { groq } from 'next-sanity';
import Link from 'next/link';
import {
  heroFragment,
  kittenSectionFragment,
  postContainerFragment,
  sectionFragment,
} from '../../cms/fragments';
import BorderedTextbox from '../../components/BorderedTextbox';
import ComponentSection from '../../components/ComponentSection';
import Hero from '../../components/Hero';
import IntroTextHome from '../../components/IntroTextHome';
import KittenSection from '../../components/KittenSection';
import PostContainer from '../../components/PostContainer';
import Section from '../../components/Section';
import { client } from '../../lib/sanity.client';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && slug.current == null] {
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

async function getPageData() {
  const page: Page = await client.fetch(pageQuery);

  if (!page) {
    throw new Error('No page found');
  }

  return page;
}

const page = async ({ params }: Props) => {
  const page: Page = await getPageData();

  return (
    <div className="text-DarkBrown">
      {page.sections.map((section, index) => {
        switch (section._type) {
          case 'hero':
            const hero = section as Hero;

            return (
              <Hero
                key={hero._id}
                heroImgUrl={hero.heroImage}
                alt={hero.alt}
                isHomePage={hero.addButton}
              >
                <div className="flex flex-col w-3/4 text-left">
                  <h1>{hero.heroTitle}</h1>
                  {hero.heroButtonText && (
                    <p className="pl-4 text-sm font-medium md:pl-12 lg:text-lg text-DarkBrown font-Montserrat">
                      {hero.heroText}
                    </p>
                  )}
                  {hero.heroButtonText && hero.heroButtonPath && (
                    <div className="self-center mt-8 md:self-end">
                      <Link
                        target="_self"
                        href={hero.heroButtonPath || '/'}
                        className="flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold text-center transition-all duration-150 ease-in-out border rounded border-DarkBrown hover:ring-2 hover:ring-DarkBrown bg-DarkBrown text-Beige font-Montserrat lg:text-base hover:bg-DarkBrown/90"
                      >
                        <span>{hero.heroButtonText || 'Knapptext'}</span>
                      </Link>
                    </div>
                  )}
                </div>
              </Hero>
            );

          case 'introTextHome':
            const introTextHome = section as ComponentBase;
            return (
              <Section key={introTextHome._id}>
                <IntroTextHome
                  title={introTextHome.title}
                  text={introTextHome.text}
                />
              </Section>
            );

          case 'postContainer':
            const postContainer = section as PostContainer;
            return (
              <Section key={postContainer._id}>
                <PostContainer
                  title={postContainer?.title}
                  posts={postContainer.posts}
                />
              </Section>
            );

          case 'section':
            return (
              <ComponentSection
                key={index}
                componentSection={section as ComponentSection}
              />
            );

          case 'textboxBordered':
            const textbox = section as TextboxBordered;

            return (
              <BorderedTextbox
                key={index}
                title={textbox.title}
                textField={textbox.text}
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
