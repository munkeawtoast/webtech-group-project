/** @jsxImportSource @emotion/react */

import Image from 'next/image'
import { css } from '@emotion/react'

import fonts from 'constants/fonts.json'

function Logo({ fillColor, size, withText}) {
  return (
    <div css={css`
      display: flex;
      align-items: center;
      gap: 8px;
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