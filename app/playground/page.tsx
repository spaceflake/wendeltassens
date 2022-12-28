import AdultCatCard from '../../components/AdultCatCard';
import BorderedTextbox from '../../components/BorderedTextbox';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Post from '../../components/Post';
import SectionDividerBorder from '../../components/SectionDividerBorder';
import postImg from '../../public/post-img-1.png';
import adultCatImg from '../../public/adult-cat-image-1.png';
import TwoColumnTextSection from '../../components/TwoColumnTextSection';

type Props = {};

const page = (props: Props) => {
  const post = {
    title: 'Kattungar',
    text: 'Lorem ipsum dolor sit amet consectetur. Lacus ut id ac nibh. Convallis nam mi amet ut. Fermentum et scelerisque massa proin nisi risus congue. Et penatibus ut ultrices sed. Vel eu at lorem sit ornare. Massa diam donec amet integer. Pellentesque in ultrices arcu velit at. Sed neque et mattis in scelerisque curabitur sit vitae. Orci laoreet mi facilisis aenean neque bibendum ullamcorper. In tincidunt enim aliquam proin nibh velit pellentesque nisi.',
    imgUrl: postImg,
    date: '2022-12-28',
    author: 'Tomas Fridekrans',
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
    <div className="container mx-auto relative">
      <Header />
      <Hero>
        <h1>Våra Ragdolls</h1>
        <div className=" ml-auto mt-4">
          <Button text="Kattungar" goTo="/kattungar" />
        </div>
      </Hero>
      <div className="mt-[5rem]">
        <BorderedTextbox
          title="Intro"
          text='Jag är stolt över att presentera mina vuxna Ragdoll honor och hanar som jag använder för avel. Mina katter är alla vackra exemplar av den här unika rasen, med sina blå ögon och mjuka, fluffiga pälsar. De är kända för sin lugna och lättsamma personlighet, och är ofta beskrivna som "valpliknande" i sin kärleksfulla natur. De är också kända för sin intelligens och förmåga att lära sig tricks.
          Jag har Ragdoll katter i flera olika färger och mönster, inklusive seal, blue, chocolate, lilac och red point. De kan också ha mönster som bicolor, mitted och lynx.'
        >
          <div className=" flex justify-center mb-[2rem]">
            <Button text="Läs mer" />
          </div>
        </BorderedTextbox>
      </div>
      <SectionDividerBorder title="Sektion Titel" />
      <div className="space-y-4">
        <Post
          title={post.title}
          text={post.text}
          imgUrl={post.imgUrl}
          date={post.date}
          author={post.author}
        />
        <Post
          title={post.title}
          text={post.text}
          date={post.date}
          author={post.author}
        />
      </div>
      <div className="py-8">
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
        ></TwoColumnTextSection>
      </div>
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
