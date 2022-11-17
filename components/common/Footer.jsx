import { css } from "@emotion/react"
import styled from "@emotion/styled"
import colors from "constants/colors"
import fonts from "constants/fonts"
import Logo from "./Logo"

const AuthorName = styled.span`
  display: block;
  font-size: ${fonts.normalFontSize};
`

function Footer() {
  return (
    <footer css={css`
      min-height: 250px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 0px 10px 0px ${colors.gray300};
      background-color: ${colors.white};
      font-family: ${fonts.normalFontFamily};
      color:${colors.greenPrimary};
      font-size: ${fonts.normalFontSize};
      display: flex;
      padding: 35px;
    `}>
      <div>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}>
          <Logo
            fillColor='green'
            size="80"
            withText={true}
          />
          <span css={css`font-size: ${fonts.uiFontSize}; font-weight:bold;`}>We are recruiting!</span>
        </div>
      </div>
      <div>
        <span
          css={css`
            font-size: ${fonts.uiFontSize};
            font-weight: bold;
          `}
        >
          คณะผู้จัดทำ
        </span>
        <p>
          <AuthorName>
            นางสาว วสุมดี ช่างสากล 64070100
          </AuthorName>
          <AuthorName>
            นาย บวรวิช กิตติดำเกิง 64070173
          </AuthorName>
          <AuthorName>
            นาย ภัทรชัย เทิบจันทึก 64070203
          </AuthorName>
          <AuthorName>
            นาย รณชัย ศรีสังวาลย์ 64070219
          </AuthorName>
          <AuthorName>
            นาย วงศพัทธ์ พันธุประภาส 64070223
          </AuthorName>
        </p>
      </div>
    </footer>
  )
}

export default Footer