/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import { css } from '@emotion/react'

import fonts from 'constants/fonts.js'

function Logo({ fillColor, size, withText, hidden }) {
  return (
    <div css={css`
      transition: ease-in-out 0.3s;
      opacity: ${!hidden ? 1 : 0};
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: ${ hidden ? 'default' : 'initial'}
    `}>
      <Image
        src={'/logo/logo-' + fillColor + '.png'} 
        width={size + 'px'}
        height={size + 'px'}
      />
      {withText &&
        <span
          css={css`
            font-family: ${fonts.titleFontFamily};
            font-size: 24px;
          `}
        >
          Hi Five
        </span>
      }
    </div>
  )
}

export default Logo