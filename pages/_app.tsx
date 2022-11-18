import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "body",
        // color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "black")(props),
        // bgGradient: mode("white", "linear(to-t, #7928CA, #FF0080)")(props),
        lineHeight: "base",
      },
    }),
  },
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
export default MyApp;
