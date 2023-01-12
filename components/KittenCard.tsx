'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
      className="relative flex overflow-hidden transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 isolate"
    >
      <div className="z-10 shrink-0">
        <Image
          src={catImgUrl}
          width={100}
          height={100}
          alt="Kattunge"
          className="w-[100px] h-[100px] col-span-1"
        />
      </div>
      {!toggleOpen && (
        <p
          className={`absolute bottom-2 z-10 text-sm font-Montserrat font-bold col-span-1 ${
            status === 'Tillgänglig' ? 'bg-AngelBlue' : 'bg-Beige'
          } p-[6px] ${
            status === 'Tillgänglig' ? 'text-WhiteBG' : 'text-DarkBrown'
          } rounded left-1/2 -translate-x-1/2`}
        >
          {status}
        </p>
      )}
      {toggleOpen && (
        <motion.div
          layout
          key={catName}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-between p-2 text-sm shrink-0 text-DarkBrown"
        >
          <div className="leading-tight">
            <p className="font-bold">{catName}</p>
            <p className="font-medium">{gender}</p>
            <p className="font-medium">{colorCode}</p>
          </div>
          <p
            className={`text-xs font-Montserrat font-bold col-span-1 ${
              status === 'Tillgänglig' ? 'bg-AngelBlue' : 'bg-Beige'
            } ${
              status === 'Tillgänglig' ? 'text-WhiteBG' : 'text-DarkBrown'
            } p-[6px] rounded`}
          >
            {status}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default KittenCard;
