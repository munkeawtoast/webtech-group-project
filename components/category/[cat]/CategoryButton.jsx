/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { css } from "@emotion/react";
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";

export default function CategoryButton(props) {
  return (
    <Link
      href={"/category/" + props.link}
      passHref={true}
      legacyBehavior={true}
    >
      <a
        css={css`
          font-family: ${fonts.normalFontFamily};
          font-size: 16px;
          color: ${colors.black};
          background-color: ${colors.white};
          padding: 3px 5px;
          border-radius: 10000px;
        `}
      >
        {props.children}
      </a>
    </Link>
  );
}