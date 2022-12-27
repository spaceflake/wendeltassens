import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import SectionDividerBorder from '../../components/SectionDividerBorder';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto relative">
      <Header />
      <Hero>
        <h1>Våra Ragdolls</h1>
        <div className=" ml-auto mt-4">
          <Button text="Kattungar" goTo="/kattungar" />
        </div>
      </Hero>
      <SectionDividerBorder title="Sektion Titel" />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
