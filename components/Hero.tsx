import Image from 'next/image';
import heroImg1 from '../public/hero-Img-1.png';

type Props = {
  children?: React.ReactNode;
};

const Hero = ({ children }: Props) => {
  return (
    <div className="relative top-0 w-full">
      <div className=" top-0 relative max-h-[900px] overflow-hidden">
        <div className="absolute right-[15%] top-1/2 flex flex-col">
          {children}
        </div>
        <Image
          src={heroImg1}
          alt="hero image"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
