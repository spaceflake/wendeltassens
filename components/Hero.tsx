import Image from 'next/image';
import heroImg1 from '../public/hero-img-1.png';

type Props = {
  heroImgUrl?: string;
  children?: React.ReactNode;
  isHomePage?: boolean;
};

const Hero = ({ children, heroImgUrl, isHomePage }: Props) => {
  if (isHomePage) {
    return (
      <div className="relative top-0 w-full mt-32">
        <div className=" top-0 relative max-h-[900px] overflow-hidden">
          <div className="absolute bottom-0 flex flex-col items-center justify-center text-center md:right-0 md:w-1/2 md:h-full p-7 bg-gradient-to-r from-WhiteBG/50 to-WhiteBG backdrop:blur-sm">
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
  }
  return (
    <div className="relative top-0 w-full mt-20 md:mt-0">
      <div className=" top-0 relative max-h-[900px] overflow-hidden">
        <div className="absolute bottom-0 w-full py-5 text-center bg-gradient-to-b from-WhiteBG/50 to-WhiteBG backdrop:blur-sm">
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
