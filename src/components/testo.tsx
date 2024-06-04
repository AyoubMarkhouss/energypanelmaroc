import React, { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { useInView } from "framer-motion";
import { useBooleanContext } from "@/utils/context";
import { LiaStarSolid } from "react-icons/lia";
const Testo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { sectionPlace } = useBooleanContext();
  useEffect(() => {
    if (isInView) {
      sectionPlace("certifications");
    }
  }, [isInView, sectionPlace]);
  return (
    <div ref={ref} className="my-48">
      <div className="flex flex-col gap-8">
        <h2 className="mb-4 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Ce que disent nos clients
        </h2>
      </div>
      <div className="md:h-[20rem] h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default Testo;

const testimonials = [
  {
    quote:
      "Passer à ces systèmes d'éclairage a été l'une des meilleures décisions pour notre bureau. Non seulement nous avons considérablement réduit notre consommation d'énergie, mais la luminosité et la qualité de la lumière se sont également améliorées de manière spectaculaire. Je recommande vivement ces solutions écologiques !",
    name: "Amira Al-Hussein",
    title: "Gestionnaire de bureau",
  },
  {
    quote:
      "Notre entrepôt avait besoin de solutions d'éclairage efficaces, et ces systèmes ont dépassé nos attentes. L'installation a été sans accroc et nous avons remarqué une baisse significative de nos factures d'électricité. De plus, l'amélioration de la qualité de l'éclairage a rendu notre espace de travail beaucoup plus productif.",
    name: "Ali Ben Youssef",
    title: "Responsable des opérations",
  },
  {
    quote:
      "Nous cherchions des options d'éclairage durables pour notre magasin de détail, et ces systèmes étaient parfaits. Ils offrent une excellente luminosité tout en étant incroyablement écoénergétiques. Nos clients et notre personnel ont tous remarqué la différence. Un excellent investissement pour toute entreprise !",
    name: "Leila Al-Farsi",
    title: "Propriétaire de magasin",
  },
  {
    quote:
      "L'implémentation de ces solutions d'éclairage dans notre maison a été une révolution. Les économies d'énergie sont substantielles et la qualité de la lumière est fantastique. C'est un soulagement de savoir que nous contribuons à un monde plus vert sans sacrifier le confort ou la visibilité.",
    name: "Omar Al-Mansouri",
    title: "Propriétaire",
  },
  {
    quote:
      "En tant qu'administratrice scolaire, trouver des solutions rentables et écologiques est une priorité. Ces systèmes d'éclairage ont rendu nos salles de classe plus lumineuses et favorables à l'apprentissage, tout en réduisant nos dépenses énergétiques. Nous sommes très satisfaits des résultats.",
    name: "Fatima Al-Qadi",
    title: "Administratrice scolaire",
  },
];
