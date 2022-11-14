import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ImgChild from "./GameImagesComponents/ImagesChild";
const GameImages = ({ imageID, gameID, setimgID }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
      `}
    >
      <span
        css={css`
          position: absolute;
          left: -108px;
          font-size: 108px;
        `}
      >
        {"<"}
      </span>
      <ImgChild gameID={gameID} ImageID={0} setimgID={setimgID} />
      <ImgChild gameID={gameID} ImageID={1} setimgID={setimgID} />
      <ImgChild gameID={gameID} ImageID={2} setimgID={setimgID} />
      <ImgChild gameID={gameID} ImageID={3} setimgID={setimgID} />
      <span
        css={css`
          position: absolute;
          right: -108px;
          font-size: 108px;
        `}
      >
        {">"}
      </span>
    </div>
  );
};

export default GameImages;
