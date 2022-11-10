import Link from "next/link";
import { css } from "@emotion/react";
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";
import { mediaQueries as mq} from "constants/mediaqueries";

export default function CategoryButton(props) {
  return (
    <Link
      href={"/category/" + props.link}
      passHref={true}
      legacyBehavior={true}
    >
      <a
        css={css`
          display: inline-block;
          font-family: ${fonts.normalFontFamily};
          font-size: 16px;
          color: ${colors.black};
          background-color: ${colors.white};
          border-radius: 10000px;
          padding: 4px 1em;
          ${mq[1]} {
            padding: 4px 1em;
            margin: 0 5px 0 0;
            box-shadow: inset 0 -.0625em .25em #0a0a0a76; 
          }
        `}
      >
        {props.children}
      </a>
    </Link>
  );
}