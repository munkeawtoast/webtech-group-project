import NavBar from "components/common/NavBar";
import { css } from "@emotion/react";
import GameInfo from "components/game/GameInfo";
import Footer from "components/common/Footer";
import TopImage from "components/game/GameTopImage";

const Game = () => {
  return (
    <div>
      <NavBar />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 36px;
        `}
      >
        <TopImage />
        <GameInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Game;
