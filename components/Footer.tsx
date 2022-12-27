import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-SuperBrown text-Beige text-center pl-40 pr-40 pt-40 pb-40">
      <p className="font-Tangerine text-6xl mb-5">Wendeltassens</p>
      <nav className="flex justify-between">
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
            <Link href="https://scandinavianragdoll.com/">
              Scandinavien RagdollClub
            </Link>
            <Link href="https://ragdollklubben.com/">Ragdollklubben</Link>
            <Link href="https://stambok.sverak.se/">FindUs</Link>
            <Link href="http://katter.nu">Katter.nu</Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
