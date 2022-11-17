import { css } from "@emotion/react";
import Image from "next/image";
import { mediaQueries } from "constants/mediaqueries";
const ImgChild = ({ gameID, ImageID, setimgID }) => {
  return (
    <div
      css={css`
        position: relative;
        height: 168.75px;
        aspect-ratio: 16/9;

        ${mediaQueries[0]} {
          height: 90px;
          /* flex: 1; */
        }
        ${mediaQueries[1]} {
          height: unset;
          flex: 1;
        }
      `}
      onClick={function () {
        setimgID(ImageID);
      }}
    >
      <Image
        css={css`
          border-radius: 8px;
          cursor: pointer;
        `}
        src={`/game/${gameID}/images/${ImageID}.jpg`}
        layout="fill"
      />
    </div>
  );
};

export default ImgChild;
