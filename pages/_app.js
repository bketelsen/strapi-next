import Head from "next/head";

import App from "next/app";
import LayoutWrapper from "../layouts/layout-wrapper";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import '../styles/globals.css'


// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global,categories } = pageProps;
  const state = {
    global: global,
    categories: categories,
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>
      <GlobalContext.Provider value={state}>
        <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
        </LayoutWrapper>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  const categories = await fetchAPI("/categories");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global,categories } };
};

export default MyApp;
