import { css } from '@emotion/react'

import Link from 'next/link'

import colors from 'constants/colors'
import fonts from 'constants/fonts'

function TextButton({ href, children }) {
  return (
    <Link href={href} passHref={true} legacyBehavior={true}>
      <a
        css={css`
          padding: 4px 1em;
          height: 34px;
          border-radius: 100000px;
          background-color: ${colors.white};
          color: ${colors.black};
          font-size: ${fonts.uiFontSize};
          font-family: ${fonts.normalFontFamily};
          font-weight: bold;
        `}
      >{ children }</a>
    </Link>
  )
}

function RoundButton({ children, href }) {
  return (
    <Link href={href} passHref={true} legacyBehavior={true}>
      <a
        css={css`
          width: 34px;
          height: 34px;
          border-radius: 100000px;
          background-color: ${colors.white};
          display: grid;
          place-items: center;
          cursor: pointer;
        `} 
      >
        { children }
      </a>
    </Link>
  )
}

function LogoutButton({ onClick, cssStyles, children }) {
  return (
    <div
    css={css`padding: 4px 1em;
      height: 34px;
      border-radius: 100000px;
      background-color: ${colors.white};
      color: ${colors.black};
      font-size: ${fonts.uiFontSize};
      font-family: ${fonts.normalFontFamily};
      font-weight: bold;
      ${cssStyles}
      `}
      onClick={onClick}
      >
        { children }
    </div>
  )
}

export { TextButton, RoundButton, LogoutButton }