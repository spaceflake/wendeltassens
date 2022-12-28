import AdultCatCard from '../../components/AdultCatCard';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Post from '../../components/Post';
import SectionDividerBorder from '../../components/SectionDividerBorder';
import postImg from '../../public/post-img-1.png';
import adultCatImg from '../../public/adult-cat-image-1.png';

type Props = {};

const page = (props: Props) => {
  const post = {
    title: 'Kattungar',
    text: 'Lorem ipsum dolor sit amet consectetur. Lacus ut id ac nibh. Convallis nam mi amet ut. Fermentum et scelerisque massa proin nisi risus congue. Et penatibus ut ultrices sed. Vel eu at lorem sit ornare. Massa diam donec amet integer. Pellentesque in ultrices arcu velit at. Sed neque et mattis in scelerisque curabitur sit vitae. Orci laoreet mi facilisis aenean neque bibendum ullamcorper. In tincidunt enim aliquam proin nibh velit pellentesque nisi.',
    imgUrl: adultCatImg,
    date: '2022-12-28',
    author: 'Tomas Fridekrans',
  };

  const adultCatCard = {
    catName: 'Friend Adele',
    catImgUrl: adultCatImg,
    born: '2020-07-19',
    mother: 'SE*Wendeltassens Mary Austin',
    father: 'SE*Mångudinnan Vikings Ragnar',
    color: 'RAG f 03',
    other: 'Chokladbärare',
    pedigreeUrl: 'https://www.google.com',
  };
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
      <div className="space-y-4">
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
      <div className="py-8">
        <AdultCatCard
          catName={adultCatCard.catName}
          catImgUrl={adultCatCard.catImgUrl}
          born={adultCatCard.born}
          mother={adultCatCard.mother}
          father={adultCatCard.father}
          color={adultCatCard.color}
          other={adultCatCard.other}
          pedigreeUrl={adultCatCard.pedigreeUrl}
        />
      </div>
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
