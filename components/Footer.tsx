import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-10">
      <footer className="bg-SuperBrown text-Beige py-[64px] relative text-center md:text-left">
        <h2 className="font-Tangerine text-6xl mb-5 text-center text-Beige">
          Wendeltassens
        </h2>
        <nav className="flex justify-around flex-col md:flex-row text-sm lg:text-base">
          <div className="font-Montserrat flex flex-col mb-8 md:mb-0">
            <p className="text-base md:text-lg font-bold mb-2">Sitemap</p>
            <Link href="/" className=" text-sm md:text-base">
              Hem
            </Link>
            <Link href="/kattungar" className=" text-sm md:text-base">
              Kattungar
            </Link>
            <Link href="/katter" className=" text-sm md:text-base">
              Vuxna katter
            </Link>
            <Link href="/information-villkor" className=" text-sm md:text-base">
              Information & villkor
            </Link>
            <Link href="/kontakt" className=" text-sm md:text-base">
              Kontakt
            </Link>
            <Link href="/om-mig" className=" text-sm md:text-base">
              Om mig
            </Link>
          </div>
          <div className="font-Montserrat flex flex-col mb-8 md:mb-0">
            <p className="text-base md:text-lg font-bold mb-2">
              Sociala medier
            </p>
            <Link
              href="https://www.facebook.com/wendeltassens"
              className=" text-sm md:text-base"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/liselotte_wendel/"
              className=" text-sm md:text-base"
            >
              Instagram
            </Link>
          </div>
          <div>
            <div className="font-Montserrat flex flex-col mb-8 md:mb-0">
              <p className="text-base md:text-lg font-bold mb-2">Kattlänkar</p>
              <Link
                href="https://www.sverak.se/"
                className=" text-sm md:text-base"
              >
                SVERAK
              </Link>
              <Link
                href="http://spinneriet.se"
                className=" text-sm md:text-base"
              >
                Spinneriet
              </Link>
              <Link
                href="https://scandinavianragdoll.com/"
                className=" text-sm md:text-base"
              >
                Scandinavien RagdollClub
              </Link>
              <Link
                href="https://ragdollklubben.com/"
                className=" text-sm md:text-base"
              >
                Ragdollklubben
              </Link>
              <Link
                href="https://stambok.sverak.se/"
                className=" text-sm md:text-base"
              >
                FindUs
              </Link>
              <Link href="http://katter.nu" className=" text-sm md:text-base">
                Katter.nu
              </Link>
            </div>
          </div>
          <div className="font-Montserrat flex flex-col mb-8 md:mb-0">
            <p className="text-base md:text-lg font-bold mb-2">Kontakt</p>
            <p className=" text-sm md:text-base">Liselotte Wendel</p>
            <p className=" text-sm md:text-base">0702040670</p>
            <p className=" text-sm md:text-base">lise_lotte_1@hotmail.se</p>
          </div>
        </nav>
      </footer>
      <div className="bg-Beige h-8 w-full">
        <p className="text-DarkBrown text-center">
          Copyright &copy; 2022 Wendeltassens
        </p>
      </div>
    </div>
  );
};

export default Footer;
