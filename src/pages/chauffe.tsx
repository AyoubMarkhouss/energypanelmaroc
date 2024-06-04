import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import notLed from "@/../public/PHOTO-2022-04-25-13-20-50-5-.jpg";
import hoho from "@/../public/hoho.jpg";
import nono from "@/../public/nono.jpg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Panneaux from "@/components/Panneaux";
import Chauffe from "@/components/chauffe";
const Index = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mt-10 mx-auto">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="shrink-0 mx-5 md:px-0 flex md:flex-row flex-col-reverse items-start gap-2">
            <div className="md:flex grid grid-cols-3 md:flex-col gap-4">
              {Images.map((loli, ki) => {
                return (
                  <Image
                    key={ki}
                    src={loli}
                    width={500}
                    height={500}
                    onClick={() => setClicked(ki)}
                    className={cn(
                      "md:h-[8rem] w-fit cursor-pointer object-cover object-bottom rounded outline shrink-0",
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
              src={Images[clicked]}
              width={500}
              height={500}
              className="w-[26rem] rounded-xl object-cover h-[26rem] object-bottom shrink-0"
              alt="image info"
            />
          </div>
          <div className="flex mx-5 md:px-0 md:h-[25rem] md:gap-0 gap-5 flex-col">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold text-blue">
                Chauffe-Eau Solaire Novasolar
              </h2>
              <p>
                Energy Panel Maroc est enchanté de fournir des chauffe-eau
                solaires de la marque espagnole Novasolar, appréciés pour leur
                excellence et leur efficacité énergétique. Nos produits
                garantissent une performance optimale et une durabilité
                exceptionnelle pour répondre aux besoins de nos clients.
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
            <Link
              className=""
              target="_blank"
              href={"https://www.novasolarmaroc.com/"}
            >
              <button className="w-full text-blue font-bold text-xl py-4 bg-green hover:bg-green/85 px-2 rounded">
                contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Chauffe />
    </div>
  );
};

export default Index;

const Images = [notLed, hoho, nono];
