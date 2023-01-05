import { groq } from 'next-sanity';
import AdultCatCard from '../../../components/AdultCatCard';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import SectionDividerBorder from '../../../components/SectionDividerBorder';
import { client } from '../../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && title == "Katter"] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "components": component[]->{
    _type,
    title,
    text,
    
    _type == 'catSection' => {
      cats[]->{
        ...,
        "catImgUrl": catImgUrl.asset->url,
      }
    }
  }
}`;

const AdultCats = async () => {
  const pageMeta: Page[] = await client.fetch(pageQuery);

  const { heroImgUrl, heroTitle } = pageMeta[0];

  const components = pageMeta.map((page) => page.components) as Component[][];

  const borderedTextboxText: TextboxBordered = components[0].find(
    (component) => component._type === 'textboxBordered'
  ) as TextboxBordered;

  const catSections: CatSection[] = components[0].filter(
    (component) => component._type === 'catSection'
  ) as CatSection[];

  return (
    <div>
      <Hero heroImgUrl={heroImgUrl}>
        <h1 className="text-center text-AngelBlue">{heroTitle}</h1>
        <div className="mt-4 ml-auto "></div>
      </Hero>
      <Section>
        <BorderedTextbox
          title={borderedTextboxText.title}
          text={borderedTextboxText.text}
        ></BorderedTextbox>
      </Section>
      <Section>
        <SectionDividerBorder title="Våra Kungar/Hanar" />
        <div className="flex flex-col items-center space-y-4">
          {catSections.map((catSection) =>
            catSection.cats.map((cat) => (
              <AdultCatCard
                breeder={cat.breeder}
                catName={cat.name}
                catImgUrl={cat.catImgUrl}
                born={cat.birthDate.split('T')[0]}
                mother={cat.motherName}
                father={cat.fatherName}
                color={cat.colorCode}
                other={cat.information}
                pedigreeUrl={cat.pedigreeUrl}
              />
            ))
          )}
        </div>
      </Section>
      <Section>
        <SectionDividerBorder title="Våra Drottningar/Honor" />
        <div className="flex flex-col items-center space-y-4">
          {catSections.map((catSection) =>
            catSection.cats.map((cat) => (
              <AdultCatCard
                breeder={cat.breeder}
                catName={cat.name}
                catImgUrl={cat.catImgUrl}
                born={cat.birthDate.split('T')[0]}
                mother={cat.motherName}
                father={cat.fatherName}
                color={cat.colorCode}
                other={cat.information}
                pedigreeUrl={cat.pedigreeUrl}
              />
            ))
          )}
        </div>
      </Section>
    </div>
  );
};

export default AdultCats;
