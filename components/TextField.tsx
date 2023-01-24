import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { PortableTextBlock } from 'sanity';
import urlFor from '../cms/imgBuilder';

interface Props {
  text: string;
  initialCapital: string;
  content?: PortableTextBlock;
}

const ImageComponent = ({ value, isInline }: any) => {
  return (
    <div className="flex justify-center max-w-md max-h-80">
      <Image
        src={urlFor(value).fit('fill').url()}
        alt=""
        width={500}
        height={500}
        className="inline-flex object-contain w-auto h-auto"
      />
    </div>
  );
};
const components: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="my-3 text-center">{children}</h1>,
    h2: ({ children }) => <h5>{children}</h5>,
    blockquote: ({ children }) => (
      <blockquote className="text-SuperBrown">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="py-2 mx-auto max-w-prose">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
  },
  types: {
    image: ImageComponent,
  },
};

const TextField = ({ text, initialCapital, content }: Props) => {
  if (content) {
    return (
      <div className="mx-auto max-w-prose">
        <PortableText value={content} components={components} />
      </div>
    );
  } else if (initialCapital === 'true') {
    return (
      <p className="px-4 first-letter:text-8xl first-letter:float-left first-letter:mr-8 leading-8 first-letter:leading-none first-letter:font-Tangerine font-Montserrat font-semibold italic text.xl lg:text-2xl text-left max-w-prose mx-auto mt-10">
        {text}
      </p>
    );
  } else {
    return (
      <p className="mx-auto text-sm italic lg:text-2xl max-w-prose">{text}</p>
    );
  }
};

export default TextField;
