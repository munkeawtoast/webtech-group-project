import { css } from "@emotion/react";
import React from "react";
import fonts from "constants/fonts";
import { mediaQueries as mq } from "constants/mediaqueries";

function FormInput({ type }){
    return(
        <input
            type={type}
            css={css`
                display: block;
                padding: 1em 2em;
                height: 3em;
                width: 40%;
                border-radius: 4px;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: 1px;
                outline: none;
                color: #c4c3ca;
                background-color: #1f2029;
                border: none;
                -webkit-transition: all 200ms linear;
                transition: all 200ms linear;
                box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
                ${mq[1]}{
                    width: 60%;
                    height: 1em;
                }
            `}
        />
    )
}

export default FormInput