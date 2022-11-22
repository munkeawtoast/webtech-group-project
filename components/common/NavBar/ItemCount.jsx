import { css } from '@emotion/react'
import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { useAuth } from 'context/AuthContext'
import React from 'react'

const forBottomNav = `
  font-size: 10px;
  height: 15px;
  width: 15px;
`

const forTopNav = `
  font-size: 10px;
  height: 15px;
  width: 15px;
`

export default function ItemCount({ myFor }) {
  const [auth,] = useAuth()
  const { cart } = auth
  return (
    <div
      css={css`
        
        position: absolute;
        bottom: 0;
        font-family: ${fonts.normalFontFamily};
        right: 0;
        background-color: ${colors.red};
        ${myFor === 'bottomNav' ? forBottomNav : forTopNav}
        transform: translate(50%, 50%);
        border-radius: 1000px;
        display: ${cart.length > 0 ? 'grid' : 'none'};
        place-items: center;
        font-weight: 600;
        color: ${colors.white};
      `}
    >{cart.length}</div>
  )
}
