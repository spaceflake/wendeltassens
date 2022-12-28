import React from 'react';

type Props = {
  title: string;
  text: string;
};

const BorderedTextbox = ({ title, text }: Props) => {
  return (
    <article className="border relative">
      <h2 className=" font-Tangerine text-5xl absolute -mt-[4px]">{title}</h2>
      <div className="p-8">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default BorderedTextbox;
