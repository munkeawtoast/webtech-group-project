import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { css } from "@emotion/react"

import Footer from "components/common/Footer"
import NavBar from "components/common/NavBar"
import colors from "constants/colors"
import fonts from "constants/fonts"
import Link from "next/link"
import { mediaQueries as mq } from "constants/mediaqueries"



function ErrorPage() {
  const [timeLeft, setTimeLeft] = useState(5)
  const router = useRouter()
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {

    if (timeLeft == 1) {
      router.push('/')
    }
  }, [timeLeft, router])
  return (
    <>
      <NavBar logoIsCenter={false} hasLogo={true} />
      <div css={css`
        height: 900px;
        font-family: ${fonts.normalFontFamily};
        background-color: ${colors.white};
        flex: 1;
        padding: 30px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
        <div css={
          css`
          font-size: 300px;
          font-weight: 1000;
          color: ${colors.gray400};
          ${mq[1]} {
            font-size: 200px;
          }
          ${mq[2]} {
            font-size: 135px;
          }
        `}>404...</div>
        <div css={css`font-size: 30px; color: ${colors.gray700}; margin-bottom: 50px;`}>Page not found. 😢</div>
        <Link href='/' passHref legacyBehavior>
          <a css={css`
            background-color: ${colors.greenPrimary};
            font-size: ${fonts.uiFontSize};
            color: ${colors.white};
            padding: 15px 30px;
          `}>
            Returning to homepage in {timeLeft} second{timeLeft === 1 || timeLeft === 0 ? '' : 's'}.
          </a>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage