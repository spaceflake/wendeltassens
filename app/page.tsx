import BorderedTextbox from '../components/BorderedTextbox';
import Button from '../components/Button';
import Hero from '../components/Hero';
import postImg from '../public/post-img-1.png';
import Post from '../components/Post';
import Image from 'next/image';
import swirl from '../public/swirl.svg';
import swirl2 from '../public/swirl2.svg';
import Section from '../components/Section';

const Homepage = () => {
  const post = {
    title: 'Kattungar',
    text: 'Lorem ipsum dolor sit amet consectetur. Lacus ut id ac nibh. Convallis nam mi amet ut. Fermentum et scelerisque massa proin nisi risus congue. Et penatibus ut ultrices sed. Vel eu at lorem sit ornare. Massa diam donec amet integer. Pellentesque in ultrices arcu velit at. Sed neque et mattis in scelerisque curabitur sit vitae. Orci laoreet mi facilisis aenean neque bibendum ullamcorper. In tincidunt enim aliquam proin nibh velit pellentesque nisi.',
    imgUrl: postImg,
    date: '2022-12-28',
    author: 'Tomas Fridekrans',
  };
  return (
    <div>
      <Hero>
        <h1>Våra Ragdolls</h1>
        <div className=" ml-auto mt-4">
          <Button text="Kattungar" goTo="/kattungar" />
        </div>
      </Hero>
      <Section>
        <Image src={swirl} alt="Swirl" className="self-end hidden lg:block" />
        <div className="text-center max-w-[436px]">
          <h2 className="text-3xl lg:text-[4rem] leading-none">
            Välkommen till Wendeltassesns Ragdolls!
          </h2>
          <p className="text-center text-DarkBrown font-Montserrat text-sm lg:text-2xl px-3 lg:px-0 mt-4">
            Vi är stolta över att presentera våra vackra och hälsosamma katter
            av den här unika rasen. Med sin lugna och lättsamma personlighet,
            och deras mjuka, fluffiga pälsar är Ragdoll katter en dröm för alla
            kattälskare. Låt oss hjälpa dig att hitta den perfekta katten för
            din familj. Kontakta oss idag för mer information.
          </p>
        </div>
        <Image src={swirl2} alt="Swirl" className="self-end hidden lg:block" />
      </Section>
      <Section>
        <BorderedTextbox
          title={'Ragdolls'}
          text={
            'En ragdoll-katt är en mycket lugn och mjuktempererad ras med en tendens att bli totalt avslappnad när den bärs eller hålls. Deras päls är lång och mjuk, och de är ofta stora och kraftigt byggda. De är kända för sin vänliga och tillgiven personlighet och är mycket kärleksfulla mot sina ägare. De är också mycket intelligenta och lätta att träna.'
          }
        >
          <Button text="Läs mer..." goTo="/information-villkor" />
        </BorderedTextbox>
      </Section>
      <Section>
        <div className="flex flex-col justify-center px-3">
          <h2 className="text-center">Senaste uppdateringar</h2>
          <div className="space-y-4 flex flex-col items-center mt-8 lg:mt-16">
            <Post
              title={post.title}
              text={post.text}
              imgUrl={post.imgUrl}
              date={post.date}
              author={post.author}
            />
            <Post
              title={post.title}
              text={post.text}
              date={post.date}
              author={post.author}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Homepage;
