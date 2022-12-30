import Hero from '../../components/Hero';
import Section from '../../components/Section';
import BorderedTextbox from '../../components/BorderedTextbox';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 p-12 bg-Beige rounded-xl divide-y lg:divide-x lg:divide-y-0 divide-dotted divide-DarkBrown mb-36">
          <div className="font-Montserrat text-DarkBrown text-lg pb-10 lg:pr-10 font-bold space-y-4">
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
            className="flex flex-col text-DarkBrown space-y-4 font-bold pt-10 lg:pl-10 lg:pt-0"
          >
            <label htmlFor="name" className="block">
              <span>Ditt namn</span>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-Beige
                    border-transparent
                    focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="email" className="block">
              <span>Din email</span>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-Beige
                    border-transparent
                    focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="subject" className="block">
              <span>Ämne</span>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-Beige
                    border-transparent
                    focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="message" className="block">
              <span>Ditt meddelande</span>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={7}
                className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-Beige
                    border-transparent
                    focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <input
              type="submit"
              value="Skicka"
              className="bg-SuperBrown text-Beige py-4 rounded-md"
            />
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
