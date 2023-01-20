import React from 'react';

interface Props {
  text: string;
  initialCapital: string;
}

const TextField = ({ text, initialCapital }: Props) => {
  if (initialCapital === 'true') {
    return (
      <p className="px-4 first-letter:text-8xl first-letter:float-left first-letter:mr-8 leading-8 first-letter:leading-none first-letter:font-Tangerine font-Montserrat font-semibold italic text.xl lg:text-2xl text-left max-w-prose mx-auto mt-10">
        {text}
      </p>
    );
  } else if (initialCapital === 'false') {
    return (
      <p className="mx-auto text-sm italic lg:text-2xl max-w-prose">{text}</p>
    );
  } else {
    return <></>;
  }
};

export default TextField;
