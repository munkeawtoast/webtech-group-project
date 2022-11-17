import { css } from "@emotion/react";
import Image from "next/image";

import fonts from "constants/fonts.js";
import { fill } from "constants/games";

import { mediaQueries } from "constants/mediaqueries";
import colors from "constants/colors";

const GameInfo = ({ gameID, gameTag, gamePrice }) => {
  return (
    <div
      css={css`
        /* width: 600px;
        height: 500px; */

        display: flex;
        flex-direction: column;

        font-family: ${fonts.normalFontFamily};
        font-size: ${fonts.normalFontSize};

        ${mediaQueries[1]} {
          flex-direction: row;
          margin-top: 62px;
        }
        ${mediaQueries[1]} {
          background-color: ${colors.gray200};
        }
      `}
    >
      <div
        css={css`
          margin: auto;
          position: relative;
          width: 400px;
          aspect-ratio: 16/9;
          margin-top: 0;
          ${mediaQueries[0]} {
            width: 240px;
            margin: 0;
          }
          ${mediaQueries[1]} {
            width: 350px;
            margin: 0;
          }
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
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          ${mediaQueries[1]} {
            flex-direction: column;
            margin: 0 32px;
          }
        `}
      >
        <div
          css={css`
            font-size: ${fonts.uiFontSize};
          `}
        >
          <p
            css={css`
              ${mediaQueries[0]} {
                margin-bottom: 0;
              }
            `}
          >
            ${gamePrice.usd}
          </p>
        </div>
        <div>
          <p
            css={css`
              ${mediaQueries[0]} {
                margin-top: 0;
              }
            `}
          >
            Tags: {gameTag.map((tag) => tag.displayTag.en + " ")}
          </p>
        </div>
        <button
          css={css`
            border: none;
            border-radius: 8px;

            padding: 6px;

            font-family: ${fonts.normalFontFamily};
            font-size: ${fonts.uiFontSize};

            cursor: pointer;
            :hover {
              color: blue;
            }
          `}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameInfo;
