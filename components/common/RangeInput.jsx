import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { css } from '@emotion/react'

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
        <div css={css`all: unset; flex: 1; background-color: white;`} />
        <span css={css`margin: 0 10px;`}>-</span>
        <div css={css`all: unset; flex: 1; background-color: white;`} />
      </div>
    </div>
  )
}

export default RangeInput