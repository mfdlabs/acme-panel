import type { AppProps } from 'next/app'

function AcmePanelApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default AcmePanelApp
