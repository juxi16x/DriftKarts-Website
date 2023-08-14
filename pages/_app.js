"use client";

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { GlobalStyle } from '../style/GlobalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Drift Karts Wilamowice</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
