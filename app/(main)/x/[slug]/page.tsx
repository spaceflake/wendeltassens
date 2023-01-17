import { groq } from 'next-sanity';
import React from 'react';
import BorderedTextbox from '../../../../components/BorderedTextbox';
import Hero from '../../../../components/Hero';
import KittenSection from '../../../../components/KittenSection';
import MatchSection from '../../../../components/MatchSection';
import { client } from '../../../../lib/sanity.client';

// TODO: Dessa "fragment"-variabler som emulerar fragment-funktionaliteten i GraphQL bör exporteras från React-komponentens fil istället
const catSectionFragment: string = `
_type == 'catSection' => {
  cats[]->{
    ...,
    "catImgUrl": catImgUrl.asset->url,
  }
}`;

const kittenSectionFragment: string = `
_type == 'kittenSection' => {
  ...,
  "litters": litters[]->{
    ...,
    "kittens": kittens[]->{
      ...,
      "catImgUrl": catImgUrl.asset->url,
    },
  },
}`;

const matchSectionFragment: string = `
_type == 'matchSection' => {
  ...,
  "matches": matches[]->{
    ...,
    "fatherImgUrl": fatherImgUrl.asset->url,
    "motherImgUrl": motherImgUrl.asset->url,
  },
}`;

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const pageQuery = groq`*[_type == "page" && title == $title] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "components": component[]->{
    _type,
    _id,
    title,
    text,
    buttonText,
    buttonPath,
    
    ${catSectionFragment},
    ${kittenSectionFragment},
    ${matchSectionFragment}
  }
}[0]`;

const page = async ({ params }: Props) => {
  const queryParams = {
    title: params.slug,
  };

  const page: Page = await client.fetch(pageQuery, queryParams);

  return (
    <div className="text-DarkBrown">
      <Hero heroImgUrl={page.heroImgUrl}>
        <h1 className="text-center text-AngelBlue">{page.heroTitle}</h1>
        <div className="mt-4 ml-auto "></div>
      </Hero>
      <>
        {page.components.map((component, index) => {
          switch (component._type) {
            case 'textboxBordered':
              const textbox = component as TextboxBordered;

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
              const kittenSection = component as KittenSection;

              return (
                <KittenSection key={index} litters={kittenSection.litters} />
              );

            default:
          }
        })}
      </>
    </div>
  );
};

export default page;
