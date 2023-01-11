import React from 'react';

type Props = {
  text: string;
};

const TwoColumnTextSection = ({ text }: Props) => {
  return (
    <div>
      <div className="columns-1 md:columns-2 gap-16	mx-4 lg:mx-[11rem] pt-8 text-DarkBrown">
        <p className="w-full font-Montserrat italic text-lg">{text}</p>
      </div>
    </div>
  );
};

export default TwoColumnTextSection;
