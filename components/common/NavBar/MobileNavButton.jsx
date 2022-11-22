import React from 'react'
import PropTypes from 'prop-types'

// import { useSiteConfig } from 'context/SiteConfigContext'
import languages from 'constants/languages'
import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { css } from '@emotion/react'
import { useSiteConfig } from 'context/SiteConfigContext'

MobileNavButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

function MobileNavButton(props) {
  const [siteConfig, ] = useSiteConfig()
  const { language } = siteConfig
  const { text, icon, onClick, hidden } = props
  return (
    <div
      css={css`
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        color: ${colors.gray500} !important;
        font-family: ${fonts.normalFontFamily};
        align-items: center;
        font-size: ${language == 'th' ? '14px' : 'initial'};
        gap: ${language == 'th' ? '3px' : '0px'};
        margin: 4px 0;
        display: ${hidden ? 'none' : 'flex'};
        ${onClick ? 'cursor: pointer;' : ''};
        transition: all 0.2s ease-in-out;
        &:hover {
          color: ${colors.greenPrimary} !important;
          & > * {
            filter: none;
          }
        }
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