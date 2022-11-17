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
        ${mediaQueries[0]} {
          height: 260px;
        }
        ${mediaQueries[1]} {
          height: unset;
          width: 100%;
        }
      `}
    >
      <Image
        css={css`
          border-radius: 8px;
        `}
        src={`/game/${gameID}/images/${imageID}.jpg`}
        layout="fill"
      />
    </div>
  );
};

export default TopImage;
