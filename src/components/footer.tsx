import Image from "next/image";
import React, { ReactNode } from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useRouter } from "next/router";
import { Link as ScrolliLink } from "react-scroll";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  return (
    <div>
      <footer className="relative z-10 bg-gradient-to-t from-zinc-300 to-white ">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link href="/" about="d">
              <Image
                alt="aa"
                src="/logo.png"
                width={2500}
                height={2500}
                className="w-48 mb-8"
              />
            </Link>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              {router.pathname === "/"
                ? content.map((item) => {
                    return (
                      <ScrolliLink
                        smooth={true}
                        spy={true}
                        duration={1500}
                        offset={-220}
                        key={item.id}
                        to={item.link}
                        className="mx-4 cursor-pointer text-sm lg:text-xl text-blue transition-colors duration-300 hover:text-green "
                        aria-label="Reddit"
                      >
                        {item.label}
                      </ScrolliLink>
                    );
                  })
                : content.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        href={item.link}
                        className="mx-4 text-sm cursor-pointer lg:text-xl text-blue transition-colors duration-300 hover:text-green "
                        aria-label="Reddit"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
            </div>
          </div>

          <hr className="my-6 border-blue md:my-10" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-blue">
              © Energy Panel Maroc. All Rights Reserved.
            </p>

            <div className="flex mt-4 lg:mt-0 -mx-2">
              <Link
                href="#"
                about="hh"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FiInstagram />
              </Link>
              <Link
                href="#"
                about="hh"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="#"
                about="hh"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div>
            <span className="absolute bottom-0 left-0 z-[-1]">
              <svg
                width={217}
                height={229}
                viewBox="0 0 217 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                  fill="url(#paint0_linear_1179_5)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_5"
                    x1="76.5"
                    y1={281}
                    x2="76.5"
                    y2="1.22829e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1C3766" stopOpacity="1" />
                    <stop offset={1} stopColor="#BFD42D" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-10 top-10 z-[-1]">
              <svg
                width={75}
                height={75}
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                  fill="url(#paint0_linear_1179_4)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_4"
                    x1="-1.63917e-06"
                    y1="37.5"
                    x2={75}
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1C3766" stopOpacity="0.31" />
                    <stop offset={1} stopColor="#BFD42D" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const content = [
  { label: "A propos", link: "home", id: "home" },
  { label: "Produits", link: "produit", id: "product" },
  {
    label: "Références",
    link: "references",
    id: "references",
  },
  {
    label: "Certifications",
    link: "certifications",
    id: "certifications",
  },
];
