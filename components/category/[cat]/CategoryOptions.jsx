import { css } from '@emotion/react'

import RangeInput from 'components/common/RangeInput';
import CategoryButton from 'components/category/[cat]/CategoryButton';
import categories from 'constants/categories';
import colors from "constants/colors.js";
import fonts from "constants/fonts.js";
import { mediaQueries as mq } from 'constants/mediaqueries';
import { useSiteConfig } from 'context/SiteConfigContext';
import languages from 'constants/languages';

export default function CategoryOptions({ onPriceRangeChange, minMax, category }) {
  const [siteConfig, ] = useSiteConfig()
  const { language } = siteConfig
  return (
    <aside
      css={css`
        background-color: ${colors.greenPrimary};
        color: ${colors.white};
        font-family: ${fonts.normalFontFamily};
        width: 250px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        ${mq[1]} {
          background-color: ${colors.white};
          flex-direction: column;
          justify-items:stretch;
          width: 100vw;
        } 
      `}
    >
      <div css={css`
        display: none;
        ${mq[1]} {
          display: block;
          font-size: ${fonts.largeFontSize};
          
          font-weight: 800;
          padding: 10px 0;
          text-align: center;
        }
        `}>{category.displayTag[language]}
      </div>
      <div css={
        css`
          ${mq[1]} {
            display: flex;
            gap: 15px;
            justify-content: flex-start;
            & > :nth-child(1) {
              width: calc(100% - 200px - 15px);
            }
            & > :nth-child(2) {
              width: 200px;
            }
          }
          ${mq[2]} {
            display: block;
            & > div {
              width: 100% !important;
            }
          }
        `
      }>
        <div css={css`
          /* ${mq[1]} {
            width: calc(100% - 200px - 15px);
          }
          ${mq[2]} {
            width: ;
          } */
        `}>
          <span
            css={css`
              display: inline-block;
              margin: 0 0 8px 0;
              color: ${colors.white};
              font-size: ${fonts.uiFontSize};
              font-weight: bold;
              ${mq[1]} {
                color: ${colors.greenPrimary};
              }
            `}
          >
            { languages[language].tags }
          </span>
          <div>
            <div
              css={css`
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 8px 4px;
                ${mq[1]} {
                  flex: 1;
                  padding: 0 0 8px 0;
                  display: block;
                  white-space: nowrap;
                  overflow: auto;
                }
              `}
            >
              {
                categories
                  .filter((cat) => cat.showOnCategory)
                  .map((cat) => (
                    <CategoryButton key={cat.name + cat.id} {...cat}>
                      {cat.displayTag[language]}
                    </CategoryButton>
                  )) // {...cat } = unpack keys and values into CategoryButton
                }
            </div>
          </div>
        </div>
        <div>
          <span
            css={css`
              display: inline-block;
              margin: 0 0 8px 0;
              color: ${colors.white};
              font-size: ${fonts.uiFontSize};
              font-weight: bold;
              ${mq[1]} {
                color: ${colors.greenPrimary};
              }
              `}
          >
            { languages[language]['price-range'] }
          </span>
          <RangeInput minMax={minMax} onChange={onPriceRangeChange} />
        </div>
      </div>
      <hr css={css`
        display: none;
        ${mq[1]} {
          display: block;
          margin: 25px auto 10px;
          width: 90%;
          border: 0 solid transparent;
          border-top: 0.5px solid ${colors.gray200};
        }
      `} />
    </aside>
  );
}
