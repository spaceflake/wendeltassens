import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';
import femaleCrown from '../public/femaleCrown.svg';
import maleCrown from '../public/maleCrown.svg';

type Props = {
  femalename: string;
  maleName: string;
  pedigreeUrl?: string;
  femaleImg: string | StaticImageData;
  maleImg: string | StaticImageData;
};

const CatMatchCard = ({ femalename, maleName, femaleImg, maleImg }: Props) => {
  return (
    <div className="text-DarkBrown bg-Beige/50 shadow-lg rounded-md catMatch p-8 max-w-[500px]">
      <div className="grid grid-cols-2 justify-center items-stretch pt-6">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center grow">
            <Image
              src={maleCrown}
              alt=""
              height={50}
              width={50}
              className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
            />
            <h6 className="ml-4 italic font-semibold md:ml-4 font-Montserrat text-sm lg:text-base text-center">
              {femalename}
            </h6>
          </div>

          <Image
            src={femaleImg}
            height={100}
            width={100}
            alt={femalename}
            className="w-[100px] h-[100px] xl:h-[120px] xl:w-[120px] rounded-full object-cover object-top aspect-square mt-4"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center grow">
            <Image
              src={femaleCrown}
              alt=""
              height={50}
              width={50}
              className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
            />
            <h6 className="mr-4 italic font-semibold md:mr-4 font-Montserrat text-sm lg:text-base text-center">
              {maleName}
            </h6>
          </div>
          <Image
            src={maleImg}
            height={250}
            width={250}
            alt={maleName}
            className="w-[100px] h-[100px] xl:h-[120px] xl:w-[120px] rounded-full object-cover object-top aspect-square mt-4"
          />
        </div>
      </div>
      {/* <div className="w-3/4 m-auto py-6">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          molestias praesentium eaque qui dolores dolorum asperiores commodi
        </p>
      </div> */}
      <div className=" flex justify-center mt-4">
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
