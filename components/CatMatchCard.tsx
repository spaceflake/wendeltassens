import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';
import catMatchSvg from '../public/catmatch.svg';

type Props = {
  femalename: string;
  maleName: string;
  pedigreeUrl?: string;
  femaleImg: string | StaticImageData;
  maleImg: string | StaticImageData;
};

const CatMatchCard = ({ femalename, maleName, femaleImg, maleImg }: Props) => {
  return (
    <div className="text-DarkBrown py-12 w-full md:w-[40%] md:m-auto">
      <div className="relative">
        <div className="flex items-start ml-6 lg:items-center">
          <Image
            src={femaleImg}
            height={250}
            width={250}
            alt={femalename}
            className="h-28 w-28 md:max-lg:h-36 md:max-lg:w-36 xl:h-[250px] xl:w-[250px] rounded-full object-cover object-top aspect-video"
          />
          <p className="ml-4 italic font-semibold md:ml-4 font-Montserrat">
            {femalename}
          </p>
        </div>
        <Image
          src={catMatchSvg}
          alt=""
          className="absolute inset-0 object-contain object-center w-full h-full"
        />
        <div className="flex flex-row-reverse items-end mr-6 lg:items-center">
          <Image
            src={maleImg}
            height={250}
            width={250}
            alt={maleName}
            className="h-28 w-28 md:max-lg:h-36 md:max-lg:w-36 xl:h-[250px] xl:w-[250px] rounded-full	 object-cover object-top aspect-video"
          />
          <p className="mr-4 italic font-semibold md:mr-4 font-Montserrat">
            {maleName}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          isExternal
          text="Stamtavla"
          goTo="https://stambok.sverak.se/Stambok/Visa/506242"
        />
      </div>
    </div>
  );
};

export default CatMatchCard;
