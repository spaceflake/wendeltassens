import Button from '../../components/Button';
import FAQ, { FAQProps } from '../../components/FAQ';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import SectionDividerBorder from '../../components/SectionDividerBorder';
import TextAndImage from '../../components/TextAndImage';
import TwoColumnTextSection from '../../components/TwoColumnTextSection';
import dvärgväxtImg from '../../public/dvärgväxt-image-2.jpg';

const FAQPage = () => {
  const aboutRagdollsText = {
    text: 'Om du överväger att adoptera en ragdoll-katt, finns det några saker du kan tänka på: Se till att du har tillräckligt med utrymme i hemmet för en stor katt. Se till att du har tid att ge din ragdoll-katt den socialisering och uppmärksamhet den behöver. Se till att du har råd med den regelbundna vård och förnödenheter som katten behöver, inklusive mat, litter, vaccinationskostnader och eventuella veterinärbesök. Om du har ytterligare frågor om att adoptera en ragdoll-katt, tveka inte att kontakta oss. Vi är här för att hjälpa dig att hitta den perfekta katten för just dig och din familj! Ragdoll-katter är en mycket kärleksfull och lugn ras, och är kända för sin avslappnade attityd och sin förmåga att bli helt slapp när de blir lyckliga eller nöjda. Här är några fakta om ragdoll-katter: Ragdoll-katter är en relativt ny ras, som skapades på 1960-talet i USA. Deras päls är mjuk och silkeslen, och kräver minimal borstning. Ragdoll-katter är mycket sociala och gillar att hänga med sin ägare och andra djur i hemmet. De är ofta mycket lekfulla och kan vara väldigt roliga att leka med. Ragdoll-katter är inte kända för att vara skrikande eller skrikiga, och är oftast mycket lågmälda.De kan bli väldigt stora, med en vikt på upp till 10 kg för hanar och 7 kg för honor.',
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
    {
      title:
        'Kan jag se bilder på tillgängliga kattungar innan jag beslutar att adoptera?',
      text: 'Ja, det är vanligt att djurhem har bilder på sina tillgängliga kattungar på deras hemsida eller sociala medier. Det är även möjligt att få se kattungarna i verkliga livet innan du beslutar att adoptera.',
    },
    {
      title: 'Är alla ragdoll-katter så avslappnade som ryktet säger?',
      text: 'Ragdoll-katter är kända för sin avslappnade attityd, men precis som alla andra katter kan individuella katter vara mer eller mindre avslappnade. Det är viktigt att träffa katten och lära känna den innan du adopterar för att se om den passar in i din livsstil och familj.',
    },
    {
      title: 'Vad kostar det att adoptera en ragdoll-kattunge?',
      text: 'Priset för att adoptera en ragdoll-kattunge varierar beroende på djurhemmet och kattungens ålder. Det är vanligt att djurhem kräver en adoption avgift för att täcka kostnader för vård och vaccinationskostnader',
    },
  ];

  const termsText = {
    text: 'Att katten hålls som innekatt och enbart får vistas ute i rastgård/innätad balkong eller promenad i koppel. Att du har en bra veterinärförsäkring och revaccinerar enl. rekommendation. Viktigt att tänka efter före när det gäller hur man löser semestrar osv. Ibland kommer jag att söka fodervärdar för att kunna komma vidare i mitt avelsarbete. Är du intresserad av att ta hand om en katt och ha kattungar hemma hos dig, med stöd och hjälp av mig förstås, så anmäl gärna intresse för det. Vi skriver kontrakt, och när det är fullföljt, så övergår katten till dig. Detta kan vara en bra början om man vill satsa på egen avel. Jag kommer att behöva fodervärdar både för honor och hanar. Vad detta innebär diskuterar vi noga igenom innan. Jag har aldrig ångrat att jag har givit mitt hjärta till denna underbara ras. Och jag hoppas på att någon av mina katter kan förgylla även din tillvaro. Jag tar 10 000:- för en kattunge till sällskap. Då får du en väl socialiserad, välgosad, miljötränad kattunge, uppfödd på kvalitetsfoder och kärlek. Avelspris diskuteras indivduellt. Jag vill inte att du avlar på en katt som inte är såld med avelsrätt! Berätta gärna om ditt intresse, så kan vi tillsammans välja ut en katt som passar för att avla på. Vill då veta lite om hur dina avelsplaner ser ut, och att du har stamnamn.',
  };

  return (
    <div className="text-DarkBrown">
      <Hero>
        <h1>Ragdolls</h1>
        <div className=" ml-auto mt-4"></div>
      </Hero>
      <div className="mt-28">
        <SectionDividerBorder title="Om Ragdolls" />
      </div>
      <Section>
        <TwoColumnTextSection
          text={aboutRagdollsText.text}
        ></TwoColumnTextSection>
      </Section>
      <SectionDividerBorder title="Frågor & Svar" />
      <Section>
        <div>
          {FAQText.map((faq) => (
            <FAQ title={faq.title} text={faq.text} />
          ))}
          <Section>
            <Button text="Kontakta mig" goTo="/kontakt" />
          </Section>
        </div>
      </Section>
      <SectionDividerBorder title="Villkor" />
      <Section>
        <TwoColumnTextSection text={termsText.text}></TwoColumnTextSection>
      </Section>

      <SectionDividerBorder title="Dvärgväxt" />
      <Section>
        <TextAndImage image={dvärgväxtImg}></TextAndImage>
      </Section>
      <div className="flex justify-center mb-10">
        <Button
          text="Läs mer"
          goTo="/https://scandinavianragdoll.com/dvargvaxt/"
        />
      </div>
    </div>
  );
};

export default FAQPage;
