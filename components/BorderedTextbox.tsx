import React from 'react';

type Props = {
  title: string;
  text: string;
};

const BorderedTextbox = ({ title, text }: Props) => {
  return (
    <article className="border relative">
      <h2 className=" font-Tangerine text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-[2rem] pr-[1rem] pl-[1rem]">
        {title}
      </h2>
      <div className="p-[4rem]">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default BorderedTextbox;
