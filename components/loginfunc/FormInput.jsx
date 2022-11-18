import { css } from "@emotion/react";
import React from "react";
import fonts from "constants/fonts";
import { mediaQueries as mq } from "constants/mediaqueries";

function FormInput({ type, value, onInputChange }){
    return(
        <input
            type={type}
            css={css`
                display: block;
                padding: 1em 2em;
                height: 3em;
                width: min(400px, 40vw);
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
                    width: 400px;
                }
                ${mq[2]}{
                    width: 300px;
                }
            `}
            value={value}
            onChange={e => onInputChange(e.target.value)}
        />
    )
}

export default FormInput