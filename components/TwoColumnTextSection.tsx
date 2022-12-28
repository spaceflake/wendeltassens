import React from 'react';

type Props = {
  text1: string;
  text2: string;
};

const TwoColumnTextSection = ({ text1, text2 }: Props) => {
  return (
    <div className="columns-2">
      <div className="w-full">{text1}</div>
      <div className="w-full">{text2}</div>
    </div>
  );
};

export default TwoColumnTextSection;
