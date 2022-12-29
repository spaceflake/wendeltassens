import Image from 'next/image';
import BorderedTextbox from '../../components/BorderedTextbox';
import Button from '../../components/Button';
import Section from '../../components/Section';
import mammaBild from '../../public/mammakatt.jpg';
import pappaBild from '../../public/pappakatt.jpg';

const About = () => {
  const borderedTextboxText = {
    title: 'Om mig',
    text: 'En liten presentation av mig. En kvinna, född -67 i Karlskrona, men sedan -89 bosatt i Göteborg. Sommaren -14 flyttade vi till eget byggt hus utanför Kungsbacka. Jag har haft djur av alla de sorter när jag växte upp, allt från vandrande pinnar, till fågel, hund och katt. Jag är gift med Martin och tillsammans har vi en son, Axel. Martin har en tjej sedan innan och jag två. Så under många år levde vi i storfamilj. Tjejerna är stora nu och har startat sina vuxenliv. Jag har också hållt på med hästar i många år. Började på ponny, red sedan stor häst på ridskola under ett antal år. Efter en otäck avåkning för några år sedan, valde jag att gå över på islandshäst. Inte mindre häst, även om den inte är så hög över marken, men stadigare och vänligare i lynnet. Jag arbetade inom funktionstöd i 12 år men har numera gått tillbaka till att jobba med vår äldre generation. Detta på ett demensboende i Åsa. Det trivs jag väldigt bra med. Goa äldre och goa kollegor. Och så har jag gjort ytterligare ett stort val i livet. 2012 fick jag mitt stamnamn godkänt och jag älskar verkligen att vara uppfödare av vår underbara ras, Ragdoll! Mitt mål med uppfödningen är att föda upp rastypiska, friska och sociala ragdolls som kommer att förgylla tillvaron för sina familjer för många år framöver.',
  };
  return (
    <div className="r">
      <div className="mt-56 mb-24 flex center justify-center">
        <Image
          className="rounded-md origin-bottom -rotate-12 w-[110px] h-[160px] md:w-[200px] md:h-[240px]"
          width={110}
          height={160}
          src={mammaBild}
          alt="mamma"
        />
        <Image
          className="rounded-md origin-center rotate-12 w-[110px] h-[160px] md:w-[200px] md:h-[240px]"
          width={110}
          height={160}
          src={pappaBild}
          alt="pappa"
        />
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
