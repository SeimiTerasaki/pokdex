import "tailwindcss/tailwind.css";
import "../public/styles/global.css";
import "@fontsource/lustria";
import "@fontsource/lato";

import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />;
    </AnimatePresence>
  );
}

export default MyApp;
