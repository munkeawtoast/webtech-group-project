import NavBar from "components/common/NavBar";
import { css } from "@emotion/react";
import GameInfo from "components/game/GameInfo";
import Footer from "components/common/Footer";
import TopImage from "components/game/GameTopImage";
import GameImages from "components/game/GameImages";
import colors from "constants/colors";
import games from "constants/games";
import categories from "constants/categories";
import { useState } from "react";
import GameName from "components/game/GameName";

const Game = ({ game, categoryArray }) => {
  const [imgID, setimgID] = useState(0);
  
  return (
    <div
      css={css`
        background-color: ${colors.white};
      `}
    >
      <NavBar />
      <div
        css={css`
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 1280px;
          margin: 0 auto;
        `}
      >
        <GameName name={game.displayName} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            /* gap: 108px; */
            margin-bottom: 60px;
          `}
        >
          <TopImage gameID={game.id} imageID={imgID} />
          <GameInfo
            gameID={game.id}
            gameTag={categoryArray}
            gamePrice={game.price}
          />
        </div>
        <GameImages imageID={imgID} gameID={game.id} setimgId={setimgID} />
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const game = games.find((i) => i.name == context.params.game);
  if (!game) return { notFound: true };
  const categoryArray = categories.filter((i) => game.tags.includes(i.id));
  return {
    props: {
      game,
      categoryArray,
    },
  };
}

export default Game;
