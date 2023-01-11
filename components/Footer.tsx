import Link from 'next/link';
import React from 'react';
import footerSvg from '../public/footerClipPath.svg';
import Image from 'next/image';
import { paths, EXTLINKS, SOCIALS } from '../utils/navLinks';

interface Props {
  name: string;
  email: string;
  phoneNumber: string;
}
const Footer = ({ name, email, phoneNumber }: Props) => {
  return (
    <div className="h-full mt-10">
      <Image src={footerSvg} alt="Footer svg" className="w-full" />
      <footer className="bg-SuperBrown text-Beige py-[64px] relative text-center md:text-left">
        <h2 className="mb-5 text-6xl text-center font-Tangerine text-Beige">
          Wendeltassens
        </h2>
        <nav className="flex flex-col justify-around text-sm md:flex-row lg:text-base">
          <div className="flex flex-col mb-8 font-Montserrat md:mb-0">
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
          <div className="flex flex-col mb-8 font-Montserrat md:mb-0">
            <p className="mb-2 text-base font-bold md:text-lg">
              Sociala medier
            </p>
            {SOCIALS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm md:text-base hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <div className="flex flex-col mb-8 font-Montserrat md:mb-0">
              <p className="mb-2 text-base font-bold md:text-lg">Kattlänkar</p>
              {EXTLINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm md:text-base hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-8 font-Montserrat md:mb-0">
            <p className="mb-2 text-base font-bold md:text-lg">Kontakt</p>
            <p className="text-sm md:text-base">{name}</p>
            <p className="text-sm md:text-base">{phoneNumber}</p>
            <p className="text-sm md:text-base">{email}</p>
          </div>
        </nav>
      </footer>
      <div className="w-full h-8 bg-Beige">
        <p className="text-center text-DarkBrown">
          Copyright &copy; 2023 Wendeltassens
        </p>
      </div>
    </div>
  );
};

export default Footer;
