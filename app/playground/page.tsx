import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto relative">
      <Header />
      <Hero>
        <h1>Våra Ragdolls</h1>
        <Button text="Kattungar" goTo="/kattungar" />
      </Hero>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
