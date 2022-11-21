import { css } from "@emotion/react";
import GameCard from "components/common/GameCard";
import Center from "components/common/Center";
import categories from "constants/categories";
import fonts from "constants/fonts.js";
import { mediaQueries as mq } from "constants/mediaqueries";
import games from "constants/games";
import { useSiteConfig } from "context/SiteConfigContext";
import languages from "constants/languages";
import currencies from "constants/currencies.js";
import colors from "constants/colors";
import { useAuth } from "context/AuthContext";

export default function CartCard({ game }) {
  const [siteConfig] = useSiteConfig();
  const { language, currency } = siteConfig;

  return (
    <div
      css={css`
        /* padding: 25px; */
        font-family: ${fonts.normalFontFamily};
        font-size: ${fonts.uiFontSize};
        width: 1000px;
        border-radius: 25px;
        padding: 25px 100px;
        margin: auto;
        display: flex;
        gap: 50px;

        background-color: ${colors.gray200};
      `}
    >
      <div
        className="cart-list"
        css={css`
          display: flex;
          flex-wrap: wrap;
          ${mq[1]} {
            margin: 0 15px;
          }
          ${mq[2]} {
            justify-content: center;
          }
        `}
      >
        <GameCard
          key={game.name}
          game={game}
          showArgs={{ showPrice: false, isLink: true, showName: false }}
        />
      </div>
      <div
        css={css`
          width: 100%;
        `}
      >
        <div>{game.displayName}</div>
        <div
          css={css`
            text-align: right;
          `}
        >
          {currencies[currency].currencyTag} {game?.price[currency]}
        </div>
        <div
          onClick={() => {}}
          css={css`
            cursor: pointer;
            &:hover {
              color: red;
            }
            margin: bottom;
          `}
        >
          Remove
        </div>
      </div>
    </div>
  );
}
