import fonts from "constants/fonts.js";
import { css } from "@emotion/react";
const GameName = ({ name }) => {
  return (
    <div>
      <p
        css={css`
          font-family: ${fonts.titleFontFamily};
          font-size: ${fonts.titleFontSize};
        `}
      >
        {name}
      </p>
    </div>
  );
};

export default GameName;
