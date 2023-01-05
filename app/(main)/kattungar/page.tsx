import { groq } from 'next-sanity';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Button from '../../../components/Button';
import CatMatchCard from '../../../components/CatMatchCard';
import Hero from '../../../components/Hero';
import KittenSection from '../../../components/KittenSection';
import Section from '../../../components/Section';
import SectionDividerBorder from '../../../components/SectionDividerBorder';
import { client } from '../../../lib/sanity.client';
import adultCatImg from '../../../public/adult-cat-image-1.png';
import catMatch1 from '../../../public/cat1.jpg';

const catMatchCard = {
  femaleName: 'Lucifer',
  maleName: 'Mona Lisa',
  pedigreeUrl: 'https://www.google.com',
  catImgUrl1: adultCatImg,
  catImgUrl2: catMatch1,
};

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
    (component) => component._type === 'matchsection'
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
        >
          <div className=" flex justify-center mb-[2rem]">
            <Button text="Läs mer" />
          </div>
        </BorderedTextbox>
      </Section>
      <KittenSection litters={kittensection.litters} />
      <div className="mt-10"></div>
      <Section>
        <SectionDividerBorder title="Planerade kullar" />
        <p className=" first-letter:text-8xl first-letter:font-Tangerine font-Montserrat font-semibold italic text.xl lg:text-2xl text-center max-w-prose mx-auto mt-10">
          {introMatchText.text}
        </p>
      </Section>
      <section className="m-auto bg-Beige/50">
        <div className="mt-16 mb-10 lg:mt-36">
          <CatMatchCard
            femalename={catMatchCard.femaleName}
            maleName={catMatchCard.maleName}
            femaleImg={catMatchCard.catImgUrl1}
            maleImg={catMatchCard.catImgUrl2}
          />
        </div>
        <div className="mt-10 mb-10">
          <CatMatchCard
            femalename={catMatchCard.femaleName}
            maleName={catMatchCard.maleName}
            femaleImg={catMatchCard.catImgUrl1}
            maleImg={catMatchCard.catImgUrl2}
          />
        </div>
      </section>
    </div>
  );
};

export default Kittens;
