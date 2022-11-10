import Link from 'next/link'
import { useState } from 'react'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'

import { css } from '@emotion/react'

import { TextButton, RoundButton } from 'components/common/Buttons'
import Logo from 'components/common/Logo'
import { mediaQueries as mq } from 'constants/mediaqueries'


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
           ? <div css={css`
              position: absolute;
              left: 50%;
              transform: translate(-50%);
              top: 5px;

              ${mq[2]} {
                left: unset;
                transform: unset;
                top: unset;
                position: relative;
              }
            `}>
              <Logo fillColor="white" size="45" withText={false} hidden={!hasLogo} withLink={true} />
            </div>
           : null
        }
      </div>
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin-left: auto;
          ${mq[2]} {
            display: none;
          }
        `}
      >
        <RoundButton href="/cart"> 
          <i
            class="fa-solid fa-cart-shopping"
            style={{color: colors.black}}
          ></i>
        </RoundButton>
        <TextButton href="/account">
          { 'Account' }
        </TextButton>
      </div>
      <div css={css`
        display: none;
        ${mq[2]} {
          display: block;
        }
      `}>
          <button
            css={css`
              all: unset;
              padding: 10px;
            `}
          >
            <i
              class="fa-solid fa-bars fa-xl"
              style={{
                
              }}
            ></i>
          </button>
      </div>
    </nav>
  )
}



export default NavBar