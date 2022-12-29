import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';

type Props = {
  femalename: string;
  maleName: string;
  pedigreeUrl?: string;
  femaleImg: string | StaticImageData;
  maleImg: string | StaticImageData;
};

const CatMatchCard = ({ femalename, maleName, femaleImg, maleImg }: Props) => {
  return (
    <div className="backgroundMatchCard  text-DarkBrown pt-6 pb-6 w-full md:w-[40%] md:m-auto">
      <div className="flex items-center">
        <Image
          src={femaleImg}
          alt={femalename}
          className="h-[250px] w-[250px] rounded-full object-cover object-top aspect-video"
        />
        <p className="ml-[1rem] md:ml-[3rem] font-Montserrat font-semibold italic">
          {femalename}
        </p>
      </div>
      <div className="flex items-center flex-row-reverse mt-[20rem]">
        <Image
          src={maleImg}
          alt={maleName}
          className="h-[250px] w-[250px] rounded-full	 object-cover object-top aspect-video"
        />
        <p className="mr-[1rem] md:mr-[3rem]  font-Montserrat font-semibold italic">
          {maleName}
        </p>
      </div>
      <div className="flex justify-center mt-[5rem]">
        <Button
          text="Stamtavla"
          goTo="https://stambok.sverak.se/Stambok/Visa/506242"
        />
      </div>
    </div>
  );
};

export default CatMatchCard;
