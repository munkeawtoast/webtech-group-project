import Head from "next/head";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";


import { getSiteConfig } from "context/SiteConfigContext";
import categories from "constants/categories.js";
import games from "constants/games.js";
import NavBar from "components/common/NavBar";
import CategoryOptions from "components/category/[cat]/CategoryOptions";
import ResultList from "components/category/[cat]/ResultList";
import colors from "constants/colors";

// prop category มาจาก getServerSideProps ข้างล่าง
function Category({ category }) {
  const [userpriceRange, setUserPriceRange] = useState([0, Infinity]);
  const { currency } = getSiteConfig();
  const [minMax, setMinMax] = useState([0, 99999999]);
  const [numRange, setNumRange] = useState([0, 99999999]);
  const [gamesInCat, setGamesInCat] = useState([]);

  useEffect(() => {

    setGamesInCat(games.filter((game) => game.tags.includes(category["id"])));
  }, [category]);

  return (
    <>
      <Head>
        <title>{`${category.displayTag['en']} | Hi5`}</title>
      </Head>
      <NavBar hasLogo={true} logoIsCenter={true} />
      <div
        css={css`
          display: flex;
          min-height: 1000px;
          background-color: ${colors.white};
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
