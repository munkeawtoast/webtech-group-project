/** @jsxImportSource @emotion/react */

import { useContext, createContext, useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import Link from "next/link";

import { useSiteConfig } from "context/SiteConfigContext";
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";
import categories from "constants/categories.js";
import games from "constants/games.js";
import NavBar from "components/common/NavBar";
import GameCard from "components/common/GameCard";
import RangeInput from "components/common/RangeInput";

const CategoryContext = createContext(null);
const GamesInCatContext = createContext(null);

// prop category มาจาก getServerSideProps ข้างล่าง
function Category({ category }) {
  const [userpriceRange, setUserPriceRange] = useState([0, Infinity]);
  const { currency } = useSiteConfig();
  const [minMax, setMinMax] = useState([0, 99999999]);
  const [numRange, setNumRange] = useState([0, 99999999]);
  const [gamesInCat, setGamesInCat] = useState([]);

  useEffect(() => {
    setGamesInCat(games.filter((game) => game.tags.includes(category["id"])));
  }, [category]);

  return (
    <CategoryContext.Provider value={category}>
      <GamesInCatContext.Provider value={gamesInCat}>
        <NavBar hasLogo={true} logoIsCenter={true} />
        <div
          css={css`
            display: flex;
            min-height: 1000px;
          `}
        >
          <CategoryOptions
            setUserPriceRange={setUserPriceRange}
            minMax={minMax}
          />
          <ResultList userPriceRange={userpriceRange} />
        </div>
      </GamesInCatContext.Provider>
    </CategoryContext.Provider>
  );
}

function CategoryOptions({ setUserPriceRange, minMax }) {
  return (
    <div
      css={css`
        background-color: ${colors.greenPrimary};
        width: 250px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
      `}
    >
      <span
        css={css`
          margin: 0 0 8px 0;
          font-family: ${fonts.normalFontFamily};
          color: ${colors.black};
          font-size: ${fonts.uiFontSize};
          font-weight: bold;
        `}
      >
        Tags
      </span>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 4px;
          padding: 0 0 30px;
        `}
      >
        {
          categories
            .filter((cat) => cat.showOnCategory)
            .map((cat) => (
              <CategoryButton key={cat.name + cat.id} {...cat}>
                {cat.displayTag["en"]}
              </CategoryButton>
            )) // {...cat } = unpack keys and values into CategoryButton
        }
      </div>
      <span
        css={css`
          margin: 0 0 8px 0;
          font-family: ${fonts.normalFontFamily};
          color: ${colors.black};
          font-size: ${fonts.uiFontSize};
          font-weight: bold;
        `}
      >
        Price range
      </span>
      <RangeInput minMax={minMax} />
    </div>
  );
}

function CategoryButton(props) {
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

function ResultList({ userPriceRange }) {
  const category = useContext(CategoryContext);
  const gamesInCat = useContext(GamesInCatContext);
  return (
    <main
      css={css`
        background-color: ${colors.white};
        flex: 1;
        padding: 10px 40px;
      `}
    >
      <span
        css={css`
          font-size: 32px;
          font-family: ${fonts.normalFontFamily};
          font-weight: 800;
          margin:0 0 10px 0;
        `}
      >
        {category.displayTag["en"]}
      </span>
      <div
        css={css`
          display: flex;
          gap: 15px 10px;
        `}
      >
        {gamesInCat.map((game) => (
          <GameCard
            game={game}
            showArgs={{
              showImage: true,
              showName: true,
              showButton: true,
              isLink: true,
            }}
          />
        ))}
      </div>
    </main>
  );
}

/* detail getServersideProps
DOCUMENT: https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
function getServersideProps จะรันใน server และส่ง props ให้ตัวที่ใส่ export default ไปให้ส่วน client
*/
export async function getServerSideProps(context) {
  const category = categories.find((i) => i.link == context.params.cat);
  if (!category) return { notFound: true };
  return {
    props: {
      category,
    },
  };
}

export default Category;
