import Footer from '../../components/Footer';
import Header from '../../components/Header';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto">
      <Header />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
