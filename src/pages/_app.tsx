import "@/styles/globals.css";
import { BooleanProvider } from "@/utils/context";
import type { AppProps } from "next/app";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BooleanProvider>
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </BooleanProvider>
  );
}
