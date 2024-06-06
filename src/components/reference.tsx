import React, { useEffect, useRef } from "react";
import cOne from "@/../public/Capture d'écran 2024-06-04 164655.png";
import cTwo from "@/../public/cityfoot.jpg";
import cThree from "@/../public/petromin.jpg";
import cFour from "@/../public/zenith.png";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { container, item } from "@/lib/animation";
import { GrCertificate } from "react-icons/gr";
import { useBooleanContext } from "@/utils/context";
const Images = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px 0px 0px",
  });
  const { sectionPlace, sectionName } = useBooleanContext();
  useEffect(() => {
    if (isInView) {
      sectionPlace("references");
    }
  }, [isInView, sectionPlace]);
  return (
    <div
      ref={ref}
      className="flex max-w-3xl mb-28 mx-auto overflow-hidden flex-col mt-[3rem] items-center md:mt-40"
      id="ref"
    >
      <div className="bg-indigo-50 w-16 h-16 rounded-full flex justify-center items-center">
        <GrCertificate size={30} className="stroke-blue" />
      </div>
      <h1 className="mb-4 text-center mt-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Nos références
      </h1>
      <motion.hr variants={item} className="w-96 my-8 border-gray-300" />
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        className="md:flex grid grid-cols-3 justify-items-center md:justify-center md:gap-10 "
      >
        {images.map((i, k) => (
          <motion.div
            className="last-of-type:col-span-3"
            variants={item}
            key={k}
          >
            <Image
              src={i}
              alt="image"
              width={400}
              className="md:h-56 object-contain w-fit"
              height={500}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Images;
const images = [cOne, cTwo, cThree, cFour];
