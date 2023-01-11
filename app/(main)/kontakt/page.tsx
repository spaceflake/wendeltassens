import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import BorderedTextbox from '../../../components/BorderedTextbox';
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';

const pageQuery = groq`*[_type == "page" && title == "Kontakt"] {
  heroTitle,
  "heroImgUrl": heroImage.asset->url,
  "components": component[]->{
    _type, 
    title, 
    text, 
    buttonText,
    buttonPath,
    
    _type == 'contactInformation' => {
        name, email, phoneNumber
    }
  }
}`;

const Contact = async () => {
  const pageMeta: Page[] = await client.fetch(pageQuery);

  const { heroImgUrl, heroTitle } = pageMeta[0];

  const components = pageMeta.map((page) => page.components) as Component[][];

  const borderedTextboxText: TextboxBordered = components[0].find(
    (component) => component._type === 'textboxBordered'
  ) as TextboxBordered;

  const informationText: Textblock = components[0].find(
    (component) => component._type === 'textblock'
  ) as Textblock;

  const contactInformation: ContactInformation = components[0].find(
    (component) => component._type === 'contactInformation'
  ) as ContactInformation;

  return (
    <div>
      <Hero heroImgUrl={heroImgUrl}>
        <h1>{heroTitle}</h1>
      </Hero>
      <Section>
        <BorderedTextbox
          title={borderedTextboxText.title}
          text={borderedTextboxText.text}
          buttonPath={borderedTextboxText.buttonPath}
          buttonText={borderedTextboxText.buttonText}
        />
      </Section>
      <Section>
        <div className="grid grid-cols-1 p-12 divide-y lg:grid-cols-2 bg-Beige rounded-xl lg:divide-x lg:divide-y-0 divide-dotted divide-DarkBrown mb-36">
          <div className="pb-10 space-y-4 text-lg font-bold font-Montserrat text-DarkBrown lg:pr-10">
            <p>{informationText.text}</p>
            <div>
              <p>{contactInformation.name}</p>
              <p>Email: {contactInformation.email}</p>
              <p>Telefon: {contactInformation.phoneNumber}</p>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col pt-10 space-y-4 font-bold text-DarkBrown lg:pl-10 lg:pt-0"
          >
            <label htmlFor="name" className="block">
              <span>Namn</span>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full mt-1 border-transparent rounded-md bg-Beige focus:border-DarkBrown focus:bg-WhiteBG focus:ring-0"
              />
            </label>
            <label htmlFor="email" className="block">
              <span>Email</span>
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
              <span>Meddelande</span>
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
