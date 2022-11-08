import React from 'react'
import { css } from '@emotion/react'
import NavBar from "components/common/NavBar"
import CategoryMain from "components/category/CategoryMain"
import colors from 'constants/colors'

export default function MyCategoryPage() {
    return (
        <>
            <NavBar/>
            <div 
            css=
                {css`
                    background-color: ${colors.white};
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
