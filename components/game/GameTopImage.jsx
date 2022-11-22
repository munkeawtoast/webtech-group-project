import Image from "next/image";
import { css } from "@emotion/react";
import { mediaQueries } from "constants/mediaqueries";

const TopImage = ({ imageID, gameID }) => {
  return (
    <div
      css={css`
        position: relative;
        height: 400px;
        aspect-ratio: 16/9;
        overflow: hidden;
        display: flex;
        border-radius: 8px;
        ${mediaQueries[0]} {
          height: 260px;
        }
        ${mediaQueries[1]} {
          height: unset;
          width: 100%;
        }
      `}
    >
      {
        [0, 1, 2, 3].map(id => (
          <div
            key={id}
            css={css`
              position: absolute;
              height: 100%;
              transition: all 0.5s ease-in;
              opacity: ${id === imageID ? 1 : 0};
              aspect-ratio: 16/9;
            `}
          >
            <Image
              alt="game"
              src={`/game/${gameID}/images/${id}.jpg`}
              layout="fill"
            />
          </div>
        ))
      }
    </div>
  );
};

export default TopImage;
