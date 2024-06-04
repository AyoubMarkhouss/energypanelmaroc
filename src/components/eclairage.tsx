import Image from "next/image";
import React from "react";
import bookie from "@/../public/booki.webp";
import green from "@/../public/green-arrow.webp";
import lookie from "@/../public/lookie.webp";
import jookie from "@/../public/jookie.webp";
import Footer from "./footer";
import { MagicCard, MagicContainer } from "./ui/magic-card";
const Chauffe = () => {
  return (
    <div className="flex px-5 md:px-0 flex-col mt-16 gap-10">
      <div className="flex flex-col gap-10">
        <MagicContainer className="max-w-5xl mx-auto flex flex-col gap-10">
          <MagicCard
            className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  p-10 shadow-2xl"
            borderWidth={3}
          >
            <h2 className="text-4xl text-start w-full mb-3 font-semibold">
              Description :
            </h2>
            <p className="pr-7 text-xl">
              Energy Panel Maroc propose une gamme d’éclairage LED industriel de
              la marque EFIX, conçue pour répondre aux exigences les plus
              élevées en termes de performance et de durabilité.
            </p>
            <div className="pointer-events-none absolute inset-0 h-full bg-gradient-to-r from-green/35 to-blue/70" />
          </MagicCard>
          <MagicCard
            className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  p-10 shadow-2xl"
            borderWidth={3}
          >
            <h2 className="text-4xl text-start w-full mb-3 font-semibold">
              Études Préliminairess
            </h2>
            <div className="pr-7 flex flex-col gap-5 text-xl">
              <p>
                <span className="font-bold">
                  • Capteurs Solaires Haute Performance :
                </span>
                Les capteurs solaires Novasolar sont conçus pour maximiser
                l&apos;absorption de l&apos;énergie solaire, garantissant un
                chauffage rapide et efficace de l&apos;eau.
              </p>
              <p>
                <span className="font-bold">• Réservoir Isolé :</span>Le
                réservoir d&apos;eau est doté d&apos;une isolation thermique
                supérieure, permettant de maintenir l&apos;eau chaude plus
                longtemps et de minimiser les pertes de chaleur.
              </p>
              <p>
                <span className="font-bold">• Durabilité et Fiabilité :</span>
                Fabriqués avec des matériaux de haute qualité, les chauffe-eau
                solaires Novasolar sont résistants aux conditions climatiques
                difficiles et offrent une longue durée de vie.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 h-full bg-gradient-to-r from-green/25 to-blue/40" />
          </MagicCard>
          <MagicCard
            className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  p-10 shadow-2xl"
            borderWidth={3}
          >
            <h2 className="text-4xl text-start w-full mb-3 font-semibold">
              Avantages
            </h2>
            <div className="pr-7 flex flex-col gap-5 text-xl">
              <p>
                <span className="font-bold">- Économies d&apos;Énergie :</span>
                Réduction significative des factures d&apos;électricité grâce à
                l&apos;utilisation de l&apos;énergie solaire gratuite et
                abondante.
              </p>
              <p>
                <span className="font-bold">- Écologique :</span>Contribution à
                la réduction des émissions de CO2 et à la protection de
                l&apos;environnement.
              </p>
              <p>
                <span className="font-bold">- Retour sur Investissement :</span>
                Amortissement rapide grâce aux économies réalisées sur les coûts
                énergétiques.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 h-full bg-gradient-to-r from-green/35 to-blue/70" />
          </MagicCard>
        </MagicContainer>
        <MagicContainer className="flex max-w-5xl mx-auto flex-col gap-10">
          <MagicCard
            className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]  p-10 shadow-2xl"
            borderWidth={3}
          >
            <div>
              <h2 className="text-4xl text-start w-full mb-3 font-semibold">
                Applications
              </h2>
              <div className="pr-7 flex flex-col gap-5 text-xl">
                <p>
                  <span className="font-semibold">- Résidences Privées :</span>{" "}
                  Idéal pour fournir de l&apos;eau chaude sanitaire de manière
                  fiable et économique.
                </p>
                <p>
                  <span className="font-semibold">
                    - Entreprises et Établissements Publics :
                  </span>
                  Convient également pour des installations de plus grande
                  envergure telles que des hôtels, des hôpitaux et des écoles.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 h-full bg-gradient-to-r from-green/35 to-blue/70" />
          </MagicCard>
        </MagicContainer>
        <p className="container py-24 text-center">
          Investissez dans un chauffe-eau solaire Novasolar avec Energy Panel
          Maroc et profitez d&apos;une énergie propre et renouvelable
          dès aujourd&apos;hui.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Chauffe;
