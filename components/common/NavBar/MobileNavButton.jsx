import React from 'react'
import PropTypes from 'prop-types'

// import { useSiteConfig } from 'context/SiteConfigContext'
import languages from 'constants/languages'
import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { css } from '@emotion/react'

MobileNavButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

function MobileNavButton(props) {
  const { text, icon, onClick } = props
  return (
    <div
      css={css`
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4px 0;
        background-color: ${colors.white};
        color: ${colors.gray500};
        ${onClick ? 'cursor: pointer;' : ''};
      `}
      onClick={onClick}
    >
      {icon}
      <div css={css`
        margin-top: -4px;
      `}>
        {text}
      </div>
    </div>
  )
}

export default MobileNavButton