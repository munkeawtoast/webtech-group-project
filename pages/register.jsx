// file namkhaeng
import React from 'react'
import { css } from "@emotion/react"
import colors from 'constants/colors'
import fonts from 'constants/fonts'
import FormInput from 'components/loginfunc/FormInput'
import ButtonInput from 'components/loginfunc/ButtonInput'
import { mediaQueries  as mq } from 'constants/mediaqueries'

function Register() {
  return (
    <div  css={css`
        align-items: center;
        font-family: ${fonts.normalFontFamily};
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    `}>
        <div css={css`
          margin: 25vh;
          width: 20vw;
          height: 50vh;
          background-color: ${colors.white};
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          ${mq[1]}{
            background-color: ${colors.white};
            width: 100vw;
          }
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}>
            <h1>Sign Up</h1>
            Username
            <FormInput type={'text'} /><br />
            Email
            <FormInput type={'email'} /><br />
            Password
            <FormInput type={'password'} /><br />
            <ButtonInput placeholderText={'Submit'} />
          </div>
        </div>
    </div>
  )
}

export default Register