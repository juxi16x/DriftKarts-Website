import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { GlobalStyle } from '../style/GlobalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Drift Karts Wilamowice</title>
        <metadata aria-description='drift karts'>
        </metadata>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
