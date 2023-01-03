import React from 'react';
import Button from './Button';

type Props = {
  title: string | null;
  text: string | null | undefined;
  children?: React.ReactNode;
};

const BorderedTextbox = ({ title, text, children }: Props) => {
  return (
    <article className="relative ml-4 mr-4 border rounded border-DarkBrown bg-WhiteBG text-DarkBrown">
      <h2 className=" font-Tangerine text-3xl lg:text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-8 px-4">
        {title || 'Title'}
      </h2>
      <div className="py-8 pt-16 pl-8 pr-8 md:p-16">
        <p
          className={`font-Montserrat italic text-sm lg:text-2xl ${
            text && text.length > 500 && 'lg:columns-2'
          }`}
        >
          {text || 'Text'}
        </p>
      </div>
      <div className="flex justify-center pb-8">{children}</div>
    </article>
  );
};

export default BorderedTextbox;
