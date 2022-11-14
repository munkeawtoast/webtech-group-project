import { css } from "@emotion/react";
import Image from "next/image";
const ImgChild = ({ gameID, ImageID, setimgID }) => {
  return (
    <div
      css={css`
        position: relative;
        height: 168.75px;
        aspect-ratio: 16/9;
      `}
      onClick={function () {
        setimgID(ImageID);
      }}
    >
      <Image
        css={css`
          border-radius: 8px;
        `}
        src={`/game/${gameID}/images/${ImageID}.jpg`}
        layout="fill"
      />
    </div>
  );
};

export default ImgChild;
