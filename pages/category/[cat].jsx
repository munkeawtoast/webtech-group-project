/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'
import categories from 'constants/categories.json'
import games from 'constants/games.json'

import NavBar from 'components/common/NavBar'
import GameCard from 'components/common/GameCard'


function Category({ }) {
  return (
    <>
      <NavBar hasLogo={false} />
      <div css={css`
        display: flex;
        min-height: 1000px;
      `}>
        <CategoryOptions />
        <ResultList />
      </div>
    </>
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
  const router = useRouter()
  const [category, setCat] = useState({})
  const [gameCards, setGamesCards] = useState(<div />)

  useEffect(function () {
    if (!router.isReady) return
    setCat(() =>
      categories.find(i =>
        i.link == router.query.cat
      )
    )
  }, [router.isReady, router.query.cat])
  useEffect(function() {
    setGamesCards(() =>
      games
        .filter(game => game.tags.includes(category.id))
        .map(gameInfo => <GameCard{...gameInfo} />)
    )
  }, [category])

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
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto;
        gap: 15px 10px;
      `}>
        { gameCards }
      </div>
    </main>
  )
}



export default Category