import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-SuperBrown w-full text-WhiteBG ">
      <p className="font-Tangerine text-6xl">Wendeltassens</p>
      <nav>
        <div className="font-Montserrat flex flex-col">
          <p className="text-lg font-bold">Sitemap</p>
          <Link href="/">Hem</Link>
          <Link href="/kattungar">Kattungar</Link>
          <Link href="/varakatter">Vuxna katter</Link>
          <Link href="/information">Information & villkor</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/om">Om mig</Link>
        </div>
        <div className="font-Montserrat flex flex-col">
          <p className="text-lg font-bold">Sociala medier</p>
          <Link href="https://www.facebook.com/wendeltassens">Facebook</Link>
          <Link href="https://www.instagram.com/liselotte_wendel/">
            Instagram
          </Link>
        </div>
        <div>
          <div className="font-Montserrat flex flex-col">
            <p className="text-lg font-bold">Kattlänkar</p>
            <Link href="https://www.sverak.se/">SVERAK</Link>
            <Link href="http://spinneriet.se">Spinneriet</Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
