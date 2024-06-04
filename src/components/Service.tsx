import { container, item } from "@/lib/animation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import one from "@/../public/wahd.jpg";
import jouje from "@/../public/jouj.jpg";
import Tlata from "@/../public/tlata.jpg";
import { useBooleanContext } from "@/utils/context";
const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      id="references"
      ref={ref}
      className="px-4 relative bg-blue/20 md:rounded-xl py-16 mx-auto sm:max-w-xl z-20 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="w-56 hidden md:block animate-blob animate-delay-4000 h-56 rounded-full absolute bg-blue -left-10 -top-7 mix-blend-multiply filter blur-xl opacity-50 -z-20" />
      <div className="w-56 hidden md:block animate-blob h-56 rounded-full absolute bg-green left-24 -top-7 mix-blend-multiply filter blur-xl opacity-50 -z-20" />
      <div className="w-56 hidden md:block animate-blob animate-delay-2000 h-56 rounded-full absolute bg-yellow-300 left-10 mix-blend-multiply filter blur-xl opacity-50 top-7 -z-20" />
      {/* bit */}
      <div className="w-56 hidden md:block animate-blob animate-delay-4000 h-56 rounded-full absolute bg-blue -right-10 -bottom-7 mix-blend-multiply filter blur-xl opacity-50 -z-50" />
      <div className="w-56 hidden md:block animate-blob h-56 rounded-full absolute bg-green right-24 -bottom-7 mix-blend-multiply filter blur-xl opacity-50 -z-50" />
      <div className="w-56 hidden md:block animate-blob animate-delay-2000 h-56 rounded-full absolute bg-yellow-300 right-10 mix-blend-multiply filter blur-xl opacity-50 bottom-7 -z-50" />
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        className="max-w-xl  mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <motion.p
            variants={item}
            className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"
          >
            Notre Service
          </motion.p>
        </div>

        <motion.h2
          variants={item}
          className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
        >
          Equipements de qualité, solutions mondiales.
        </motion.h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto"
      >
        <motion.div variants={item} className="flex flex-col justify-center">
          {content.map((k) => {
            return (
              <div key={k.label} className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">{k.label}</h6>
                  <p className="text-sm text-gray-900">{k.description}</p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div variants={item} className="grid z-50 grid-cols-2 gap-5">
          <Image
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src={Tlata}
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="object-cover w-full h-48 rounded shadow-lg"
            src={jouje}
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="object-cover w-full h-48 rounded shadow-lg"
            src={one}
            alt=""
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Service;

const content = [
  {
    label: "Importation",
    description:
      "Sélection et fourniture des meilleurs équipements disponibles sur le marché international.",
  },
  {
    label: "Études",
    description:
      "Analyses détaillées et personnalisées pour chaque projet, assurant une solution adaptée aux besoins spécifiques de nos clients.",
  },
  {
    label: "Installation Clé en Main",
    description:
      "Prise en charge complète des projets, de la conception à la mise en service finale, avec un suivi rigoureux.",
  },
];
