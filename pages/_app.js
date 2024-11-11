// pages/_app.js
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "nprogress/nprogress.css"; // Import NProgress CSS here
import "../styles/globals.css";

// Custom Chakra UI theme (optional)
const customTheme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleRouteChangeStart = () => NProgress.start();
    const handleRouteChangeEnd = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeEnd);
    Router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeEnd);
      Router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
