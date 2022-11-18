import { css } from "@emotion/react"
import styled from "@emotion/styled"
import colors from "constants/colors"
import fonts from "constants/fonts"
import Logo from "./Logo"
import { mediaQueries as mq } from "constants/mediaqueries"

const AuthorName = styled.span`
  display: block;
  font-size: ${fonts.normalFontSize};
`

function Footer() {
  return (
    <footer css={css`
      z-index: 10;
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
      ${mq[2]} {
        flex-direction: column;
      }
    `}>
      <div>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          ${mq[2]} {
            margin-bottom: 25px;
          }
        `}>
          <div css={css`
            ${mq[1]} {
              display: none;
            }
          `}>
            <Logo
              fillColor='green'
              size={"80"}
              withText={true}
            />
          </div>
          <div css={css`
            display: none;
            ${mq[1]} {
              display: block;
            }
          `}>
            <Logo
              fillColor='green'
              size={"50"}
              withText={true}
            />
          </div>
          <span css={css`font-size: ${fonts.uiFontSize}; font-weight:bold;`}>We are recruiting!</span>
        </div>
      </div>
      <div
        css={css`
          ${mq[2]} {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      >
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