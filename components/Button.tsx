import Link from 'next/link';

type Props = {
  text: string;
  goTo: string | undefined;
  isInternalLink?: boolean;
  secondary?: boolean;
};

const Button = ({ text, goTo, isInternalLink, secondary }: Props) => {
  if (isInternalLink) {
    return (
      <Link
        target={isInternalLink ? '_blank' : '_self'}
        href={goTo || '/'}
        className="px-5 py-2 text-sm italic text-center transition-all duration-150 ease-in-out border rounded border-DarkBrown text-DarkBrown hover:ring-2 hover:ring-DarkBrown hover:font-medium font-Montserrat lg:text-base"
      >
        {text || 'Knapptext'}
      </Link>
    );
  }
  return (
    <Link
      target={isInternalLink ? '_blank' : '_self'}
      href={goTo || '/'}
      className="flex items-center justify-center gap-2 px-5 py-2 text-sm italic text-center transition-all duration-150 ease-in-out border rounded border-DarkBrown hover:ring-2 hover:ring-DarkBrown hover:font-medium bg-DarkBrown text-Beige font-Montserrat lg:text-base hover:bg-DarkBrown/90"
    >
      <span>{text || 'Knapptext'}</span>
      {isInternalLink && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 fill-Beige"
        >
          <path
            fillRule="evenodd"
            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </Link>
  );
};

export default Button;
