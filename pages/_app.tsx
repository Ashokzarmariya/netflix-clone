import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthState from '../context/AuthState'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthState> <Component {...pageProps} /> </AuthState>
  
}

export default MyApp
