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
  "components": component[]->{...}
}`;

const Kittens = async () => {
  const pageData: Page = await client.fetch(pageQuery);

  const { heroImgUrl, heroTitle } = pageData[0];

  const components = pageData.map((page) => page.components);

  const borderedTextboxText = components[0].find(
    (component) => component._type === 'textboxBordered'
  );
  const kittensection = components[0].find(
    (component) => component._type === 'kittensection'
  );
  const introMatchText = components[0].find(
    (component) => component._type === 'textblock'
  );
  const matchsection = components[0].find(
    (component) => component._type === 'matchsection'
  );

  return (
    <div className="text-DarkBrown">
      <Hero heroImgUrl={heroImgUrl}>
        <h1 className="text-center text-AngelBlue">{heroTitle}</h1>
        <div className="mt-4 ml-auto "></div>
      </Hero>
      <Section>
        <BorderedTextbox
          title={borderedTextboxText!.title}
          text={borderedTextboxText!.text}
        >
          <div className=" flex justify-center mb-[2rem]">
            <Button text="Läs mer" />
          </div>
        </BorderedTextbox>
      </Section>
      <KittenSection />
      <div className="mt-10"></div>
      <Section>
        <SectionDividerBorder title="Planerade kullar" />
        <p className=" first-letter:text-8xl first-letter:font-Tangerine font-Montserrat font-semibold italic text.xl lg:text-2xl text-center max-w-prose mx-auto mt-10">
          {introMatchText!.text}
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
