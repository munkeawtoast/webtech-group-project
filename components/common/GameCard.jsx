/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import Image from 'next/image'

import { css } from '@emotion/react'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'
import currencies from 'constants/currencies.js'

import { useSiteConfig } from 'context/SiteConfigContext'

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
  const siteConfig = useSiteConfig()
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
          background-color: white;
          border-radius: 8px;
          border: 1px solid ${colors.gray300};
          padding: 4px;
          color: ${colors.black};
          font-family: ${fonts.normalFontFamily};
          font-weight: 500;
          font-size: 18;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          ${onClick || showArgs.isLink ? css`cursor: pointer;` : ''}
        `}
        onClick={onClick}
      >
        <div css={css`
          position: relative;
          width: 150px;
          height: 200px;
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