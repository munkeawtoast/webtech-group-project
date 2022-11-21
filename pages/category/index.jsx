import React from 'react'
import { css } from '@emotion/react'
import NavBar from "components/common/NavBar"
import CategoryMain from "components/category/CategoryMain"
import colors from 'constants/colors'
import Footer from 'components/common/Footer'
import Head from 'next/head'
import languages from 'constants/languages'
import { useSiteConfig } from 'context/SiteConfigContext'

export default function MyCategoryPage({ recGames }) {
    const [siteConfig, ] = useSiteConfig()
    const { language } = siteConfig
    return (
        <>
            <Head> 
                <title>{`${languages[language].tags} | Hi5`}</title>
            </Head>
            <NavBar/>
            <div 
            css=
                {css`
                    background-color: ${colors.white};
                    width: 100%;
                    margin: auto 0;
                    padding: 0 0 100px 0;
                `}
            >
                <CategoryMain recGames={recGames} />
            </div>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const gameRandom = Math.floor(Math.random() * 40) + 1;
    const recRandom = [gameRandom, gameRandom + 1, gameRandom + 2]
    return {
        props: {
            recGames: recRandom
        }
    }
}