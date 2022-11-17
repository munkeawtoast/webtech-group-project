import fonts from "constants/fonts.js";
import { css } from "@emotion/react";
import { mediaQueries } from "constants/mediaqueries";
const GameName = ({ name }) => {
  return (
    <div>
      <p
        css={css`
          font-family: ${fonts.titleFontFamily};
          font-size: ${fonts.titleFontSize};
          ${mediaQueries[1]} {
            margin-left: 32px;
          }
          ${mediaQueries[2]} {
            font-size: 28px;
          }
        `}
      >
        {name}
      </p>
    </div>
  );
};

export default GameName;
