/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function Center({children}) {
    return (
        <div
        css=
            {css`
                display: flex;
                justify-content: center;
            `}
        >
            {children}
        </div>
    )
}