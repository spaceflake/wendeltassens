import { groq } from 'next-sanity';
import Carousel from '../../../components/Carousel';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Section from '../../../components/Section';
import { client } from '../../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && title == "Om mig"] {
  "components": component[]->{
    title,
    text,
    _type,
    _id,
    buttonText,
    buttonPath,

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

  const carousel: Carousel = components[0].find(
    (component) => component._type === 'carousel'
  ) as Carousel;

  return (
    <div>
      <div className="flex justify-center center">
        <Carousel imageList={carousel.imageList}></Carousel>
      </div>
      <Section>
        <BorderedTextbox
          title={borderedTextboxText.title}
          text={borderedTextboxText.text}
          buttonPath={borderedTextboxText.buttonPath}
          buttonText={borderedTextboxText.buttonText}
        />
      </Section>
    </div>
  );
};

export default About;
