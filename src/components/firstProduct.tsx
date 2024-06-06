import One from "@/../public/efi.webp";
import firkiko from "@/../public/firkiko.jpg";
import firsLed from "@/../public/firLed.jpg";
import firvoya from "@/../public/firvoya.jpg";
import forkiko from "@/../public/forkiko.jpg";
import forthLed from "@/../public/forthLed.jpg";
import forvoya from "@/../public/forvoya.jpg";
import seckiko from "@/../public/seckiko.jpg";
import secLed from "@/../public/secLed.jpg";
import secvoya from "@/../public/secvoya.jpg";
import Two from "@/../public/sola.webp";
import thirdLed from "@/../public/thirdLed.jpg";
import thirkiko from "@/../public/thirkiko.jpg";
import thirvoya from "@/../public/thirvoya.jpg";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { container, item } from "@/lib/animation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MagicCard, MagicContainer } from "./ui/magic-card";
const Content = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px 0px 0px",
  });
  const cardsRef = useRef(null);
  const cardsIsInView = useInView(cardsRef, { once: false });
  return (
    <div id="activité" ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        className="px-4 my-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <motion.h2
            variants={item}
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          >
            Notre activité se concentre sur trois volets principaux
          </motion.h2>
        </div>
        <div ref={cardsRef}>
          <MagicContainer
            className={"flex w-full md:flex-col gap-4 lg:flex-row"}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate={cardsIsInView ? "visible" : ""}
              className="grid md:grid-cols-3 grid-cols-1 gap-4"
            >
              {content.map((j) => {
                return (
                  <Link
                    href={j.link}
                    target="_blank"
                    key={j.label}
                    className=""
                  >
                    <MagicCard
                      borderWidth={3}
                      className="flex flex-col shrink-0 w-full cursor-pointer overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl"
                    >
                      <p className="text-2xl font-semibold text-center p-4">
                        {j.label}
                      </p>
                      <div className="flex justify-center">
                        <Image
                          src={j.logo}
                          alt="image"
                          width={500}
                          height={500}
                          className="w-32"
                        />
                      </div>
                      <div className="h-72 mt-auto z-40">
                        <Carousel
                          plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                          ]}
                          opts={{
                            loop: true,
                          }}
                          className="w-full"
                        >
                          <CarouselContent>
                            {j.image.map((l, index) => (
                              <CarouselItem key={index}>
                                <Image
                                  src={l}
                                  alt="image"
                                  className="h-72 w-full object-cover z-40"
                                  width={600}
                                  height={600}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      </div>
                      <div className="pointer-events-none absolute inset-0 h-full bg-green/20" />
                    </MagicCard>
                  </Link>
                );
              })}
            </motion.div>
          </MagicContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;

const content = [
  {
    image: [firkiko, seckiko, thirkiko, forkiko],
    label: "Chauffe eau solaire",
    logo: Two,
    link: "https://www.novasolarmaroc.com/",
  },
  {
    image: [firsLed, secLed, thirdLed, forthLed],
    label: "Éclairage LED",
    logo: One,
    link: "tel:0522663518",
  },
  {
    image: [firvoya, secvoya, thirvoya, forvoya],
    label: "Panneaux photovoltaïque",
    logo: Two,
    link: "https://www.novasolarmaroc.com/",
  },
];
