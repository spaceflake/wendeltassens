import React from 'react';
import Button from './Button';

type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

const BorderedTextbox = ({ title, text, children }: Props) => {
  return (
    <article className="border border-DarkBrown rounded relative bg-WhiteBG">
      <h2 className=" font-Tangerine text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-[2rem] pr-[1rem] pl-[1rem]">
        {title}
      </h2>
      <div className="p-[4rem]">
        <p className="font-Montserrat italic">{text}</p>
      </div>
      {children}
    </article>
  );
};

export default BorderedTextbox;
