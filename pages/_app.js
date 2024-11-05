import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleRouteChangeStart = () => NProgress.start();
    const handleRouteChangeEnd = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeEnd);
    Router.events.on("routeChangeError", handleRouteChangeEnd);

    // Clean up events on unmount
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeEnd);
      Router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, []);

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
