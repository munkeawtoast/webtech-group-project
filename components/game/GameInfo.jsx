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

        background-color: wheat;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;

          padding: 32px;
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
          <Image src={`/game/${gameID}/images/0.jpg`} layout="fill" />
        </div>
        <div></div>
        <div
        // css={css`
        //   margin-left: 6px;
        // `}
        >
          <p>${gamePrice.usd}</p>
        </div>

        <button
          css={css`
            font-family: ${fonts.normalFontFamily};
            font-size: ${fonts.uiFontSize};
            border: none;
            border-radius: 12px;

            padding: 6px;
          `}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameInfo;
