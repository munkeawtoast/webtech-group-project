import Image from "next/image";
import { css } from "@emotion/react";

const TopImage = ({ imageID }) => {
  return (
    <div
    //   css={css`
    //     display: flex;
    //     align-items: center;
    //   `}
    >
      <div
        css={css`
          margin: auto;
          position: relative;
          width: 400px;
          aspect-ratio: 16/9;
        `}
      >
        <Image src={`/game/0/images/${imageID}.jpg`} layout="fill" />
      </div>
    </div>
  );
};

export default TopImage;
