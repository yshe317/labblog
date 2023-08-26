import { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return <Component {...pageProps} />
}
