import React from 'react';

type Props = {
  text: string;
  children?: React.ReactNode;
};

const TwoColumnTextSection = ({ text, children }: Props) => {
  return (
    <div>
      <div className="columns-1 md:columns-2 gap-[4rem]	mr-[1rem] ml-[1rem] lg:mr-[11rem] lg:ml-[11rem] pt-[2rem]">
        <p className="w-full font-Montserrat italic text-lg">{text}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TwoColumnTextSection;
