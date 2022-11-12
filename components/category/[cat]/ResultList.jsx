import { useEffect, useState } from "react"
import { css } from "@emotion/react"

import GameCard from "components/common/GameCard"
import colors from "constants/colors.js"
import fonts from "constants/fonts.js"
import { mediaQueries as mq } from "constants/mediaqueries"

export default function ResultList({ sortFunc, userPriceRange, category, games }) {
  const [gameComps, setGameComps] = useState([])

  useEffect(() => {
    setGameComps(games
      .filter(game => game.price['thb'] <= userPriceRange[1] && game.price['thb'] >= userPriceRange[0])
      .sort(sortFunc.func('thb'))
      .map(game => (
        <GameCard
          key={game.name}
          game={game}
          showArgs={{
            showImage: true,
            showName: true,
            showButton: true,
            isLink: true,
          }}
        />
      ))
    )
  }, [games, sortFunc, userPriceRange])

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
          ${mq[1]} {
            margin: 0 15px;
          }
          ${mq[2]} {
            justify-content: center;
          }
        `}
      >
        {
          gameComps.length !== 0
            ? gameComps
            :
            <span css={
              css`
                color: ${colors.gray500};
                font-size: 1.75em;
                ${mq[1]} {
                  padding-left: 10px;
                }
              `
            }>No games found 😢</span>
        }
      </div>
    </main>
  );
}