import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
const kallisto = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-Kallisto_Bold_Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/fonnts.com-Kallisto_Bold.otf",
      weight: "700",
      style: "Bold",
    },
    {
      path: "../../public/fonts/fonnts.com-Kallisto_Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/fonnts.com-Kallisto_Light.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: '--kallisto',
});

export default function App({ Component, pageProps }: AppProps) {
  return <main
    className={`${kallisto?.variable}  font-sans`}
    
  >
    <Component {...pageProps} />;
  </main>
}
