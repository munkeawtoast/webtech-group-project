// file namkhaeng
import React from 'react'
import { css } from "@emotion/react"
import colors from 'constants/colors'
import fonts from 'constants/fonts'

function Login() {
  return (
    <div css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: ${fonts.normalFontFamily};
    `}>
        <div css={css`
            background-color: ${colors.white};
            width: 130vh;
            height: 100vh;
            margin: 0;
            padding: 0;
            text-align: center;
        `}>
          <div css={css`
              margin: 0;
              position: absolute;
              top: 18em;
              left: 30em;
              button{
                display: inline-block;
                font-size: 1em;
                padding: 1em 2em;
                -webkit-appearance: none;
                appearance: none;
                background-color: ${colors.greenPrimary};
                color: ${colors.white};
                border-radius: 10px;
                border: none;
                cursor: pointer;
                font-family: ${fonts.normalFontFamily};
                box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
              }
              button:hover{
                background-color: ${colors.black};
                cursor: pointer;
                transition: all 200ms linear;
              }
              .form-style {
                padding: 13px 20px;
                height: 35px;
                width: 100%;
                font-weight: 500;
                border-radius: 4px;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: 0.5px;
                outline: none;
                background-color: ${colors.white};
                border: none;
                -webkit-transition: all 200ms linear;
                transition: all 200ms linear;
                box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
                font-family: ${fonts.normalFontFamily};
              }
              .form-style:focus, .form-style:active {
                border: none;
                outline: none;
                box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
              }
          `}>
                  <h1>Sign In</h1>
                  <label htmlFor="logemail">Email</label><br />
                  <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" /><br /><br />
                  <label htmlFor="logpassword">Password</label><br />
                  <input type="password" name="logpassword" class="form-style" placeholder="Your Password" id="logpassword" autocomplete="off" /><br /><br />
                  <button>Submit</button>
          </div>
        </div>
        <div css={css`
            color: ${colors.white};
            width: 80vh;
            height: 100vh;
            background-color: ${colors.greenPrimary};
            margin: 0;
            padding: 0;
            align-items: center;
            align-content: center;
            justify-content: center;
            text-align: center;
        `}>
              <div css={css`
                  margin: 0;
                  position: absolute;
                  top: 20em;
                  right: 10em;
                  button{
                    display: inline-block;
                    font-size: 1em;
                    padding: 1em 2em;
                    -webkit-appearance: none;
                    appearance: none;
                    background-color: ${colors.white};
                    color: ${colors.greenPrimary};
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    font-family: ${fonts.normalFontFamily};
                    box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
                  }
                  button:hover{
                    background-color: ${colors.black};
                    cursor: pointer;
                    transition: all 200ms linear;
                  }
              `}>
                    <h1>Hello, Friend</h1>
                    <h1>We are... Hi Five!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button>Sign Up</button>
              </div>
        </div>
    </div>
  )
}

export default Login