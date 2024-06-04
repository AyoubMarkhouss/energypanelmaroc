import img from "@/../public/kiki.webp";
import secondImage from "@/../public/love.webp";
import firstImage from "@/../public/prodi.jpg";
import { container, item } from "@/lib/animation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { MagicCard, MagicContainer } from "./ui/magic-card";
import One from "@/../public/efi.webp";
import Two from "@/../public/sola.webp";
import Call from "./icons/call";
const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const cardsRef = useRef(null);
  const cardsIsInView = useInView(cardsRef, { once: false });

  return (
    <div id="produit" ref={ref} className="pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-5 lg:py-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            className="max-w-screen-sm sm:text-center sm:mx-auto"
          >
            <motion.div variants={item}>
              <Link
                href="/"
                aria-label="View"
                className="inline-block mb-5 rounded-full sm:mx-auto"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-blue"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                </div>
              </Link>
            </motion.div>
            <motion.h2
              variants={item}
              className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              Nos produits
            </motion.h2>
            <motion.hr
              variants={item}
              className="w-full my-8 border-gray-300"
            />
          </motion.div>
        </div>
        <div ref={cardsRef}>
          <MagicContainer
            className={
              "flex md:h-[800px] w-full flex-col gap-4 lg:h-[33rem] px-5 md:px-0 lg:flex-row"
            }
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate={cardsIsInView ? "visible" : ""}
              className="flex flex-col md:flex-row gap-4"
            >
              {content.map((j) => {
                return (
                  <MagicCard
                    key={j.label}
                    borderWidth={3}
                    className="flex flex-col h-[32rem] w-full cursor-pointer overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl"
                  >
                    <div className="h-72 z-40">
                      <Image
                        src={j.image}
                        alt="image"
                        className="h-72 object-cover z-40"
                        width={600}
                        height={600}
                      />
                    </div>
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
                    <div className="mt-auto ml-20 md:ml-8 w-full pb-5">
                      <Link
                        className="h-full mt-auto w-full pb-24"
                        target="_blank"
                        href={j.link}
                      >
                        <button className="md:px-20 px-10 flex justify-center items-center gap-3 w-fit mt-auto text-blue font-bold text-xl py-4 bg-green hover:bg-green/85 rounded">
                          <Call className="w-6 fill-blue" />
                          contactez-nous
                        </button>
                      </Link>
                    </div>
                    <div className="pointer-events-none absolute inset-0 h-full bg-green/20" />
                  </MagicCard>
                );
              })}
            </motion.div>
          </MagicContainer>
        </div>
      </div>
    </div>
  );
};

export default Products;

const content = [
  {
    image: firstImage,
    link: "https://www.novasolarmaroc.com/",
    label: "Chauffe eau solaire",
    logo: Two,
  },
  {
    image: img,
    label: "Éclairage LED",
    link: "tel:0522663518",
    logo: One,
  },
  {
    image: secondImage,
    label: "Panneaux photovoltaïque",
    link: "https://www.novasolarmaroc.com/",
    logo: Two,
  },
];
