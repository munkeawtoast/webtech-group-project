import { css } from "@emotion/react"

import Footer from "components/common/Footer"
import NavBar from "components/common/NavBar"
import colors from "constants/colors"
import fonts from "constants/fonts"
import Link from "next/link"



function ErrorPage() {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      height: 900px;
      font-family: ${fonts.normalFontFamily};
    `}>
      <NavBar logoIsCenter={false} hasLogo={true} />
      <div css={css`
        flex: 1;
        padding: 30px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}>
        <div css={css`font-size: 300px; font-weight: 1000; color: ${colors.gray400};`}>404...</div>
        <div css={css`font-size: 30px; color: ${colors.gray700}; margin-bottom: 50px;`}>Page not found. 😢</div>
        <Link href='/' passHref legacyBehavior>
          <a css={css`
            background-color: ${colors.greenPrimary};
            font-size: ${fonts.uiFontSize};
            color: ${colors.white};
            padding: 15px 30px;
          `}>
            Return to homepage.
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage