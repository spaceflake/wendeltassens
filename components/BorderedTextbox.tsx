import React from 'react';
import Button from './Button';

type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

const BorderedTextbox = ({ title, text, children }: Props) => {
  return (
    <article className="border border-DarkBrown rounded relative bg-WhiteBG text-DarkBrown mr-4 ml-4">
      <h2 className=" font-Tangerine text-3xl lg:text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-8 px-4">
        {title}
      </h2>
      <div className="pt-16 pr-8 pl-8 py-8 md:p-16">
        <p
          className={`font-Montserrat italic text-sm lg:text-2xl ${
            text.length > 500 && 'lg:columns-2'
          }`}
        >
          {text}
        </p>
      </div>
      <div className="flex justify-center pb-8">{children}</div>
    </article>
  );
};

export default BorderedTextbox;
