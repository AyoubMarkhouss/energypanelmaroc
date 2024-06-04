import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Heroimg } from "@/components/Heroimg";
import Service from "@/components/Service";
import Products from "@/components/products";
import FirstProduct from "@/components/firstProduct";
import { useBooleanContext } from "@/utils/context";

const inter = Inter({ subsets: ["latin"] });
import bijijo from "@/../public/logo.png";
import Xx from "@/components/icons/xx";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Images from "@/components/images";
import Panneaux from "@/components/Panneaux";
import Testo from "@/components/testo";
import Contact from "@/components/contact";
import Reference from "@/components/reference";
import Head from "next/head";

export default function Home() {
  const { toggleBoolean, booleanState } = useBooleanContext();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Fondée en 2016, Energy Panel Maroc est une entreprise pionnière sur le marché marocain dans le domaine des énergies renouvelables."
        />
        <link rel="icon" href="/logo.png" />
        <title>Energy panel maroc</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <main className={cn(booleanState ? "max-h-screen overflow-hidden" : "")}>
        <Navbar />
        <div className="z-20">
          <Heroimg />
          <FirstProduct />
          <Service />
          <Products />
          <Images />

          <Reference />
          <Testo />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

const items = [
  { label: "A props", link: "" },
  { label: "produits", link: "" },
  { label: "références", link: "" },
  { label: "nos clients", link: "" },
];
