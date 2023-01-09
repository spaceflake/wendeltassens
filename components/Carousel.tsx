'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  imageList: string[];
};

const Carousel = ({ imageList }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % imageList.length;

  useEffect(() => {
    const id = setTimeout(() => setCurrentIndex(nextIndex), 5000);
    return () => clearTimeout(id);
  }, [currentIndex]);

  return (
    <div className="relative top-0 w-full">
      <div className="top-0 relative aspect-video overflow-hidden">
        {imageList.map((image, index) => {
          let className =
            'object-cover w-full h-auto aspect-video absolute top-0';

          if (index === currentIndex) {
            className += ' animate-carousel-slide-current left-0';
          } else if (index === nextIndex) {
            className += ' animate-carousel-slide-next left-full';
          } else {
            className += ' left-full';
          }

          return (
            <Image
              key={image}
              src={image}
              width={1920}
              height={500}
              alt={'Karusell bild'}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
