/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

import RangeInput from 'components/common/RangeInput';
import CategoryButton from 'components/category/[cat]/CategoryButton';
import categories from 'constants/categories';
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";
import { mediaQueries as mq } from 'constants/mediaqueries';


export default function CategoryOptions({ setUserPriceRange, minMax, category }) {
  return (
    <div
      css={css`
        background-color: ${colors.greenPrimary};
        width: 250px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        ${mq[1]} {
          background-color: ${colors.white};
          flex-direction: column;
          width: 100vw;
        } 
      `}
    >
      <div css={css`
        display: none;
        ${mq[1]} {
          display: block;
          font-size: ${fonts.largeFontSize};
          font-family: ${fonts.normalFontFamily};
          font-weight: 800;
          padding: 10px 0;
          text-align: center;
        }
      `}>{category.displayTag['en']}</div>
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
