"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ImagesSlider } from "./ui/images-slider";
import { BooleanProvider, useBooleanContext } from "@/utils/context";
export function Heroimg() {
  const { sectionPlace } = useBooleanContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      sectionPlace("home");
    }
  }, [isInView, sectionPlace]);
  const images = ["/tlata.jpg"];
  return (
    <motion.div
      ref={ref}
      id="home"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <ImagesSlider
        className="md:h-[50rem] md:mt-8 h-screen mb-40"
        images={images}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="semibold text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Energy Panel Maroc
          </motion.p>
          <motion.p className="semibold max-w-xl text-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Fondée en 2016, Energy Panel Maroc est une entreprise pionnière sur
            le marché marocain dans le domaine des énergies renouvelables.
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </motion.div>
  );
}
