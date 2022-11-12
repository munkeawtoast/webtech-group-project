import Image from "next/image";
import { css } from "@emotion/react";

const TopImage = ({ imageID, gameID }) => {
  return (
    <div
      css={css`
        margin: auto;
        position: relative;
        flex-basis: 100%;
        aspect-ratio: 16/9;
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
