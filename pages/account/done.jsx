import React, { useEffect, useState } from 'react'
import NavBar from 'components/common/NavBar'
import Footer from 'components/common/Footer'
import { css } from '@emotion/react'
import fonts from 'constants/fonts'
import colors from 'constants/colors'
import languages from 'constants/languages'
import { useSiteConfig } from 'context/SiteConfigContext'
import { useRouter } from 'next/router'

function Done() {
  const [siteConfig,] = useSiteConfig()
  const { language } = siteConfig
  const [count, setCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const countDown = setInterval(() => {
      setCount(count => count + 1)
      if (count === 5) {
        router.push('/account/library')
      }
    }, 1000)
    return () => clearInterval(countDown)
  }, [])
  useEffect(() => {
    if (count === 5) {
      router.push('/account/library')
    }
  }, [count])
  return (
    <>
      <NavBar />
      <div
        css={css`
        min-height: 80vh;
        width: 100%;
        font-size: ${fonts.titleFontSize};
        background-color: ${colors.white};
        color: ${colors.greenPrimary};
        font-family: ${fonts.titleFontFamily};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
      >
        <div>
          {languages[language].boughtGameAddedToLibrary}
        </div>
        <div
          css={css`
          font-size: 24px;
        `}
        >
          {languages[language].redirectingToLibrary}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Done

// 40 คะแนน
// techno 10
// beau 10
// 