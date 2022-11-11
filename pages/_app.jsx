import '../styles/globals.css'
import SiteConfigContextProvider from 'context/SiteConfigContext'
import AuthContextProvider from 'context/AuthContext'
import { css, Global } from '@emotion/react'
import colors from 'constants/colors'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, viewport-fit=cover"
        />
      </Head>
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
