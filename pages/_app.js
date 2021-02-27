import Head from "next/head";

import App from "next/app";
import LayoutWrapper from "../layouts/layout-wrapper";
import '../styles/globals.css'



const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>
        <Component {...pageProps} />
    </>
  );
};



export default MyApp;