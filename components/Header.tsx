import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-col sm:flex-row items-baseline justify-between text-DarkBrown py-4 sm:py-10 bg-WhiteBG/50 backdrop:blur-md px-4 ">
      <div className="font-Tangerine text-5xl break-keep mx-auto">
        <span className="text-2xl -mr-3">SE*</span> Wendeltassens
      </div>
      <nav className="font-Montserrat flex gap-4 text-sm sm:text-2xl font-normal mx-auto">
        <Link href={'/'} className="font-bold">
          Hem
        </Link>
        <Link href={'/kontakt'}>Kontakt</Link>
        <Link href={'/varakatter'} className="break-keep">
          Våra Katter
        </Link>
        <Link href={'/om'}>Om</Link>
      </nav>
    </header>
  );
};

export default Header;
