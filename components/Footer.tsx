import Link from 'next/link';
import React from 'react';
import footerSvg from '../public/footerClipPath.svg';
import Image from 'next/image';
import { paths, EXTLINKS, SOCIALS } from '../utils/navLinks';

type Props = {
  contactInformation: ContactInformation;
};
const Footer = ({ contactInformation }: Props) => {
  return (
    <div className="h-full mt-10 font-Montserrat">
      <Image src={footerSvg} alt="Footer svg" className="w-full" />

      <div className="w-full bg-SuperBrown">
        <footer className="  container mx-auto md:gap-6 md:justify-between text-Beige py-[64px] flex flex-col lg:flex-row relative text-center lg:text-left px-4">
          <div className="flex flex-col lg:mr-6 md:self-center">
            <h2 className="mb-2 text-6xl text-center font-Tangerine text-Beige">
              Wendeltassens
            </h2>
            <div className="flex flex-col mb-8 text-sm md:mb-0 md:text-base">
              <p className="mb-2 text-base font-bold md:text-lg">Kontakt</p>
              <p>{contactInformation.name}</p>
              <p>{contactInformation.phoneNumber}</p>
              <p>{contactInformation.email}</p>
            </div>
          </div>
          <nav className="flex flex-col flex-wrap items-center justify-center gap-6 text-sm lg:self-end sm:items-start lg:items-start lg:justify-end sm:flex-row lg:text-base">
            <div className="flex flex-col md:mb-0">
              <p className="mb-2 text-base font-bold md:text-lg">Sitemap</p>
              {paths.map((path) => (
                <Link
                  key={path.name}
                  href={path.path}
                  className="text-sm md:text-base hover:underline"
                >
                  {path.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col md:mb-0">
              <p className="mb-2 text-base font-bold md:text-lg">
                Sociala medier
              </p>
              {SOCIALS.map((link) => (
                <Link
                  target="_blank"
                  key={link.name}
                  href={link.path}
                  className="text-sm md:text-base hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <div className="flex flex-col md:mb-0">
                <p className="mb-2 text-base font-bold md:text-lg">
                  Kattlänkar
                </p>
                {EXTLINKS.map((link) => (
                  <Link
                    target="_blank"
                    key={link.name}
                    href={link.path}
                    className="text-sm md:text-base hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </footer>
      </div>
      <div className="w-full py-2 bg-Beige">
        <p className="text-center text-DarkBrown">
          Copyright &copy; 2023 Wendeltassens
        </p>
      </div>
    </div>
  );
};

export default Footer;
