/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import Link from 'next/link'

import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'

import categories from 'constants/categories.json'
import NavBar from 'components/common/NavBar'


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
          categories.filter(cat => cat.showOnCategory).map((cat) => <CategoryButton key={cat.name + cat.id} {...cat} >{cat.en_displayTag}</CategoryButton>) // {...cat } = unpack keys and values into CategoryButton
        }
      </div>
    </div>
  )
}

function CategoryButton(props) {
  const router = useRouter()
  const catQuery = router.query
  return (
    <Link href={'/category' + props.link}>
      <a css={css`

        font-family: ${fonts.normalFontFamily};
        font-size: 16px;
        ${
          catQuery.cat == props.link ?
            `
            color: ${colors.white};
            box-shadow: 0px 0px 4px ${colors.white};
            background-color: ${colors.greenPrimary};
            `
          :
            `
            color: ${colors.black};
            background-color: ${colors.white};
            `
        };
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
  return (
    <div css={css`
      background-color: ${colors.white};
      flex: 1;
    `}>

    </div>
  )
}

export default Category