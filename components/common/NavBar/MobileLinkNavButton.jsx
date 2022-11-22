import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { css } from '@emotion/react'
import MobileNavButton from 'components/common/NavBar/MobileNavButton'

MobileLinkNavButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

function MobileLinkNavButton(props) {
  const { href, text, icon, hidden } = props
  const router = useRouter()

  return (
    <Link href={href} passHref={true} legacyBehavior={true}>
      <a
        css={
          css`
            flex: 1;
            background-color: ${router.asPath === href ? '#cff0cf' : colors.white} !important;
            color: ${router.asPath === href ? colors.greenPrimary : colors.gray500} !important;
            font-family: ${fonts.normalFontFamily};
            border-radius: 4px;
            display: ${hidden ? 'none' : 'flex'};
          `
        }>
        <MobileNavButton {...props} />
      </a>

    </Link>
  )
}

export default MobileLinkNavButton