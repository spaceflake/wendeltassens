import React from 'react';
import Image from 'next/image';
import swirl from '../public/swirl.svg';
import swirl2 from '../public/swirl2.svg';

type Props = {
  title: string;
  text: string;
};

const IntroTextHome = ({ title, text }: Props) => {
  return (
    <div className="flex mx-auto">
      <Image src={swirl} alt="Swirl" className="self-end hidden lg:block" />
      <div className="text-center max-w-[436px]">
        <h2 className="text-3xl lg:text-[4rem] leading-none">{title}</h2>
        <p className="px-3 mt-4 text-sm text-center text-DarkBrown font-Montserrat lg:text-2xl lg:px-0">
          {text}
        </p>
      </div>
      <Image src={swirl2} alt="Swirl" className="self-end hidden lg:block" />
    </div>
  );
};

export default IntroTextHome;
