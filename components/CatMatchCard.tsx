import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';
import catMatch from '../public/catmatch.svg';

type Props = {
  name1: string;
  name2: string;
  pedigreeUrl?: string;
  catImgUrl1: string | StaticImageData;
  catImgUrl2: string | StaticImageData;
};

const CatMatchCard = ({
  name1,
  name2,
  pedigreeUrl,
  catImgUrl1,
  catImgUrl2,
}: Props) => {
  return (
    <div className="backgroundMatchCard mr-[1rem] ml-[1rem] lg:mr-[11rem] lg:ml-[11rem]">
      <div className="flex items-center">
        <Image
          src={catImgUrl1}
          alt={name1}
          className="h-[250px] w-[250px] rounded-full object-cover object-top aspect-video"
        />
        <p className="ml-[1rem] md:ml-[3rem] font-Montserrat font-semibold italic">
          {name1}
        </p>
      </div>
      <div className="flex items-center flex-row-reverse mt-[10rem]">
        <Image
          src={catImgUrl2}
          alt={name2}
          className="h-[250px] w-[250px] rounded-full	 object-cover object-top aspect-video"
        />
        <p className="mr-[1rem] md:mr-[3rem]  font-Montserrat font-semibold italic">
          {name2}
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
