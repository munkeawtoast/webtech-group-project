import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { css } from '@emotion/react'
import colors from 'constants/colors'

const inputStyle = css`
  all: unset;
  width: 50%;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: inset 0 .0625em .125em #0a0a0a49;
  border: 1px solid transparent;
  padding: calc(0.3em - 1px) calc(0.5em - 1px);
  &:focus {
    box-shadow: 0 0 0 .125em #190aa19f;
  }
`

function RangeInput(props) {
  //todo range input
  const { minMax } = props
  return (
    <div css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <div css={css`
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 5px;
      `}>
        <input css={inputStyle} />
        <span css={css`margin: 0 10px;`}>-</span>
        <input css={inputStyle} />
      </div>
    </div>
  )
}

export default RangeInput