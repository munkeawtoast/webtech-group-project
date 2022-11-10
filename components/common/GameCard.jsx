import Link from 'next/link'
import Image from 'next/image'

import { css } from '@emotion/react'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'
import currencies from 'constants/currencies.js'

import { getSiteConfig } from 'context/SiteConfigContext'

GameCard.defaultProps = {
  showArgs: {
    showImage: true,
    showName: true,
    showButton: false,
    isLink: false,
  },
  onClick: null,
}

function GameCard({ showArgs, game, onClick }) {
  const siteConfig = getSiteConfig()
  const { currency } = siteConfig

  const Outer = ({ children }) => (
    showArgs.isLink ?
      <Link href={`/game/${game.name}`}>
        {children}
      </Link>
      :
      children
  )
  return (
    <Outer>
      <div css={
        css`
          width: 200px;
          box-sizing: content-box;
          padding: 0 10px;
          background-color: ${colors.white};
          /* border-radius: 8px;
          border: 1px solid ${colors.gray300};
          padding: 4px; */
          color: ${colors.black};
          font-family: ${fonts.normalFontFamily};
          font-weight: 500;
          font-size: 18;
          width: 150px;
          ${onClick || showArgs.isLink ? css`cursor: pointer;` : ''}
        `}
        onClick={onClick}
      >
        <div css={css`
          position: relative;
          aspect-ratio: 3/4;
        `}>
          <Image
            src={`/game/${game.id}/thumbnail.jpg`}
            layout='fill'
          />
        </div>
        <span css={css`
          max-width: 150px;
          /* word-wrap: break-word; */
        `}>
          {game.displayName}
        </span>
        <div>
          {currency ? currencies[currency].currencyTag : null}
          {currency ? game.price[currency] : null}
        </div>
      </div>
    </Outer>
  )
}

export default GameCard