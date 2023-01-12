'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type Props = {
  catName: string;
  gender: string;
  catImgUrl: string | StaticImageData;
  colorCode: string;
  status: string;
};

const KittenCard = ({
  catName,
  catImgUrl,
  colorCode,
  status,
  gender,
}: Props) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <div
      onClick={() => setToggleOpen(!toggleOpen)}
      className="relative flex gap-2 overflow-hidden rounded-lg"
    >
      <div>
        <Image
          src={catImgUrl}
          width={100}
          height={100}
          alt="Kattunge"
          className="w-[100px] h-[100px] col-span-1"
        />
      </div>
      {!toggleOpen && (
        <p className="absolute bottom-2 z-10 text-xs font-Montserrat font-bold col-span-1 bg-AngelBlue p-[6px] text-WhiteBG rounded left-1/2 -translate-x-1/2">
          {status}
        </p>
      )}
      {toggleOpen && (
        <div className="flex flex-col justify-between text-sm text-DarkBrown">
          <div>
            <p className="font-bold">{catName}</p>
            <p className="font-medium">{gender}</p>
            <p className="font-medium">{colorCode}</p>
          </div>
          <p className="text-xs font-Montserrat font-bold col-span-1 bg-AngelBlue p-[6px] text-WhiteBG rounded">
            {status}
          </p>
        </div>
      )}
    </div>
  );
};

export default KittenCard;
