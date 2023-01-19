import { groq } from 'next-sanity';
import image from 'next/image';
import Button from '../../../components/Button';
import FAQ from '../../../components/FAQ';
import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import SectionDividerBorder from '../../../components/SectionDividerBorder';
import TextAndImage from '../../../components/TextAndImage';
import TwoColumnTextSection from '../../../components/TwoColumnTextSection';
import { client } from '../../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && title == "information-villkor"] {
  "components": component[]->{
    _type == 'hero' => {
      title,
      heroImage.asset->url,
      heroTitle,
      heroText,
      heroButtonPath,
      heroButtonText
    }
    _type == 'textblock' => {
    page,
    section,
    title,
    text,
    },
    _type == 'textImageCard' => {
      _updatedAt,
      link,
      text,
      title,
      "image": image.asset->url,
    },
    _type == 'FAQSection' => {
      title,
      "faqs": faqs[]->{
        _id,
        title,
        text,
    },
     
  },    
  }
}`;

const FAQPage = async () => {
  const pageData: Page[] = await client.fetch(pageQuery);

  const { heroImgUrl, heroTitle } = pageData[0];

  const components: Component[] = pageData[0].components;

  const aboutRagdollsText: Textblock = components.filter(
    (item) => item.title === 'Om Ragdolls'
  )[0] as Textblock;

  const FAQSection: FAQSection = components.filter(
    (item) => item.title === 'Frågor & Svar'
  )[0] as FAQSection;

  const termsText: Textblock = components.filter(
    (item) => item.title === 'Villkor'
  )[0] as Textblock;

  const dvärgväxtText: TextImageCard = components.filter(
    (item) => item.title === 'Dvärgväxt'
  )[0] as TextImageCard;

  return (
    <div className="text-DarkBrown">
      <Hero heroImgUrl={heroImgUrl}>
        <h1>{heroTitle}</h1>
        <div className="mt-4 ml-auto "></div>
      </Hero>
      <Section>
        <SectionDividerBorder title={aboutRagdollsText.title} />
        <TwoColumnTextSection text={aboutRagdollsText.text} />
      </Section>
      <Section>
        <SectionDividerBorder title={FAQSection.title} />
        <div className="flex flex-col gap-4 items-stretch max-w-[1000px] w-full mx-auto p-4">
          {FAQSection.faqs.map((faq) => (
            <FAQ key={faq._id} title={faq.title} text={faq.text} />
          ))}
        </div>
      </Section>
      <Section>
        <SectionDividerBorder title="Villkor" />
        <TwoColumnTextSection text={termsText.text} />
      </Section>

      <Section>
        <SectionDividerBorder title={dvärgväxtText.title} />
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
