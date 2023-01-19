import { groq } from 'next-sanity';
import React from 'react';
import {
  heroFragment,
  sectionFragment,
  catSectionFragment,
  kittenSectionFragment,
} from '../../../../cms/fragments';
import BorderedTextbox from '../../../../components/BorderedTextbox';
import ComponentSection from '../../../../components/ComponentSection';
import Hero from '../../../../components/Hero';
import KittenSection from '../../../../components/KittenSection';
import { client } from '../../../../lib/sanity.client';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && slug == $slug] {
  "sections": sections[]->{
    _type,
    _id,
    title,
    text,

    ${heroFragment},
    ${sectionFragment},
    ${catSectionFragment},
    ${kittenSectionFragment},
  }
}[0]`;

const page = async ({ params }: Props) => {
  const queryParams = {
    slug: params.slug,
  };

  const page: Page = await client.fetch(pageQuery, queryParams);
  console.log('hej');
  console.log(page);

  return (
    <div className="text-DarkBrown">
      {page.sections.map((section, index) => {
        switch (section._type) {
          case 'hero':
            const hero = section as Hero;

            return (
              <Hero key={index} heroImgUrl={hero.heroImage}>
                <h1 className="text-center text-AngelBlue">{hero.heroTitle}</h1>
                <div className="mt-4 ml-auto "></div>
              </Hero>
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
