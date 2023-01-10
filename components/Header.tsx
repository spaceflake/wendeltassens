'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from '../utils/navLinks';

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 z-10 w-full ">
      <div className="container flex flex-col items-center justify-between w-full px-4 py-4 mx-auto md:items-baseline lg:px-8 md:flex-row text-DarkBrown lg:py-10 bg-WhiteBG/50 backdrop-blur-sm ">
        <Link href={'/'}>
          <div className="flex items-baseline mx-auto text-5xl font-Tangerine">
            <span className="text-2xl">SE*</span>
            <span>Wendeltassens</span>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-normal font-Montserrat sm:text-base lg:text-lg 2xl:text-xl ">
          {paths.map((path) => (
            <Link
              key={path.name}
              href={path.path}
              className={`hover:underline ${
                path.path === pathname ? 'font-bold' : ''
              }`}
            >
              {path.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
