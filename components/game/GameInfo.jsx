/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Image from "next/image";

import fonts from "constants/fonts.js";

const GameInfo = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        width: 600px;
        height: 500px;
        background-color: wheat;
      `}
    >
      <div
        css={css`
          /* position: relative;
          width: 600px;
          height: 600px; */
        `}
      >
        <Image src={`/game/0/images/0.jpg`} width={400} height={200} />
      </div>
      <div>
        <p>tag tag tag</p>
      </div>
      <button
        css={css`
          border: none;
          border-radius: 12px;

          padding: 6px;

          font-family: ${fonts.normalFontFamily};
          font-size: ${fonts.uiFontSize};
        `}
      >
        Add to cart
      </button>
    </div>
  );
};

export default GameInfo;
