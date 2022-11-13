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

const Game = ({ game, categoryArray }) => {
  const [imgID, setimgID] = useState(0);
  return (
    <>
      <NavBar />
      <div
        css={css`
          background-color: ${colors.white};
        `}
      >
        <div>
          <p css={css`
            margin-top: 0;
          `}>{game.name}</p>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            height: 400px;
            gap: 108px;
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
        <GameImages imageID={imgID} gameID={game.id} setimgID={setimgID} />
      </div>
      <Footer />
    </>
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
