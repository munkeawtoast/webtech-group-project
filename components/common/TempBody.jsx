/** @jsxImportSource @emotion/react */

import React from 'react'

import { css } from '@emotion/react'

function TempBody() {
  return (
    <h1 css={css`
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 72px;
    `}>
      TEMP
    </h1>
  )
}

export default TempBody