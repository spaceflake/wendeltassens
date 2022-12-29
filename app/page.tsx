import Button from '../components/Button';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <div>
      <Hero>
        <h1>Våra Ragdolls</h1>
        <div className=" ml-auto mt-4">
          <Button text="Kattungar" goTo="/kattungar" />
        </div>
      </Hero>
    </div>
  );
};

export default Homepage;
