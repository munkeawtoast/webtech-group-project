/** @jsxImportSource @emotion/react */

import Link from 'next/link'

import colors from 'constants/colors.json'
import fonts from 'constants/fonts.json'

import { css } from '@emotion/react'

import Logo from 'components/common/Logo'

function NavBar() {
  return (
    <nav css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding: 0 25px;
      background-color: ${colors.greenPrimary};
      color: ${colors.white};
    `}>
      <Logo fillColor="white" size="40" withText={true} />
      <div
        css={css`
          display: flex;
          gap: 10px;
        `}
      >
        <CartButton />
        <AccountButton />
      </div>
    </nav>
  )
}

function AccountButton() {
  return (
    <Link href="/account">
      <a
        css={css`
          padding: 4px 2rem;
          border-radius: 100000px;
          background-color: ${colors.white};
          color: ${colors.black};
          font-size: ${fonts.uiFontSize};
          font-family: ${fonts.normalFontFamily};
          font-weight: bold;
          
        `}
      >Account</a>
    </Link>
  )
}

function CartButton() {
  return (
    <Link href="/about">
      <a
        css={css`
          width: 34px;
          height: 34px;
          border-radius: 100000px;
          background-color: ${colors.white};
        `}
      ></a>
    </Link>
  )
}

export default NavBar