/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Link from "next/link"
import colors from 'constants/colors.js'
import fonts from 'constants/fonts.js'

export default function CategoryLink({name, link, pic}) {
    return (
        <Link href={link} passHref={true} legacyBehavior={true}>
            <a
            css=
                {css`
                    background: linear-gradient(${colors.greenPrimary+"00"} 40%, ${colors.greenPrimary+"FF"}), url(${pic});
                    background-size: cover;
                    background-position: center;
                    width: 20vw;
                    height: 12vw;
                    border-radius: 35px;

                    font-size: ${fonts.uiFontSize};
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    padding: 10px;
                    font-family: ${fonts.normalFontFamily};
                `}
            >
                {name}
            </a>
        </Link>
    )
}