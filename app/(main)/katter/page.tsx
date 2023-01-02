import AdultCatCard from '../../../components/AdultCatCard';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import SectionDividerBorder from '../../../components/SectionDividerBorder';
import adultCatImg from '../../../public/adult-cat-image-1.png';

const AdultCats = () => {
  const borderedTextboxText = {
    title: 'Avelskatter',
    text: 'Jag är stolt över att presentera mina vuxna Ragdoll honor och hanar som jag använder för avel. Mina katter är alla vackra exemplar av den här unika rasen, med sina blå ögon och mjuka, fluffiga pälsar. De är kända för sin lugna och lättsamma personlighet, och är ofta beskrivna som "valpliknande" i sin kärleksfulla natur. De är också kända för sin intelligens och förmåga att lära sig tricks. Jag har Ragdoll katter i flera olika färger och mönster, inklusive seal, blue, chocolate, lilac och red point. De kan också ha mönster som bicolor, mitted och lynx.',
  };

  const adultCatCard = {
    catName: 'Friend Adele',
    catImgUrl: adultCatImg,
    born: '2020-07-19',
    mother: 'SE*Wendeltassens Mary Austin',
    father: 'SE*Mångudinnan Vikings Ragnar',
    color: 'RAG f 03',
    other: 'Chokladbärare',
    pedigreeUrl: 'https://www.google.com',
  };

  return (
    <div>
      <Hero>
        <h1 className="text-center text-AngelBlue">
          Våra Kungar
          <br /> &<br /> Drottningar
        </h1>
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
          <AdultCatCard
            catName={adultCatCard.catName}
            catImgUrl={adultCatCard.catImgUrl}
            born={adultCatCard.born}
            mother={adultCatCard.mother}
            father={adultCatCard.father}
            color={adultCatCard.color}
            other={adultCatCard.other}
            pedigreeUrl={adultCatCard.pedigreeUrl}
          />
          <AdultCatCard
            catName={adultCatCard.catName}
            catImgUrl={adultCatCard.catImgUrl}
            born={adultCatCard.born}
            mother={adultCatCard.mother}
            father={adultCatCard.father}
            color={adultCatCard.color}
            other={adultCatCard.other}
            pedigreeUrl={adultCatCard.pedigreeUrl}
          />
        </div>
      </Section>
      <Section>
        <SectionDividerBorder title="Våra Drottningar/Honor" />
        <div className="flex flex-col items-center space-y-4">
          <AdultCatCard
            catName={adultCatCard.catName}
            catImgUrl={adultCatCard.catImgUrl}
            born={adultCatCard.born}
            mother={adultCatCard.mother}
            father={adultCatCard.father}
            color={adultCatCard.color}
            other={adultCatCard.other}
            pedigreeUrl={adultCatCard.pedigreeUrl}
          />
          <AdultCatCard
            catName={adultCatCard.catName}
            catImgUrl={adultCatCard.catImgUrl}
            born={adultCatCard.born}
            mother={adultCatCard.mother}
            father={adultCatCard.father}
            color={adultCatCard.color}
            other={adultCatCard.other}
            pedigreeUrl={adultCatCard.pedigreeUrl}
          />
        </div>
      </Section>
    </div>
  );
};

export default AdultCats;
