import React from 'react';
import Button from './Button';

type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

const BorderedTextbox = ({ title, text, children }: Props) => {
  return (
    <article className="border border-DarkBrown rounded relative bg-WhiteBG text-DarkBrown">
      <h2 className=" font-Tangerine text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-8 px-4">
        {title}
      </h2>
      <div className="p-16">
        <p className="font-Montserrat italic text-2xl">{text}</p>
      </div>
      {children}
    </article>
  );
};

export default BorderedTextbox;
