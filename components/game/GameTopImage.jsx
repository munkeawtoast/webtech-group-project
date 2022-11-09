import Image from "next/image";
import { css } from "@emotion/react";

const TopImage = () => {
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
        <Image src={`/game/0/images/0.jpg`} layout="fill" />
      </div>
    </div>
  );
};

export default TopImage;
