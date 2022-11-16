import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ImgChild from "./GameImagesComponents/ImagesChild";
const GameImages = ({ imageID, gameID, setimgId }) => {
  function incrementImgId() {
    setimgId(imgId => (imgId + 1) % 4);
  }
  function decrementImgId() {
    setimgId(imgId => (imgId + 3) % 4);
  }
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
      `}
    >
      <button
        css={css`
          position: absolute;
          left: -108px;
          font-size: 108px;

          background-color: Transparent;
          border: none;

          cursor: pointer;
        `}
        onClick={decrementImgId}
      >
        {"<"}
      </button>
      <ImgChild gameID={gameID} ImageID={0} setimgID={setimgId} />
      <ImgChild gameID={gameID} ImageID={1} setimgID={setimgId} />
      <ImgChild gameID={gameID} ImageID={2} setimgID={setimgId} />
      <ImgChild gameID={gameID} ImageID={3} setimgID={setimgId} />
      <button
        css={css`
          position: absolute;
          right: -108px;
          font-size: 108px;

          background-color: Transparent;
          border: none;

          cursor: pointer;
        `}
        onClick={incrementImgId}
      >
        {">"}
      </button>
    </div>
  );
};

export default GameImages;
