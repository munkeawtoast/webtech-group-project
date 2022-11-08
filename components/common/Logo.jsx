import Image from 'next/image'
import Link from 'next/link'
import { css } from '@emotion/react'

import fonts from 'constants/fonts.js'

function Logo({ fillColor, size, withText, hidden, withLink }) {
  const WithLink = withLink
    ? ({ children }) => <Link
      href='/'
      passHref={true}
      legacyBehavior={true}
    >
      <a
        css={css`
          cursor: pointer;
      `}>{children}</a>
    </Link>
    : ({ children }) => children
  return (
    <WithLink>
      <div css={css`
        transition: ease-in-out 0.3s;
        display: ${!hidden ? 'flex' : 'none'};
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
              font-size: 30px;
            `}
          >
            Hi Five
          </span>
        }
      </div>
    </WithLink>
  )
}

export default Logo