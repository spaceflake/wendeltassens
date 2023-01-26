import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import urlFor from '../cms/imgBuilder';

interface Props {
  text: string;
  initialCapital: string;
  content?: PortableTextBlock;
}

export const LinkComponent = ({ value, children }: any) => {
  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
  return (
    <Link
      href={value?.href}
      target={target}
      className="underline underline-offset-8 text-AngelBlue"
    >
      {children}
    </Link>
  );
};

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
    h1: ({ children }) => <h1 className="my-3 text-center">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold font-Montserrat">{children}</h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="py-8 text-xl italic text-SuperBrown">
        <span>"</span>
        {children}
        <span>"</span>
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="py-2 mx-auto max-w-prose">{children}</p>
    ),
  },
  marks: {
    link: LinkComponent,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-4 list-disc list-inside">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-4 list-decimal list-inside">{children}</ol>
    ),
  },
  types: {
    image: ImageComponent,
  },
};

const TextField = ({ text, initialCapital, content }: Props) => {
  if (content) {
    return (
      <div className="px-4 mx-auto max-w-prose">
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
