"use client";

import Link from "next/link";
import { Link as WithScroll } from "react-scroll";
import { MdInfoOutline } from "react-icons/md";
import { MdSolarPower } from "react-icons/md";
import Logo from "@/../public/logo.png";
import { useBooleanContext } from "@/utils/context";
import Image from "next/image";
import { FaPeopleArrows } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { Sidebar } from "primereact/sidebar";
import Burger from "./icons/burger";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import { useRouter } from "next/router";
import SecArrow from "./icons/secArrow";
export function Navbar() {
  const { toggleBoolean, booleanState, sectionName } = useBooleanContext();
  const nav = useRouter().pathname;
  console.log(sectionName);
  return (
    <div className="bg-gradient-to-b from-zinc-300 to-white z-50 mx-auto sticky top-0 ">
      <div className="hidden md:flex border-b top-0 mx-auto z-50 px-6 items-center max-w-7xl justify-between gap-10 py-7">
        <Link href="/">
          <Image
            src={Logo}
            alt="image"
            width={300}
            height={300}
            className="w-48 h-fit z-50 object-contain"
          />
        </Link>
        {nav !== "/" ? (
          <div className="flex gap-7">
            {content.map((j) => {
              return (
                <Link key={j.label} href={`/#${j.link}`}>
                  <div
                    className="scroll-m-20 font-medium hover:underline hover:text-zinc-700 cursor-pointer text-xl tracking-tight"
                    key={j.label}
                  >
                    {j.label}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-7">
            {content.map((j) => {
              return (
                <div className="flex flex-col items-start" key={j.label}>
                  <WithScroll
                    smooth={true}
                    spy={true}
                    duration={1500}
                    offset={-220}
                    to={j.link}
                  >
                    <div
                      className="scroll-m-20 font-medium hover:underline hover:text-zinc-700 cursor-pointer text-xl tracking-tight"
                      key={j.label}
                    >
                      {j.label}
                    </div>
                  </WithScroll>
                  {sectionName === j.id && (
                    <SecArrow className="w-6 rotate-180 text-end text-blue" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="md:hidden bg-white flex py-3 justify-between pr-6">
        <Link href="/">
          <Image
            src={Logo}
            alt="image"
            width={300}
            height={300}
            className="w-24 ml-5 object-contain"
          />
        </Link>
        <button onClick={() => toggleBoolean()}>
          <Burger />
        </button>
      </div>
      <Sidebar
        id="sidebar"
        visible={booleanState}
        onHide={() => toggleBoolean()}
        role="region"
        className=""
      >
        <div className="z-40 bg-zinc-100 h-28 w-full absolute top-0 pt-3">
          <Link href="/">
            <Image
              src={Logo}
              alt="image"
              width={300}
              height={300}
              className="w-24 ml-5 z-50 object-contain"
            />
          </Link>
        </div>
        <div className="bg-zinc-100 w-full pr-10 flex flex-col gap-3 h-screen absolute top-10 pt-20 pl-4">
          {content.map((lobi) => {
            return (
              <Link key={lobi.label} href="/">
                <ScrollLink
                  onClick={() => toggleBoolean()}
                  key={lobi.label}
                  to={lobi.link}
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-220}
                >
                  <div className="w-full cursor-pointer text-xl font-medium flex gap-4 items-center pr-7 pl-3 py-1 rounded">
                    <lobi.icon /> {lobi.label}
                  </div>
                </ScrollLink>
              </Link>
            );
          })}
        </div>
      </Sidebar>
    </div>
  );
}

const content = [
  { label: "A propos", link: "home", icon: MdInfoOutline, id: "home" },
  { label: "Produits", link: "produit", icon: MdSolarPower, id: "product" },
  {
    label: "Références",
    link: "references",
    icon: FaPeopleArrows,
    id: "references",
  },
  {
    label: "Certifications",
    link: "certifications",
    icon: BsFillPeopleFill,
    id: "certifications",
  },
];
