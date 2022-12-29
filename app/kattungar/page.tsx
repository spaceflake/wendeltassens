import BorderedTextbox from '../../components/BorderedTextbox';
import Button from '../../components/Button';
import CatMatchCard from '../../components/CatMatchCard';
import Hero from '../../components/Hero';
import KittenOverview from '../../components/KittenOverview';
import SectionDividerBorder from '../../components/SectionDividerBorder';
import adultCatImg from '../../public/adult-cat-image-1.png';
import catMatch1 from '../../public/cat1.jpg';

const borderedTextboxText = {
  title: 'Våra katter',
  text: ' De är alla vackra exemplar av den här unika rasen, med sina blå ögon och mjuka, fluffiga pälsar. De är kända för sin lugna och lättsamma personlighet, och är ofta beskrivna som "valpliknande" i sin kärleksfulla natur. Min kattungar är väldigt sociala och lekfulla, och kommer att bli utmärkta familjemedlemmar. De är också lätta att sköta om, eftersom Ragdoll katter är en lågvårdsraser. Jag har kattungar i flera olika färger och mönster, inklusive seal, blue, chocolate, lilac och red point. De kan också ha mönster som bicolor, mitted och lynx.Om du är intresserad av att adoptera en av mina Ragdoll kattungar, vänligen kontakta mig för mer information. Jag ser fram emot att hjälpa dig att hitta den perfekta katten för din familj.',
};

const catMatchCard = {
  femaleName: 'Lucifer',
  maleName: 'Mona Lisa',
  pedigreeUrl: 'https://www.google.com',
  catImgUrl1: adultCatImg,
  catImgUrl2: catMatch1,
};

const Kittens = () => {
  return (
    <div>
      <Hero>
        <h1 className="text-center">Kattungar</h1>
        <div className=" ml-auto mt-4"></div>
      </Hero>
      <div className="mt-36">
        <BorderedTextbox
          title={borderedTextboxText.title}
          text={borderedTextboxText.text}
        >
          <div className=" flex justify-center mb-[2rem]">
            <Button text="Läs mer" />
          </div>
        </BorderedTextbox>
      </div>
      <div className="py-[150px] bg-[#80756B]/10 shadow-inner flex flex-col items-center space-y-4">
        <h2>Tillgängliga kattungar</h2>
        <KittenOverview
          birthDate="2022-11-24"
          father="SE*Mångudinnan Vikings Ragnar"
          mother="SE*Wendeltassens Mary Austin"
          title="Månskenskullen"
        />
        <KittenOverview
          birthDate="2022-11-24"
          father="SE*Mångudinnan Vikings Ragnar"
          mother="SE*Wendeltassens Mary Austin"
          title="Månskenskullen"
        />
      </div>
      <SectionDividerBorder title="Planerade kullar" />
      <div className="w-[80%] md:w-[50%] m-auto">
        <p className=" first-letter:text-8xl first-letter:font-Tangerine font-Montserrat font-semibold italic text-2xl text-center text-DarkBrown">
          Vi är glada att kunna meddelar att vi har planer på att para samman
          våra två vackra ragdoll-katter. Vi tror att deras unika egenskaper
          kommer att resultera i vackra och hälsosamma kattungar, och vi ser
          mycket fram emot att få följa deras utveckling. Vi kommer att vara
          mycket noga med att välja rätt parningar för att säkerställa att
          kattungarna får den bästa möjliga starten i livet, och vi kommer att
          ge dem all kärlek och omtanke de behöver under deras första veckor. Om
          du är intresserad av att adoptera en kattunge från oss, vänligen hör
          av dig så kan vi ge dig mer information och lägga dig på vår
          intresselista. Tack för att du visar intresse för våra vackra
          ragdoll-katter!
        </p>
      </div>
      <section className="bg-Beige/50 m-auto">
        <div className="mt-10 mb-10">
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
