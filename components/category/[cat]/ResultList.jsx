import { css } from "@emotion/react";

import GameCard from "components/common/GameCard";
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";

export default function ResultList({ userPriceRange, category, games }) {
  return (
    <main
      css={css`
        background-color: ${colors.white};
        flex: 1;
        padding: 10px 40px;
      `}
    >
      <span
        css={css`
          font-size: ${fonts.largeFontSize};
          font-family: ${fonts.normalFontFamily};
          font-weight: 800;
          padding:0 0 10px 0;
          display: inline-block;
        `}
      >
        {category.displayTag["en"]}
      </span>
      <div
        css={css`
          display: flex;
          gap: 15px 10px;
        `}
      >
        {games.map((game) => (
          <GameCard
            game={game}
            showArgs={{
              showImage: true,
              showName: true,
              showButton: true,
              isLink: true,
            }}
          />
        ))}
      </div>
    </main>
  );
}