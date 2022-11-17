import NavBar from "components/common/NavBar";
import { css, Global } from "@emotion/react";
import GameInfo from "components/game/GameInfo";
import Footer from "components/common/Footer";
import TopImage from "components/game/GameTopImage";
import GameImages from "components/game/GameImages";
import colors from "constants/colors";
import games from "constants/games";
import categories from "constants/categories";
import { useState } from "react";
import GameName from "components/game/GameName";
import { mediaQueries } from "constants/mediaqueries";

const Game = ({ game, categoryArray }) => {
  const [imgID, setimgID] = useState(0);

  return (
    <>
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
            max-width: 1240px;

            /* background-color: lightgray; */
            margin: 0 auto;

            ${mediaQueries[0]} {
              max-width: 768px;
            }
            ${mediaQueries[1]} {
              flex-direction: column;
            }
          `}
        >
          <GameName name={game.displayName} />
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              margin-bottom: 60px;
              ${mediaQueries[1]} {
                flex-direction: column;
                margin-bottom: 0;
              }
            `}
          >
            <TopImage gameID={game.id} imageID={imgID} />
            <div
              css={css`
                display: none;
                ${mediaQueries[1]} {
                  display: block;
                }
              `}
            >
              <GameImages
                imageID={imgID}
                gameID={game.id}
                setimgId={setimgID}
              />
            </div>
            <GameInfo
              gameID={game.id}
              gameTag={categoryArray}
              gamePrice={game.price}
            />
          </div>
          <div
            css={css`
              ${mediaQueries[1]} {
                display: none;
              }
            `}
          >
            <GameImages imageID={imgID} gameID={game.id} setimgId={setimgID} />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
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
