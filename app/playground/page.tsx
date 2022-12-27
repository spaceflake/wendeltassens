import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Post from '../../components/Post';
import SectionDividerBorder from '../../components/SectionDividerBorder';
import postImg from '../../public/post-img-1.png';

type Props = {};

const page = (props: Props) => {
  const post = {
    title: 'Kattungar',
    text: 'Lorem ipsum dolor sit amet consectetur. Lacus ut id ac nibh. Convallis nam mi amet ut. Fermentum et scelerisque massa proin nisi risus congue. Et penatibus ut ultrices sed. Vel eu at lorem sit ornare. Massa diam donec amet integer. Pellentesque in ultrices arcu velit at. Sed neque et mattis in scelerisque curabitur sit vitae. Orci laoreet mi facilisis aenean neque bibendum ullamcorper. In tincidunt enim aliquam proin nibh velit pellentesque nisi.',
    imgUrl: postImg,
    date: '2022-12-28',
    author: 'Tomas Fridekrans',
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
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
