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
        <div className="flex items-start lg:items-center ml-6">
          <Image
            src={femaleImg}
            alt={femalename}
            className="h-28 w-28 md:max-lg:h-36 md:max-lg:w-36 xl:h-[250px] xl:w-[250px] rounded-full object-cover object-top aspect-video"
          />
          <p className="ml-4 md:ml-4 font-Montserrat font-semibold italic">
            {femalename}
          </p>
        </div>
        <Image
          src={catMatchSvg}
          alt=""
          className="absolute inset-0 object-contain object-center h-full w-full"
        />
        <div className="flex items-end lg:items-center flex-row-reverse mr-6">
          <Image
            src={maleImg}
            alt={maleName}
            className="h-28 w-28 md:max-lg:h-36 md:max-lg:w-36 xl:h-[250px] xl:w-[250px] rounded-full	 object-cover object-top aspect-video"
          />
          <p className="mr-4 md:mr-4  font-Montserrat font-semibold italic">
            {maleName}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          text="Stamtavla"
          goTo="https://stambok.sverak.se/Stambok/Visa/506242"
        />
      </div>
    </div>
  );
};

export default CatMatchCard;
