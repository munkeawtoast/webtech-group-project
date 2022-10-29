/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import Image from 'next/image'

import { css } from '@emotion/react'
import { useContext, useEffect } from 'react'

import colors from 'constants/colors'
import fonts from 'constants/fonts'
import currencies from 'constants/currencies.json'

import { SiteConfigContext } from 'context/SiteConfigContext'

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
  const siteConfig = useContext(SiteConfigContext)
  const currency = siteConfig.siteConfig.currency

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
            src={'/game/' + game.thumbnail}
            layout='fill'
          />
        </div>
        <div>
          {game.displayName}
        </div>
        <div>
          {currencies[currency].currencyTag}
          {' '}
          {game.price[currency]}
        </div>
      </div>
    </Outer>
  )
}

export default GameCard