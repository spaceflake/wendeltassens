import Link from 'next/link';

type Props = {
  text?: string;
  goTo?: string;
};

const Button = ({ text, goTo }: Props) => {
  return (
    <Link
      href={goTo || '/'}
      className="rounded border border-DarkBrown text-DarkBrown px-5 py-2 hover:bg-DarkBrown hover:text-Beige text-center font-Montserrat italic"
    >
      {text || 'Knapptext'}
    </Link>
  );
};

export default Button;
