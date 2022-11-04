/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import NavBar from "components/common/NavBar"
import CategoryMain from "components/category/CategoryMain"

export default function MyCategoryPage() {
    return (
        <>
            <NavBar/>
            <div 
            css=
                {css`
                    width: 100%;
                    margin: auto 0;
                    padding: 5px;
                `}
            >
                <CategoryMain/>
            </div>
        </>
    )
}
