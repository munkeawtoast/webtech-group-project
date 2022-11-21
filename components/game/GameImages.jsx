import Image from "next/image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ImgChild from "./GameImagesComponents/ImagesChild";
import { mediaQueries } from "constants/mediaqueries";
import colors from "constants/colors";
const GameImages = ({ imageID, gameID, setimgId }) => {
  function incrementImgId() {
    setimgId((imgId) => (imgId + 1) % 4);
  }
  function decrementImgId() {
    setimgId((imgId) => (imgId + 3) % 4);
  }
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 100%;
        ${mediaQueries[1]} {
          margin-top: 36px;
          gap: 12px;
        }
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

          transition:0.25s;
          :hover {
            color: ${colors.greenPrimary};
          }
          ${mediaQueries[0]} {
            left: -96px;
            font-size: 96px;
          }
          ${mediaQueries[1]} {
            display: none;
          }
        `}
        onClick={decrementImgId}
      >
        &lt;
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
          
          transition:0.25s;
          :hover {
            color: ${colors.greenPrimary};
          }
          ${mediaQueries[0]} {
            right: -96px;
            font-size: 96px;
          }
          ${mediaQueries[1]} {
            display: none;
          }
        `}
        onClick={incrementImgId}
      >
        &gt;
      </button>
    </div>
  );
};

export default GameImages;
