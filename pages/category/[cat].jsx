/** @jsxImportSource @emotion/react */

import { useContext, createContext, useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import Link from "next/link";

import { useSiteConfig } from "context/SiteConfigContext";
import colors from "constants/colors.js";
import fonts from "constants/fonts";
import categories from "constants/categories.js";
import games from "constants/games.js";
import NavBar from "components/common/NavBar";
import CategoryOptions from "components/category/[cat]/CategoryOptions";
import ResultList from "components/category/[cat]/ResultList";

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
    <>
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
        <ResultList userPriceRange={userpriceRange} category={category} games={gamesInCat} />
      </div>
    </>
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
