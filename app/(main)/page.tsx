import BorderedTextbox from '../../components/BorderedTextbox';
import Button from '../../components/Button';
import Hero from '../../components/Hero';
import Post from '../../components/Post';
import Section from '../../components/Section';
import PostContainer from '../../components/PostContainer';
import IntroTextHome from '../../components/IntroTextHome';
import { client } from '../../lib/sanity.client';
import { groq } from 'next-sanity';

type Post = {
  title: string;
  text: string;
  image: string;
  publishedAt: string;
};

const postQuery = groq`*[_type == "post"] | order(_createdAt asc) {title, text, image, publishedAt}`;

const Homepage = async () => {
  const posts: Post[] = await client.fetch(postQuery);

  const introbox = {
    title: 'Välkommen till Wendeltassesns Ragdolls!',
    text: 'Vi är stolta över att presentera våra vackra och hälsosamma katter  av den här unika rasen. Med sin lugna och lättsamma personlighet,               och deras mjuka, fluffiga pälsar är Ragdoll katter en dröm för               alla kattälskare. Låt oss hjälpa dig att hitta den perfekta katten  för din familj. Kontakta oss idag för mer information.',
  };

  const borderBox = {
    title: 'Ragdolls',
    text: 'En ragdoll-katt är en mycket lugn och mjuktempererad ras med en tendens att bli totalt avslappnad när den bärs eller hålls. Deras päls är lång och mjuk, och de är ofta stora och kraftigt byggda. De är kända för sin vänliga och tillgiven personlighet och är mycket kärleksfulla mot sina ägare. De är också mycket intelligenta och lätta att träna.',
  };

  const postContainerTitle = 'Senaste nytt';
  return (
    <div>
      <Hero>
        <h1>Våra Ragdolls</h1>
        <div className="mt-4 ml-auto ">
          <Button text="Kattungar" goTo="/kattungar" />
        </div>
      </Hero>
      <Section>
        <IntroTextHome title={introbox.title} text={introbox.text} />
      </Section>
      <Section>
        <BorderedTextbox title={borderBox.title} text={borderBox.text}>
          <Button text="Läs mer..." goTo="/information-villkor" />
        </BorderedTextbox>
      </Section>
      <Section>
        <PostContainer title={postContainerTitle}>
          {posts.map((post) => (
            <Post
              key={post.title}
              title={post.title}
              text={post.text}
              imgUrl={post.image}
              date={post.publishedAt}
            />
          ))}
        </PostContainer>
      </Section>
    </div>
  );
};

export default Homepage;
