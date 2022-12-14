import { groq } from 'next-sanity';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Hero from '../../../components/Hero';
import KittenSection from '../../../components/KittenSection';
import MatchSection from '../../../components/MatchSection';
import Section from '../../../components/Section';
import { client } from '../../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && title == "kattungar"] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "components": component[]->{
    ...,
    _type == 'kittenSection' => {
      ...,
      "litters": litters[]->{
        ...,
        "kittens": kittens[]->{
          ...,
          "catImgUrl": catImgUrl.asset->url,
          },
        },
    },
    _type == 'matchSection' => {
      ...,
      "matches": matches[]->{
        ...,
        "fatherImgUrl": fatherImgUrl.asset->url,
        "motherImgUrl": motherImgUrl.asset->url,
      },
  }
  }
}`;

const Kittens = async () => {
  const pageData: Page[] = await client.fetch(pageQuery);

  const { heroImgUrl, heroTitle } = pageData[0];

  const components = pageData.map((page) => page.components) as Component[][];

  const borderedTextboxText: TextboxBordered = components[0].find(
    (component) => component._type === 'textboxBordered'
  ) as TextboxBordered;
  const kittensection: KittenSection = components[0].find(
    (component) => component._type === 'kittenSection'
  ) as KittenSection;
  const introMatchText: Textblock = components[0].find(
    (component) => component._type === 'textblock'
  ) as Textblock;
  const matchsection: MatchSection = components[0].find(
    (component) => component._type === 'matchSection'
  ) as MatchSection;

  return (
    <div className="text-DarkBrown">
      <Hero heroImgUrl={heroImgUrl}>
        <h1 className="text-center text-AngelBlue">{heroTitle}</h1>
        <div className="mt-4 ml-auto "></div>
      </Hero>
      <Section>
        <BorderedTextbox
          title={borderedTextboxText.title}
          text={borderedTextboxText.text}
          buttonPath={borderedTextboxText.buttonPath}
          buttonText={borderedTextboxText.buttonText}
        />
      </Section>
      <KittenSection litters={kittensection.litters} />
      <MatchSection
        introMatchText={introMatchText}
        matches={matchsection.matches}
      />
    </div>
  );
};

export default Kittens;
