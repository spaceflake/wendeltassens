import AdultCatCard from '../../../components/AdultCatCard';
import BorderedTextbox from '../../../components/BorderedTextbox';
import Button from '../../../components/Button';
import CatMatchCard from '../../../components/CatMatchCard';
import FAQ, { FAQProps } from '../../../components/FAQ';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import KittenOverview from '../../../components/KittenOverview';
import Post from '../../../components/Post';
import SectionDividerBorder from '../../../components/SectionDividerBorder';
import TextAndImage from '../../../components/TextAndImage';
import TwoColumnTextSection from '../../../components/TwoColumnTextSection';
import adultCatImg from '../../../public/adult-cat-image-1.png';
import catMatch1 from '../../../public/cat1.jpg';
import dvärgväxtImg from '../../../public/dvärgväxt-image-2.jpg';

type Props = {};

const page = (props: Props) => {
  const post = {
    title: 'Kattungar',
    text: 'Lorem ipsum dolor sit amet consectetur. Lacus ut id ac nibh. Convallis nam mi amet ut. Fermentum et scelerisque massa proin nisi risus congue. Et penatibus ut ultrices sed. Vel eu at lorem sit ornare. Massa diam donec amet integer. Pellentesque in ultrices arcu velit at. Sed neque et mattis in scelerisque curabitur sit vitae. Orci laoreet mi facilisis aenean neque bibendum ullamcorper. In tincidunt enim aliquam proin nibh velit pellentesque nisi.',
    imgUrl: '',
    date: '2022-12-28',
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

  const catMatchCard = {
    femaleName: 'Lucifer',
    maleName: 'Mona Lisa',
    pedigreeUrl: 'https://www.google.com',
    catImgUrl1: adultCatImg,
    catImgUrl2: catMatch1,
  };

  const FAQText: FAQProps[] = [
    {
      title: 'Hur lång är processen för att adoptera en ragdoll-kattunge?',
      text: 'Processen varierar från djurhem till djurhem, men det är vanligt att det finns en ansökningsformulär att fylla i, samt att djurhemmet vill träffa potentiella ägare för att se till att de är lämpliga för en kattunge.',
    },
    {
      title: 'Kan jag adoptera en vuxen ragdoll-katt?',
      text: 'Ja, många djurhem har både kattungar och vuxna katter tillgängliga för adoption.',
    },
  ];
  return (
    <div className="container relative mx-auto">
      <Header />
      <Hero>
        <h1>Våra Ragdolls</h1>
        <div className="mt-4 ml-auto ">
          <Button text="Kattungar" goTo="/kattungar" />
        </div>
      </Hero>
      <div className="mt-[5rem]">
        {/* <BorderedTextbox
          title="Intro"
          text='Jag är stolt över att presentera mina vuxna Ragdoll honor och hanar som jag använder för avel. Mina katter är alla vackra exemplar av den här unika rasen, med sina blå ögon och mjuka, fluffiga pälsar. De är kända för sin lugna och lättsamma personlighet, och är ofta beskrivna som "valpliknande" i sin kärleksfulla natur. De är också kända för sin intelligens och förmåga att lära sig tricks.
          Jag har Ragdoll katter i flera olika färger och mönster, inklusive seal, blue, chocolate, lilac och red point. De kan också ha mönster som bicolor, mitted och lynx.'
        >
          <div className=" flex justify-center mb-[2rem]">
            <Button text="Läs mer" />
          </div>
        </BorderedTextbox> */}
      </div>
      <SectionDividerBorder title="Sektion Titel" />
      <div className="flex flex-col items-center space-y-4">
        <Post title={post.title} text={post.text} date={post.date} />
        <Post title={post.title} text={post.text} date={post.date} />
      </div>
      <div className="flex flex-col items-center py-8 space-y-4">
        {/* <AdultCatCard
          name={adultCatCard.catName}
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
          inverted
        /> */}
      </div>
      <div className="py-[150px] bg-[#80756B]/10 shadow-inner flex flex-col items-center space-y-4">
        <h2>Tillgängliga kattungar</h2>
        <KittenOverview
          birthDate="2022-11-24"
          father="SE*Mångudinnan Vikings Ragnar"
          mother="SE*Wendeltassens Mary Austin"
          title="Månskenskullen"
        />
      </div>
      <SectionDividerBorder title="Villkor" />
      <div>
        <TwoColumnTextSection
          text="Om du överväger att adoptera en ragdoll-katt, finns det några saker du kan tänka på:

Se till att du har tillräckligt med utrymme i hemmet för en stor katt.
Se till att du har tid att ge din ragdoll-katt den socialisering och uppmärksamhet den behöver.
Se till att du har råd med den regelbundna vård och förnödenheter som katten behöver, inklusive mat, litter, vaccinationskostnader och eventuella veterinärbesök.


Om du har ytterligare frågor om att adoptera en ragdoll-katt, tveka inte att kontakta oss. Vi är här för att hjälpa dig att hitta den perfekta katten för just dig och din familj! Ragdoll-katter är en mycket kärleksfull och lugn ras, och är kända för sin avslappnade attityd och sin förmåga att bli helt slapp när de blir lyckliga eller nöjda. Här är några fakta om ragdoll-katter:

Ragdoll-katter är en relativt ny ras, som skapades på 1960-talet i USA.
Deras päls är mjuk och silkeslen, och kräver minimal borstning.
Ragdoll-katter är mycket sociala och gillar att hänga med sin ägare och andra djur i hemmet.
De är ofta mycket lekfulla och kan vara väldigt roliga att leka med.
Ragdoll-katter är inte kända för att vara skrikande eller skrikiga, och är oftast mycket lågmälda.
De kan bli väldigt stora, med en vikt på upp till 10 kg för hanar och 7 kg för honor.

"
        >
          <div className="flex justify-center mt-[2rem]">
            <Button text="Läs mer" />
          </div>
        </TwoColumnTextSection>
      </div>
      <div>
        <CatMatchCard
          femalename={catMatchCard.femaleName}
          maleName={catMatchCard.maleName}
          femaleImg={catMatchCard.catImgUrl1}
          maleImg={catMatchCard.catImgUrl2}
        />
      </div>
      <div>
        <TextAndImage image={dvärgväxtImg} text="" />
      </div>
      <div>
        <SectionDividerBorder title="Frågor & Svar" />
        {FAQText.map((faq) => (
          <FAQ title={faq.title} text={faq.text} />
        ))}
      </div>
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
