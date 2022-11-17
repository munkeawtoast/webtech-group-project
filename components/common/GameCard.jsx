import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { css } from '@emotion/react'

import currencies from 'constants/currencies.js'
import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'
import { useSiteConfig } from 'context/SiteConfigContext'

GameCard.defaultProps = {
  showArgs: {
    showImage: true,
    showName: true,
    showPrice: true,
    forLibrary: false,
    isLink: false,
  },
  onClick: null,
}

const Outer = ({ children, game, showArgs }) => (
  showArgs.isLink ?
    <Link
      href={`/game/${game.name}`}
      passHref
      legacyBehavior
    >
      <a
        css={css`height: min-content;`}
      >
        {children}
      </a>
    </Link>
    :
    children
)

function GameCard({ showArgs, game, onClick }) {
  const [siteConfig, ] = useSiteConfig()
  const { currency } = siteConfig

  return (
    <Outer showArgs={showArgs} game={game}>
      <div
        css={
          css`
            width: 200px;
            box-sizing: content-box;
            margin: 0px;
            background-color: ${colors.white};
            color: ${colors.black};
            font-family: ${fonts.normalFontFamily};
            font-weight: 500;
            font-size: 18;
            width: 150px;
            position: relative;
            &:hover > span {
              ${ 
                showArgs.showPrice ? `
                  color: ${colors.greenPrimary};
                  font-weight: bold;
                ` : ''
              }
            }
          `
        }
        onClick={onClick}
      >
        <div css={css`
          position: relative;
          aspect-ratio: 3/4;
        `}>
          <Image
            alt='game image'
            src={`/game/${game.id}/thumbnail.jpg`}
            layout='fill'
            
          />
        </div>
        <span css={css`
          max-width: 150px;
          transition: all 0.1s;
        `}>
          {game.displayName}
        </span>
        <div css={css`
          display: ${showArgs.showPrice ? 'block' : 'none'};
        `}>
          { currencies[currency].currencyTag }
          {' '}
          { game.price[currency] }
        </div>
        {
          showArgs.forLibrary ? 
          <>
            <div
              css={css`
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1000;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.25s ease-in-out;
                opacity: 0;
                color: ${colors.white};
                &:hover {
                  ~ * {

                    opacity: 1;
                  }
                  opacity: 1;
                }
              `}
            >
              {'Key:'}
              <br />
              {game.key}
            </div>
            <div
              css={css`
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 100;
                top: 0;
                left: 0;
                transition: 0.25s ease-in-out;
                opacity: 0;
                filter: blur(10px);
                background-color: #000000ba;
                &:hover {
                  transform: scale(1.1);
                  opacity: 1;
                }
              `}
            />
            
          </>
            : null
        }
      </div>
    </Outer>
  )
}

export default GameCard