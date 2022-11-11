import { css } from "@emotion/react";

import GameCard from "components/common/GameCard";
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";
import { mediaQueries as mq } from "constants/mediaqueries";

export default function ResultList({ userPriceRange, category, games }) {
  return (
    <main
      css={css`
        background-color: ${colors.white};
        flex: 1;
        padding: 10px 40px;
        ${mq[1]} {
          padding: 0;
        }
      `}
    >
      <span
        css={css`
          font-size: ${fonts.largeFontSize};
          font-family: ${fonts.normalFontFamily};
          font-weight: 800;
          padding:0 0 10px 0;
          display: inline-block;
          ${mq[1]} {
            display: none;
          }
        `}
      >
        {category.displayTag["en"]}
      </span>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          ${mq[2]} {
            justify-content: center;
          }
        `}
      >
        {games
          .sort(sortFunc)
          .filter(game => {
            console.log(userPriceRange[0], game.price['thb'], userPriceRange[1])
            return (game.price['thb'] <= userPriceRange[1] && game.price['thb'] >= userPriceRange[0])
          })
          .map((game) => (
            <GameCard
              game={game}
              showArgs={{
                showImage: true,
                showName: true,
                showButton: true,
                isLink: true,
              }}
            />
          ))
        }
      </div>
    </main>
  );
}