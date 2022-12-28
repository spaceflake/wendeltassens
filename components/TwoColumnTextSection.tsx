import React from 'react';

type Props = {
  text: string;
};

const TwoColumnTextSection = ({ text }: Props) => {
  return (
    <div className="columns-1 md:columns-2	p-[4rem] ">
      <p className="w-full font-Montserrat italic text-lg">{text}</p>
    </div>
  );
};

export default TwoColumnTextSection;
