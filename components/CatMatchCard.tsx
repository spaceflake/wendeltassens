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
  description?: string;
};

const CatMatchCard = ({
  femalename,
  maleName,
  femaleImg,
  maleImg,
  description,
}: Props) => {
  return (
    <div className="flex-none basis-1/2 p-2">
      <div className="text-DarkBrown bg-Beige/50 h-full shadow-lg rounded-md p-8 bg-[url('../public/catMatchHeart.svg')] bg-center bg-no-repeat grid grid-cols-2 grid-rows-[max-content_auto_3.5rem_min-content] justify-center pt-6 gap-2">
        <div className="flex flex-col items-center">
          <Image
            src={femaleCrown}
            alt=""
            height={50}
            width={50}
            className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
          />
          <h6 className="italic font-semibold font-Montserrat text-sm lg:text-base text-center">
            {femalename}
          </h6>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={maleCrown}
            alt=""
            height={50}
            width={50}
            className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
          />
          <h6 className="italic font-semibold font-Montserrat text-sm lg:text-base text-center">
            {maleName}
          </h6>
        </div>

        <Image
          src={femaleImg}
          height={100}
          width={100}
          alt={femalename}
          className="w-[100px] h-[100px] sm:h-[120px] sm:w-[120px] rounded-full object-cover object-top aspect-square mt-4 justify-self-center self-end"
        />

        <Image
          src={maleImg}
          height={250}
          width={250}
          alt={maleName}
          className="w-[100px] h-[100px] sm:h-[120px] sm:w-[120px] rounded-full object-cover object-top aspect-square mt-4 justify-self-center self-end"
        />

        <div className="col-span-2">
          {description && (
            <p className="text-center py-4 font-Montserrat">{description}</p>
          )}
        </div>

        <div className="col-span-2 flex justify-center">
          <Button
            isExternal
            text="Stamtavla"
            goTo="https://stambok.sverak.se/Stambok/Visa/506242"
          />
        </div>
      </div>
    </div>
  );
};

export default CatMatchCard;
