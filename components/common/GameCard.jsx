import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { css } from "@emotion/react";

import currencies from "constants/currencies.js";
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";
import { useSiteConfig } from "context/SiteConfigContext";
import { mediaQueriesSizes as mqs } from "constants/mediaqueries";
import languages from "constants/languages";

GameCard.defaultProps = {
  showArgs: {
    showImage: true,
    showName: true,
    showPrice: true,
    forLibrary: false,
    isLink: false,
  },
  onClick: null,
};

const Outer = ({ children, game, showArgs }) =>
  showArgs.isLink ? (
    <Link href={`/game/${game.name}`} passHref legacyBehavior>
      <a
        css={css`
          height: min-content;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {children}
      </a>
    </Link>
  ) : (
    children
  );

function GameCard({ showArgs, game, onClick }) {
  const defaultKeyHoverText = "";
  const [keyHoverText, setKeyHoverText] = React.useState(defaultKeyHoverText);
  function changeText(text) {
    const original = languages[language].clickToCopyKey;
    setKeyHoverText(text);
    setTimeout(() => {
      setKeyHoverText(original);
    }, 1000);
  }
  const [siteConfig] = useSiteConfig();
  const { language, currency } = siteConfig;

  useEffect(() => {
    setKeyHoverText(languages[language].clickToCopyKey)
  }, [language])

  return (
    <Outer showArgs={showArgs} game={game}>
      <div
        css={css`
          
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
            ${showArgs.showPrice
            ? `
                  color: ${colors.greenPrimary};
                  font-weight: bold;
                `
            : ""}
          }
        `}
        onClick={onClick}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            aspect-ratio: 3/4;
          `}
        >
          <Image
            alt="game image"
            src={`/game/${game.id}/thumbnail.jpg`}
            width={150}
            height={200}
          />
        </div>
        <span
          css={css`
            max-width: 150px;
            transition: all 0.1s;
            display: ${showArgs.showName ? "block" : "none"};
          `}
        >
          {game.displayName}
        </span>
        <div
          css={css`
            display: ${showArgs.showPrice ? "block" : "none"};
          `}
        >
          {currencies[currency].currencyTag} {game?.price[currency]}
        </div>
        {showArgs.forLibrary ? (
          <div
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
              z-index: 100;
              top: 0;
              cursor: pointer;
              left: 0;
              transition: 0.25s;
              opacity: 0;
              background-color: ${colors.white};
              color: ${colors.gray800};
              display: grid;
              place-items: center;
              box-shadow: 0px 0px 10px 0px ${colors.gray400};
              &:hover {
                opacity: 1;
              }
            `}
            onClick={() => {
              navigator.clipboard.writeText(game.key);
              changeText(languages[language].keyCopied);
            }}
          >
            {keyHoverText}
          </div>
        ) : null}
      </div>
    </Outer>
  );
}

export default GameCard;
