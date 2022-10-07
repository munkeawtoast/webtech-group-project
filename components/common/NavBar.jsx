/** @jsxImportSource @emotion/react */

import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import * as color from '../../constants/color'

import styled from '@emotion/styled'
import { jsx, css } from '@emotion/react'

function NavBar() {
  return (
    <nav css={css`
      display: flex;
      background-color: ${color.primaryBg2};
    `}>
      <LinkByWearer href='/'>Home</LinkByWearer>
      <LinkByWearer href='/about'>About</LinkByWearer>
      <LinkByWearer href=''></LinkByWearer>
    </nav>
  )
}

function LinkByWearer({ href, children }) {
  const router = useRouter()
  const afterURL = router.asPath

  return (
    <Link href={href} passHref>
      <a
        css={css`
          background-color: ${afterURL === href && 'white'};
          padding: 1ex 1rem;
          color: ${ color.primaryText2 };
          &:hover {
            color: ${ color.primaryText1 };
          }
        `}
      >
        {children}
      </a>
    </Link>

  )
}

export default NavBar