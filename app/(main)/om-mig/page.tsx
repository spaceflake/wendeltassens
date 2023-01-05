import { groq } from 'next-sanity';
import Image from 'next/image';
import AboutCarousel from '../../../components/AboutCarousel';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Button from '../../../components/Button';
import Section from '../../../components/Section';
import { client } from '../../../lib/sanity.client';
import mammaBild from '../../../public/mammakatt.jpg';
import pappaBild from '../../../public/pappakatt.jpg';

const pageQuery = groq`*[_type == "page" && title == "Om mig"] {
  "components": component[]->{
    title,
    text,
    _type,
    _id,

    _type == 'aboutCarousel' => {
     "carouselImage": carouselImage[].asset->url,
    }
  }
}`;

const About = async () => {
  const pageMeta: Page[] = await client.fetch(pageQuery);

  const components = pageMeta.map((page) => page.components) as Component[][];

  const borderedTextboxText: TextboxBordered = components[0].find(
    (component) => component._type === 'textboxBordered'
  ) as TextboxBordered;

  const aboutCarousel: AboutCarousel = components[0].find(
    (component) => component._type === 'aboutCarousel'
  ) as AboutCarousel;

  return (
    <div className="r">
      <div className="flex justify-center center">
        <AboutCarousel
          carouselImages={aboutCarousel.carouselImage}
        ></AboutCarousel>
      </div>
      <Section>
        <BorderedTextbox
          title={borderedTextboxText.title}
          text={borderedTextboxText.text}
        >
          <Button text="Kontakta mig" goTo="/kontakt" />
        </BorderedTextbox>
      </Section>
    </div>
  );
};

export default About;
