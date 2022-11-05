/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import { useState } from 'react'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'

import { css } from '@emotion/react'

import { TextButton, RoundButton } from 'components/common/Buttons'
import Logo from 'components/common/Logo'


NavBar.defaultProps = {
  hasLogo: true
}

function NavBar({ hasLogo, logoIsCenter }) {
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
      {
        !logoIsCenter
        ? <Logo fillColor="white" size="40" withText={true} hidden={!hasLogo} withLink={true} />
        : null
      }
      <div>
        
        {
          logoIsCenter
           ? <Logo fillColor="white" size="40" withText={false} hidden={!hasLogo} withLink={true} />
           : null
        }
      </div>
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin-left: auto;
        `}
      >
        <RoundButton href="/cart"> 
          <i
            class="fa-solid fa-cart-shopping"
            style={{
              color: colors.black,
              transform: "translatey(1px))"
            }}
          ></i>
        </RoundButton>
        <TextButton href="/account">
          { 'Account' }
        </TextButton>
      </div>
    </nav>
  )
}



export default NavBar