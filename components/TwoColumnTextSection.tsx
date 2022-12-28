import React from 'react';

type Props = {
  text: string;
};

const TwoColumnTextSection = ({ text }: Props) => {
  return (
    <div className="columns-2 font-Montserrat italic text-lg	">
      <div className="w-full">{text}</div>
    </div>
  );
};

export default TwoColumnTextSection;
