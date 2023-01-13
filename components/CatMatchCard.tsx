import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from './Button';
import catMatchSvg from '../public/catmatch.svg';
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
    <div className="text-DarkBrown py-12 flex justify-center">
      <div className="relative bg-Beige/50 border border-DarkBrown/50 shadow-lg rounded-full h-[25rem] w-[25rem] lg:w-[500px] lg:h-[500px]">
        <div className="h-full flex justify-center flex-col px-12">
          <div className="flex items-center sm:items-start ml-10 mb-2 lg:mb-20 xl:mb-10 sm:mb-10 mt-10 sm:mt-0 flex-col-reverse sm:flex-row">
            <Image
              src={femaleImg}
              height={100}
              width={100}
              alt={femalename}
              className="h-[100px] w-[100px] xl:h-[120px] xl:w-[120px] rounded-full object-cover object-top aspect-square"
            />
            <div className="flex flex-col items-center">
              <Image src={maleCrown} alt="" height={50} width={50} />
              <p className="ml-4 italic font-semibold md:ml-4 font-Montserrat">
                {femalename}
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-end mr-16 mt-10">
            <div className="flex justify-center">
              <Image
                src={catMatchSvg}
                alt=""
                className="absolute inset-0 object-contain object-center w-[70%] h-full left-16 mt-4 mb-10 rotate-[30deg] lg:rotate-0"
              />
            </div>
            <Image
              src={maleImg}
              height={250}
              width={250}
              alt={maleName}
              className="h-[100px] w-[100px] xl:h-[120px] xl:w-[120px] rounded-full object-cover object-top aspect-square"
            />
            <div className="flex flex-col items-center">
              <Image src={femaleCrown} alt="" height={50} width={50} />
              <p className="mr-4 italic font-semibold md:mr-4 font-Montserrat text-right">
                {maleName}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="absolute bottom-10">
              <Button
                isExternal
                text="Stamtavla"
                goTo="https://stambok.sverak.se/Stambok/Visa/506242"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatMatchCard;
