'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  pages: PageNav[];
};

const Header = ({ pages }: Props) => {
  let pathname = usePathname();
  pathname = pathname === null ? '' : pathname.slice(1);

  return (
    <header className="z-10 w-full ">
      <div className="container flex flex-col items-center justify-between w-full px-4 py-4 mx-auto md:items-baseline lg:px-8 md:flex-row text-DarkBrown lg:py-10 bg-WhiteBG/50 backdrop-blur-sm ">
        <Link href={'/'}>
          <div className="flex items-baseline mx-auto text-5xl font-Tangerine">
            <span className="text-2xl">SE*</span>
            <span>Wendeltassens</span>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-normal font-Montserrat sm:text-base lg:text-lg 2xl:text-xl ">
          {pages.map((path) => (
            <Link
              key={path.title}
              href={path.slug ?? '/'}
              className={`hover:underline ${
                (path.slug === pathname ||
                  (path.slug === null && pathname === '')) &&
                'font-bold'
              }`}
            >
              {path.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
