import Link from 'next/link';
import React from 'react';
import footerSvg from '../public/footerClipPath.svg';
import Image from 'next/image';
import { paths, EXTLINKS, SOCIALS } from '../utils/navLinks';

type Props = {
  contactInformation: ContactInformation;
  pages: PageNav[];
  socialLinks: ExternalLink[];
  externalLinks: ExternalLink[];
};
const Footer = ({
  contactInformation,
  pages,
  socialLinks,
  externalLinks,
}: Props) => {
  return (
    <div className="mt-10 font-Montserrat">
      <Image src={footerSvg} alt="" className="w-full" />

      <div className="w-full bg-SuperBrown">
        <footer className="  container mx-auto md:gap-6 md:justify-between text-Beige py-[64px] flex flex-col lg:flex-row relative text-center lg:text-left px-4">
          <div className="flex flex-col lg:mr-6 md:self-center">
            <h2 className="mb-2 text-6xl text-center font-Tangerine text-Beige">
              Wendeltassens
            </h2>
            <div className="flex flex-col mb-8 text-sm md:mb-0 md:text-base">
              <p className="mb-2 text-base font-bold md:text-lg">Kontakt</p>
              <div className="flex flex-col gap-2">
                <p className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </span>
                  {contactInformation.name}
                </p>
                <p className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  {contactInformation.phoneNumber}
                </p>
                <p className="flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  {contactInformation.email}
                </p>
              </div>
            </div>
          </div>
          <nav className="flex flex-col flex-wrap items-center justify-center gap-6 text-sm lg:self-end sm:items-start lg:items-start lg:justify-end sm:flex-row lg:text-base">
            <div className="flex flex-col md:mb-0">
              <p className="mb-2 text-base font-bold md:text-lg">Sitemap</p>
              {pages.map((path) => (
                <Link
                  key={path.title}
                  href={path.slug ?? '/'}
                  className="text-sm md:text-base hover:underline"
                >
                  {path.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col md:mb-0">
              <p className="mb-2 text-base font-bold md:text-lg">
                Sociala medier
              </p>
              {socialLinks.map((link, index) => (
                <Link
                  target="_blank"
                  key={index}
                  href={link.url}
                  className="text-sm md:text-base hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div>
              <div className="flex flex-col md:mb-0">
                <p className="mb-2 text-base font-bold md:text-lg">
                  Kattlänkar
                </p>
                {externalLinks.map((link, index) => (
                  <Link
                    target="_blank"
                    key={index}
                    href={link.url}
                    className="text-sm md:text-base hover:underline"
                  >
                    {link.text}
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
