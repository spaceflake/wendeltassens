import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import BorderedTextbox from '../../../components/BorderedTextbox';

const Contact = () => {
  const text =
    'Hej och välkommen till vårt kontaktformulär! Om du har frågor om att adoptera en ragdoll-kattunge, eller har andra frågor som rör våra djur, vänligen fyll i formuläret nedan så svarar vi så snart vi kan. Tänk på att vara så tydlig och detaljerad som möjligt i din fråga, så att vi kan ge dig den bästa möjliga hjälpen. Vi ser fram emot att höra från dig! Med vänliga hälsningar, Wendeltassens';
  return (
    <div>
      <Hero>
        <h1>Kontakt & Frågor</h1>
      </Hero>
      <Section>
        <BorderedTextbox title="Frågor?" text={text} />
      </Section>
      <Section>
        <div className="grid grid-cols-1 p-12 divide-y lg:grid-cols-2 bg-Beige rounded-xl lg:divide-x lg:divide-y-0 divide-dotted divide-DarkBrown mb-36">
          <div className="pb-10 space-y-4 text-lg font-bold font-Montserrat text-DarkBrown lg:pr-10">
            <p>
              Går bra att skicka en förfrågan via formuläret bredvid eller så
              kan du kontakta mig direkt.
            </p>
            <div>
              <p>Liselotte Wendel</p>
              <p>mail: lise_lotte_1@hotmail.com</p>
              <p>telefon: 0702040670</p>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col pt-10 space-y-4 font-bold text-DarkBrown lg:pl-10 lg:pt-0"
          >
            <label htmlFor="name" className="block">
              <span>Ditt namn</span>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full mt-1 border-transparent rounded-md bg-Beige focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="email" className="block">
              <span>Din email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full mt-1 border-transparent rounded-md bg-Beige focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="subject" className="block">
              <span>Ämne</span>
              <input
                type="text"
                name="subject"
                id="subject"
                className="block w-full mt-1 border-transparent rounded-md bg-Beige focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="message" className="block">
              <span>Ditt meddelande</span>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={7}
                className="block w-full mt-1 border-transparent rounded-md bg-Beige focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <input
              type="submit"
              value="Skicka"
              className="py-4 rounded-md bg-SuperBrown text-Beige"
            />
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
