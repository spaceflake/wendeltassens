import Hero from '../../../../components/Hero';
import Section from '../../../../components/Section';
import BorderedTextbox from '../../../../components/BorderedTextbox';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import ContactForm from '../../../../components/ContactForm';

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
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
