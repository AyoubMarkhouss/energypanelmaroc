import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import firstImage from "@/../public/image.png";
import vivi from "@/../public/vivi.webp";
import boni from "@/../public/boni.webp";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useBooleanContext } from "@/utils/context";
import Eclairage from "@/components/eclairage";
const Index = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mt-10 mx-auto">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="shrink-0 mx-5 md:px-0 flex md:flex-row flex-col-reverse items-start gap-2">
            <div className="md:flex grid grid-cols-3 md:flex-col gap-4">
              {images.map((loli, ki) => {
                return (
                  <Image
                    key={ki}
                    src={loli}
                    width={500}
                    height={500}
                    onClick={() => setClicked(ki)}
                    className={cn(
                      "h-[8rem] w-fit cursor-pointer object-cover object-bottom rounded outline shrink-0",
                      clicked === ki
                        ? "outline-green outline-offset-4 outline-2"
                        : ""
                    )}
                    alt="image info"
                  />
                );
              })}
            </div>
            <Image
              src={images[clicked]}
              width={500}
              height={500}
              className="h-[26rem] object-cover object-top shrink-0"
              alt="image info"
            />
          </div>
          <div className="flex mx-5 md:px-0 md:h-[25rem] md:gap-0 gap-5 flex-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold text-blue">
                Éclairage LED - EFIX
              </h2>
              <p>
                Nos systèmes d&apos;éclairage à haute efficacité énergétique
                réduisent la consommation tout en offrant une luminosité
                supérieure. Adaptés aux usages résidentiels, commerciaux et
                industriels, ils diminuent les coûts énergétiques et
                l&apos;empreinte carbone.
              </p>
            </div>
            <div className="grid h-full place-items-center  grid-cols-2">
              <div className="flex border-r w-full border-blue flex-col items-center">
                <p className="font-semibold text-sm">100%</p>
                <p>qualité</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-sm">24/24</p>
                <p className="text-lg">disponible</p>
              </div>
            </div>
            <Link className="" href={"tel:0522663518"}>
              <button className="w-full text-blue font-bold text-xl py-4 bg-green hover:bg-green/85 px-2 rounded">
                contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Eclairage />
    </div>
  );
};

export default Index;

const images = [firstImage, vivi, boni];
