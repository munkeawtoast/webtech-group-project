import React from "react";
import { css } from "@emotion/react";
import fonts from "constants/fonts";
import colors from "constants/colors";

function ButtonInput({ placeholderText, handleOnClick }) {
  return (
    <a
      css={css`
        border-radius: 20px;
        border: 0.1em solid ${colors.white};
        background-color: ${colors.greenPrimary};
        color: ${colors.white};
        font-size: 12px;
        font-weight: bold;
        padding: 1em 2em;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
        font-family: ${fonts.normalFontFamily};
        &:active,
        &:focus,
        &:hover {
          background-color: ${colors.black};
          border: 0.1em solid ${colors.black};
        }
      `}
      onClick={handleOnClick}
    >
      {placeholderText}
    </a>
  );
}

export default ButtonInput;
