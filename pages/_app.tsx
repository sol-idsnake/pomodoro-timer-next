import type { AppProps /* , AppContext */ } from 'next/app';

import '../styles/timer.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // eslint-disable-line
}

export default MyApp;
