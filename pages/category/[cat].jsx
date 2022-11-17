import Head from "next/head"
import { useState, useEffect } from "react"
import { css } from "@emotion/react"
import categories from "constants/categories.js"
import games from "constants/games.js"
import NavBar from "components/common/NavBar"
import Footer from "components/common/Footer"
import CategoryOptions from "components/category/[cat]/CategoryOptions"
import ResultList from "components/category/[cat]/ResultList"
import colors from "constants/colors"
import sortfunctions from "constants/sortfunctions"
import { mediaQueries as mq } from "constants/mediaqueries"
import { useSiteConfig } from "context/SiteConfigContext"



// prop category มาจาก getServerSideProps ข้างล่าง
function Category({ category }) {
  const [siteConfig, ] = useSiteConfig()
  const { language, currency } = siteConfig
  const [minMax, setMinMax] = useState([0, 99999999])
  const [userPriceRange, setUserPriceRange] = useState([0, 99999999])
  const [sortFunc, setSortFunc] = useState(sortfunctions.find(i => i.id === 0))

  function changePriceRange(key, val) {
    if (!['min', 'max'].includes(key)) {
      throw 'Price Range null key Exception'
    }
    console.log(val)
    let tempVal = val;
    const temp = {
      min: userPriceRange[0],
      max: userPriceRange[1]
    }
    if (val === '') {
      if (key == 'min') {
        tempVal = 0
      }
      else if (key == 'max') {
        tempVal = 99999999
      }
    }
    temp[key] = tempVal
    setUserPriceRange([temp['min'], temp['max']])
  }

  function changeSortFunc(funcId) {
    setSortFunc(sortfunctions.find(i => i.id === funcId))
  }

  useEffect(() => {
    let minVal = 99999999
    let maxVal = 0
    category.games.forEach((game) => {
      if (game.price[currency] < minVal) {
        minVal = game.price[currency]
      }
      if (game.price[currency] > maxVal) {
        maxVal = game.price[currency]
      }
    })
    setMinMax([minVal, maxVal])
  }, [category, currency]);

  return (
    <>
      <Head>
        <title>{`${category.displayTag[language]} | Hi5`}</title>
      </Head>
      <NavBar hasLogo={true} logoIsCenter={true} />
      <div css={css`background-color: ${colors.white};`}>
        <div
          css={css`
            display: flex;
            min-height: 1000px;
            ${mq[1]} {
              background-color: white;
              flex-direction: column;
              width: 100vw;
            } 
          `}
        >
          <CategoryOptions
            onPriceRangeChange={changePriceRange}
            onSortFuncChange={changeSortFunc}
            minMax={minMax}
            category={category}
          />
          <ResultList userPriceRange={userPriceRange} category={category} games={category.games} sortFunc={sortFunc} />
        </div>
      </div>
      <Footer />
    </>
  );
}

/* detail getServersideProps
DOCUMENT: https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
function getServersideProps จะรันใน server และส่ง props ให้ตัวที่ใส่ export default ไปให้ส่วน client
*/
export async function getServerSideProps(context) {
  const category = categories.find((i) => i.link == context.params.cat);
  category.games = games.filter(g => g.tags.includes(category.id))
  if (!category) return { notFound: true };
  return {
    props: {
      category,
    },
  };
}

export default Category;
