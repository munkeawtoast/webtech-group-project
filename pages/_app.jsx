import '../styles/globals.css'
import SiteConfigContextProvider from 'context/SiteConfigContext'
import AuthContextProvider from 'context/AuthContext'
import { css, Global } from '@emotion/react'
import colors from 'constants/colors'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={css`
        body {
          background-color: ${colors.greenPrimary};
        }
      `} />
      <SiteConfigContextProvider>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </SiteConfigContextProvider>
    </>
  )
}

export default MyApp
