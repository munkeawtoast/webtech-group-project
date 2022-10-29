/** @jsxImportSource @emotion/react */

import { useContext, createContext } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'
import categories from 'constants/categories.js'
import games from 'constants/games.js'
import NavBar from 'components/common/NavBar'
import GameCard from 'components/common/GameCard'

const CategoryContext = createContext(null)


// prop category มาจาก getServerSideProps ข้างล่าง
function Category({ category }) {
  return (
    <CategoryContext.Provider value={category}>
      <NavBar hasLogo={false} />
      <div css={css`
        display: flex;
        min-height: 1000px;
      `}>
        <CategoryOptions />
        <ResultList />
      </div>
    </CategoryContext.Provider>
  )
}

function CategoryOptions() {
  return (
    <div css={css`
      background-color: ${colors.greenPrimary};
      width: 250px;
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
    `}>
      <span css={css`
        margin: 0 0 8px 0;
        font-family: ${fonts.normalFontFamily};
        color: ${colors.black};
        font-size: ${fonts.uiFontSize};
        font-weight: bold;
      `}>Tags</span>
      <div css={css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 4px;
      `}>
        {
          categories.filter(cat => cat.showOnCategory).map((cat) => (
            <CategoryButton key={cat.name + cat.id} {...cat} >
              {cat.en_displayTag}
            </CategoryButton>
          )) // {...cat } = unpack keys and values into CategoryButton
        }
      </div>
    </div>
  )
}

function CategoryButton(props) {
  return (
    <Link href={'/category/' + props.link}>
      <a css={css`
        font-family: ${fonts.normalFontFamily};
        font-size: 16px;
        color: ${colors.black};
        background-color: ${colors.white};
        padding: 3px 5px;
        border-radius: 10000px;
        cursor: pointer;
      `}>
        {props.children}
      </a>
    </Link>
  )
}

function ResultList() {
  const category = useContext(CategoryContext)

  return (
    <main css={css`
      background-color: ${colors.white};
      flex: 1;
      padding: 10px 40px;
    `}>
      <span css={css`
        font-size: 32px;
        font-family: ${fonts.normalFontFamily};
        font-weight: 800;
      `}>
        {category.en_displayTag}
      </span>
      <div css={css`
        display: flex;
        gap: 15px 10px;
      `}>
        {
          games
            .filter(game => game.tags.includes(category.id))
            .map(game => <GameCard
              game={game}
              showArgs={{
                showImage: true,
                showName: true,
                showButton: true,
                isLink: true,
              }}
            />)
        }
      </div>
    </main>
  )
}

/* detail getServersideProps
DOCUMENT: https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
function getServersideProps จะรันใน server และส่ง props ให้ตัวที่ใส่ export default ไปให้ส่วน client
*/
export async function getServerSideProps(context) {
  const category = categories.find(i =>
    i.link == context.params.cat
  )
  if (!category) return { notFound: true }
  return {
    props: {
      category
    }
  }
}


export default Category