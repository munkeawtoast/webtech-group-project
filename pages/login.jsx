// file namkhaeng
import React, { Component } from 'react'
import { css } from "@emotion/react"
import ButtonInput from 'components/loginfunc/ButtonInput'
import FormInput from 'components/loginfunc/FormInput'
import colors from 'constants/colors'
import { mediaQueries  as mq } from 'constants/mediaqueries'
import fonts from 'constants/fonts'

function Login() {
  return (
    <div css={css`
      display: flex;
      width: 100vw;
      padding: 0;
      margin: 0;
      align-items: center;
      justify-content: center;
      font-family: ${fonts.normalFontFamily};
      ${mq[1]} {
        flex-direction: column;
        width: 100vw;
        height: 80vh;
      }
    `}>
      <div css={css`
        display: flex;
        flex-direction: column;
        flex: 2;
        background-color: ${colors.white};
        height: 100vh;
        align-items: center;
        justify-content: center;
        ${mq[1]}{
          background-color: ${colors.white};
          width: 100vw;
        }
      `}>
          <h1>Sign In</h1>
          Email
          <FormInput type={'email'} /><br />
          Password
          <FormInput type={'password'} /><br /><br />
          <ButtonInput placeholderText={'Sign In'} />
      </div>
      <div css={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: ${colors.greenPrimary};
        height: 100vh;
        color: ${colors.white};
        align-items: center;
        justify-content: center;
        text-align: center;
      `}>
        <h1>Hello, Friend</h1>
        <h1>We are... Hi Five!</h1>
        <p>Enter your personal details and start journey with us</p>
        <ButtonInput placeholderText={'Sign Up'}/>
      </div>
    </div>
  )
}

export default Login