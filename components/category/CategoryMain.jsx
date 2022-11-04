/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Center from "components/common/Center"
import CategoryLink from "./CategoryLink"
import categories from "constants/categories"
import fonts from 'constants/fonts.js'

export default function CategoryMain() {
    return (
        <div
        css=
            {css`
                /* padding: 25px; */
                /* border: 5px solid black; */
                font-family: ${fonts.normalFontFamily};
                font-size: ${fonts.titleFontSize};
            `}
        >
            <Center><h1>Category</h1></Center>
            <div
            css=
                {css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 2vw;
                `}
            >
                {categories.filter(cate => cate.showOnCategory).map(cate => <CategoryLink key={cate.id} name={cate.en_displayTag} link={'/category/'+cate.link} pic={'/category/'+cate.image}/>)}
            </div>

            <Center><h1>Recommend</h1></Center>
            
        </div>
    )
}
