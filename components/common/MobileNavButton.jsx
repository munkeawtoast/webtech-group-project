import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import PropTypes from 'prop-types'
import colors from 'constants/colors';
import fonts from 'constants/fonts';
import { css } from '@emotion/react'

MobileNavButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  css: PropTypes.object
}

MobileNavButton.defaultProps = {
  cssStyles: {styles: ''}
}

function MobileNavButton(props) {
  const { href, text, icon, cssStyles } = props
  const router = useRouter();
  return (
    <Link href={href} passHref={true} legacyBehavior={true}>
      <a 
        css={css`
          flex: 1;
          background-color: ${router.asPath === href ? '#cff0cf' : colors.white};
          color: ${router.asPath === href ? colors.greenPrimary : colors.gray500};
          font-family: ${fonts.normalFontFamily};
          border-radius: 4px;
        `
      }>
        <div css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 4px 0;

          /* & > :first-child {
            display: grid;
            place-items: center;
            padding: 7px 0;
            width: 70px;
            border-radius: 1000px;
            background-color: ${colors.greenPrimary};
            color: ${colors.white};
          } */
        `}>

          { icon }
          <div css={css`
            margin-top: -4px;
          `}>
            { text }
          </div>
        </div>
      </a>
      
    </Link>
  )
}

export default MobileNavButton