import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

interface Props {
  text: string;
  initialCapital: string;
  content?: PortableTextBlock;
}

const components: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-center">{children}</h1>,
    h2: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="text-SuperBrown">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="py-2 mx-auto text-AngelBlue max-w-prose">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal">{children}</ol>,
  },
};

const TextField = ({ text, initialCapital, content }: Props) => {
  if (content) {
    return (
      <>
        <PortableText value={content} components={components} />
      </>
    );
  } else {
    return <></>;
  }

  // if (initialCapital === 'true') {
  //   return (
  //     <p className="px-4 first-letter:text-8xl first-letter:float-left first-letter:mr-8 leading-8 first-letter:leading-none first-letter:font-Tangerine font-Montserrat font-semibold italic text.xl lg:text-2xl text-left max-w-prose mx-auto mt-10">
  //       {text}
  //     </p>
  //   );
  // } else if (initialCapital === 'false') {
  //   return (
  //     <p className="mx-auto text-sm italic lg:text-2xl max-w-prose">{text}</p>
  //   );
  // } else if (content) {
  //   return (
  //     <>
  //       <PortableText value={content} components={components} />
  //     </>
  //   );
  // } else {
  //   return <></>;
  // }
};

export default TextField;
