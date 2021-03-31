import { AppProps } from 'next/app';
import { wrapper } from '../store';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
