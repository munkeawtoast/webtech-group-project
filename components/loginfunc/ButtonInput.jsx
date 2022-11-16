import React from "react";
import { css } from "@emotion/react";
import fonts from "constants/fonts";
import colors from "constants/colors";

function ButtonInput( {placeholderText} ){
  return(
    <a css={css`
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
      font-family: ${fonts.normalFontFamily};
      &:Active, &:focus, &:hover {
        background-color: ${colors.black};
        border: 0.1em solid ${colors.black};
      }
    `}>{ placeholderText }</a>
  )
}

export default ButtonInput