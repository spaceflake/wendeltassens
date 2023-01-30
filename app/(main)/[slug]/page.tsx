import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import {
  carouselFragment,
  formSectionFragment,
  heroFragment,
  kittenSectionFragment,
  sectionFragment,
} from '../../../cms/fragments';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Carousel from '../../../components/Carousel';
import ComponentSection from '../../../components/ComponentSection';
import ContactForm from '../../../components/ContactForm';
import Hero from '../../../components/Hero';
import KittenSection from '../../../components/KittenSection';
import Section from '../../../components/Section';
import { client } from '../../../lib/sanity.client';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && slug.current == $slug] {
  "sections": sections[]->{
    _type,
    _id,
    title,
    text,

    ${heroFragment},
    ${sectionFragment},
    ${kittenSectionFragment},
    ${formSectionFragment},
    ${carouselFragment}
  }
}[0]`;

const page = async ({ params }: Props) => {
  const queryParams = {
    slug: params.slug,
  };
  const page: Page = await client.fetch(pageQuery, queryParams);

  if (!page) {
    notFound();
  }

  return (
    <div className="text-DarkBrown">
      {page.sections.map((section, index) => {
        switch (section._type) {
          case 'hero':
            const hero = section as Hero;

            return (
              <Hero key={index} heroImgUrl={hero.heroImage} alt={hero.alt}>
                <h1 className="text-center text-AngelBlue">{hero.heroTitle}</h1>
                <div className="mt-4 ml-auto "></div>
              </Hero>
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

          case 'formSection':
            const formSection = section as FormSection;

            return (
              <Section key={index}>
                <div className="grid grid-cols-1 px-4 py-12 divide-y md:p-12 lg:grid-cols-2 bg-Beige rounded-xl lg:divide-x lg:divide-y-0 divide-dotted divide-DarkBrown mb-36">
                  <div className="pb-10 space-y-4 text-base font-bold md:text-lg lg:text-xl font-Montserrat text-DarkBrown lg:pr-10">
                    <p>{formSection.text}</p>
                    <div>
                      <p>{formSection.contactInformation.name}</p>
                      <p>{formSection.contactInformation.email}</p>
                      <p>{formSection.contactInformation.phoneNumber}</p>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </Section>
            );

          case 'carousel':
            const carousel = section as Carousel;

            return (
              <div key={index} className="flex justify-center center">
                <Carousel imageList={carousel.imageList} />
              </div>
            );

          default:
        }
      })}
    </div>
  );
};

export async function generateStaticParams() {
  const pageData: PageNav[] = await client.fetch(
    groq`*[_type == "page" && slug.current != null]{"slug": slug.current}`
  );

  return pageData.map((page) => {
    return {
      slug: page.slug,
    };
  });
}
export default page;
