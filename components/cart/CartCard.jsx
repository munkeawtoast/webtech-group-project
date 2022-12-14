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
import Link from "next/link";

export default function CartCard({ game }) {
  const [siteConfig] = useSiteConfig();
  const { language, currency } = siteConfig;
  const [, setAuth] = useAuth();
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

        ${mq[1]} {
          gap: 10px;
          padding: 25px;
          width: 100%;
        }
        ${mq[2]} {
          flex-direction: column;
        }
      `}
    >
      <GameCard
        key={game.name}
        game={game}
        showArgs={{ showPrice: false, isLink: true, showName: false }}
      />
      <div
        css={css`
          width: 100%;
        `}
      >
        <Link href={`/game/${game.name}`}>{game.displayName}</Link>
        <div
          css={css`
            text-align: right;
          `}
        >
          {currencies[currency].currencyTag} {game?.price[currency]}
        </div>
        <div
          onClick={() => {
            setAuth(prev => {
              return {
                ...prev,
                cart: prev.cart.filter(id => id !== game.id)
              }
            })

          }}
          css={css`
            cursor: pointer;
            &:hover {
              color: red;
            }
            margin: bottom;
          `}
        >
          {languages[language].removeFromCart}
        </div>
      </div>
    </div>
  );
}
