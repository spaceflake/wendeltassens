import { groq } from 'next-sanity';
import Carousel from '../../../components/Carousel';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Button from '../../../components/Button';
import Section from '../../../components/Section';
import { client } from '../../../lib/sanity.client';
import AboutCarousel from '../../../components/Carousel';

const pageQuery = groq`*[_type == "page" && title == "Om mig"] {
  "components": component[]->{
    title,
    text,
    _type,
    _id,

    _type == 'carousel' => {
     "imageList": imageList[].asset->url,
    }
  }
}`;

const About = async () => {
  const pageMeta: Page[] = await client.fetch(pageQuery);

  const components = pageMeta.map((page) => page.components) as Component[][];

  const borderedTextboxText: TextboxBordered = components[0].find(
    (component) => component._type === 'textboxBordered'
  ) as TextboxBordered;

  const aboutCarousel: Carousel = components[0].find(
    (component) => component._type === 'carousel'
  ) as Carousel;

  return (
    <div>
      <div className="flex justify-center center">
        <AboutCarousel imageList={aboutCarousel.imageList}></AboutCarousel>
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
