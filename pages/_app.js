import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import FooterComponent from '@/components/FooterComponent'
import Alert from '@/components/Alert'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Alert/>
    <Navbar/>
    <Component {...pageProps} />
    <FooterComponent/>
    </>
  )
}
