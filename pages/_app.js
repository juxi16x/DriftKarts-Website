import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { GlobalStyle } from '../style/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
