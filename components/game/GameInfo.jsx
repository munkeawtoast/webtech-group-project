import { css } from "@emotion/react";
import Image from "next/image";

import fonts from "constants/fonts.js";
import { fill } from "constants/games";

const GameInfo = ({ gameID, gameTag, gamePrice }) => {
  return (
    <div
      css={css`
        /* width: 600px;
        height: 500px; */

        font-family: ${fonts.normalFontFamily};
        font-size: ${fonts.uiFontSize};
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;

          /* gap: 20px; */
        `}
      >
        <div
          css={css`
            margin: auto;
            position: relative;
            width: 400px;
            aspect-ratio: 16/9;
          `}
        >
          <Image
            css={css`
              border-radius: 15px;
            `}
            src={`/game/${gameID}/thumbnail-wide.jpg`}
            layout="fill"
          />
        </div>
        <div>
          <p>{gameTag.map((tag) => tag.displayTag.en + " ")}</p>
        </div>
        <div
        // css={css`
        //   margin-left: 6px;
        // `}
        >
          <p>${gamePrice.usd}</p>
        </div>

        <button
          css={css`
            border: none;
            border-radius: 8px;

            padding: 6px;

            font-family: ${fonts.normalFontFamily};
            font-size: ${fonts.uiFontSize};
          `}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameInfo;
