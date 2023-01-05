import Image from 'next/image';
import { useState } from 'react';
import heroImg1 from '../public/hero-img-1.png';

type Props = {
  carouselImages: string[];
  children?: React.ReactNode;
};

const AboutCarousel = ({ carouselImages, children }: Props) => {
  return (
    <div className="relative top-0 w-full">
      <div className=" top-0 relative max-h-[900px] overflow-hidden">
        <div className="absolute right-[15%] top-1/2 flex flex-col">
          {children}
        </div>
        {carouselImages.map((image) => (
          <Image
            src={image}
            width={1920}
            height={1080}
            alt="hero image"
            className="object-contain w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCarousel;
