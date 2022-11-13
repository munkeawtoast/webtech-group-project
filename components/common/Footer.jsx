import { css } from "@emotion/react"
import colors from "constants/colors"
import fonts from "constants/fonts"



function Footer() {
  return (
    <footer css={css`
      height: 250px;
      background-color: ${colors.gray500};
      font-family: ${fonts.normalFontFamily};
      color:${colors.white};
      font-size: 100px;
      display: grid;
      place-items: center;
    `}>
      <span>FOOTER</span>
      
    </footer>
  )
}

export default Footer