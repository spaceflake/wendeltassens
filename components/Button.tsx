import Link from 'next/link';

type Props = {
  text?: string;
  goTo?: string;
  isExternal?: boolean;
};

const Button = ({ text, goTo, isExternal }: Props) => {
  return (
    <Link
      target={isExternal ? '_blank' : '_self'}
      href={goTo || '/'}
      className="rounded border border-DarkBrown text-DarkBrown px-5 py-2 hover:bg-DarkBrown hover:text-Beige text-center font-Montserrat italic text-sm lg:text-base"
    >
      {text || 'Knapptext'}
    </Link>
  );
};

export default Button;
