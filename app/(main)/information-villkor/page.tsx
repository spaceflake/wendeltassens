import { groq } from 'next-sanity';
import Button from '../../../components/Button';
import FAQ from '../../../components/FAQ';
import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import SectionDividerBorder from '../../../components/SectionDividerBorder';
import TextAndImage from '../../../components/TextAndImage';
import TwoColumnTextSection from '../../../components/TwoColumnTextSection';
import { client } from '../../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && title == "information-villkor"] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "components": component[]->{
    ...,
    _type == 'textImageCard' => {
      ...,
      "image": image.asset->url,
    },
    _type == 'FAQSection' => {
      ...,
      "faqs": faqs[]->{
        ...,
        title,
        text,
    },
  },    
  }
}`;

const FAQPage = async () => {
  const pageData: Page[] = await client.fetch(pageQuery);

  const { heroImgUrl, heroTitle } = pageData[0];

  const components = pageData.map((page) => page.components) as Component[][];

  const aboutRagdollsText: Textblock = components[0].find(
    (component) => component._type === 'textblock'
  ) as Textblock;
  const FAQSection: FAQSection = components[0].find(
    (component) => component._type === 'FAQSection'
  ) as FAQSection;
  const termsText: Textblock = components[0].find(
    (component) => component._type === 'textblock'
  ) as Textblock;
  const dvärgväxtText: TextImageCard = components[0].find(
    (component) => component._type === 'textImageCard'
  ) as TextImageCard;

  return (
    <div className="text-DarkBrown">
      <Hero heroImgUrl={heroImgUrl}>
        <h1>{heroTitle}</h1>
        <div className="mt-4 ml-auto "></div>
      </Hero>
      <Section>
        <SectionDividerBorder title="Om Ragdolls" />
        <TwoColumnTextSection
          text={aboutRagdollsText.text}
        ></TwoColumnTextSection>
      </Section>
      <Section>
        <SectionDividerBorder title="Frågor & Svar" />
        <div className="flex flex-col items-center justify-center px-4">
          {FAQSection.faqs.map((faq) => (
            <FAQ key={faq._id} title={faq.title} text={faq.text} />
          ))}
          <div className="mt-10">
            <Button text="Kontakta mig" goTo="/kontakt" />
          </div>
        </div>
      </Section>
      <Section>
        <SectionDividerBorder title="Villkor" />
        <TwoColumnTextSection text={termsText.text}></TwoColumnTextSection>
      </Section>

      <Section>
        <SectionDividerBorder title="Dvärgväxt" />
        <TextAndImage
          image={dvärgväxtText.image}
          text={dvärgväxtText.text}
          hasLink
          linkUrl="https://scandinavianragdoll.com/dvargvaxt/"
        />
      </Section>
    </div>
  );
};

export default FAQPage;
