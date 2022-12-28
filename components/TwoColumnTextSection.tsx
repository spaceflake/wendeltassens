import React from 'react';

type Props = {
  text: string;
};

const TwoColumnTextSection = ({ text }: Props) => {
  return (
    <div className="columns-2	">
      <p className="w-full font-Montserrat italic text-lg">{text}</p>
    </div>
  );
};

export default TwoColumnTextSection;
