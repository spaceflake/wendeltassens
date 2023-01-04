import Image from 'next/image';
import heroImg1 from '../public/hero-img-1.png';

type Props = {
  heroImgUrl?: string;
  children?: React.ReactNode;
};

const Hero = ({ children, heroImgUrl }: Props) => {
  return (
    <div className="relative top-0 w-full">
      <div className=" top-0 relative max-h-[900px] overflow-hidden">
        <div className="absolute right-[15%] top-1/2 flex flex-col">
          {children}
        </div>
        <Image
          src={heroImgUrl || heroImg1}
          width={1920}
          height={1080}
          alt="hero image"
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
