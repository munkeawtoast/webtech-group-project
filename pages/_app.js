import '../styles/globals.css'
import SiteConfigContextProvider from 'context/SiteConfigContext'
import AuthContextProvider from 'context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <SiteConfigContextProvider>
      <AuthContextProvider> 
        <Component {...pageProps} />
      </AuthContextProvider> 
    </SiteConfigContextProvider>
  )
}

export default MyApp
