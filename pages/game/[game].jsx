import NavBar from "components/common/NavBar";
import { css } from "@emotion/react";
import GameInfo from "components/game/GameInfo";
import Footer from "components/common/Footer";

const Game = () => {
  return (
    <div>
      <NavBar />
      <GameInfo />
      <Footer />
    </div>
  );
};

export default Game;
