import Image from 'next/image';
import heroImg1 from '../public/hero-img-1.png';

type Props = {
  heroImgUrl?: string;
  children?: React.ReactNode;
  isHomePage?: boolean;
  alt?: string;
};

const Hero = ({ children, heroImgUrl, isHomePage, alt }: Props) => {
  if (isHomePage) {
    return (
      <div className="relative top-0 w-full">
        <div className=" top-0 relative max-h-[900px] overflow-hidden">
          <div className="absolute bottom-0 flex flex-col items-center justify-center w-full text-center md:right-0 md:w-1/2 md:h-full p-7 bg-gradient-to-r from-WhiteBG/50 to-WhiteBG backdrop:blur-sm">
            {children}
          </div>
          <Image
            src={heroImgUrl || heroImg1}
            width={1920}
            height={1080}
            alt={alt}
            className="object-cover w-full h-auto max-h-screen"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative top-0 w-full md:mt-0">
      <div className=" top-0 relative max-h-[900px] overflow-hidden">
        <div className="absolute bottom-0 w-full py-5 text-center bg-gradient-to-b from-WhiteBG/50 to-WhiteBG backdrop:blur-sm">
          {children}
        </div>
        <Image
          src={heroImgUrl || heroImg1}
          width={1920}
          height={1080}
          alt={alt || ''}
          className="object-cover w-full h-auto max-h-screen"
        />
      </div>
    </div>
  );
};

export default Hero;
