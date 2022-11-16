// file namkhaeng
import React from 'react'
import { css } from "@emotion/react"
import colors from 'constants/colors'
import fonts from 'constants/fonts'

function Register() {
  return (
    <div  css={css`
        align-items: center;
        font-family: ${fonts.normalFontFamily};
        text-align: center;
    `}>
          <div css={css`
            background-color: ${colors.white};
            width: 50vh;
            height: 60vh;
            margin-top: 20vh;
            margin-left: 73vh;
            border-radius: 10px;
            border: none;
            box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
            `}>
                  <div  css={css`
                    margin: 0;
                    position: absolute;
                    top: 15em;
                    left: 50em;
                    color: ${colors.greenPrimary};
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
                      <h1>Sign Up</h1>
                      <label htmlFor="logname">Account Name</label><br />
                      <input type="text" name="logname" class="form-style" placeholder="Your Account Name" id="logname" autocomplete="off" /><br /><br />
                      <label htmlFor="logemail">Email</label><br />
                      <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" /><br /><br />
                      <label htmlFor="logpassword">Password</label><br />
                      <input type="password" name="logpassword" class="form-style" placeholder="Your Password" id="logpassword" autocomplete="off" /><br /><br />
                      <button>Submit</button>
                </div>
            </div>
    </div>
  )
}

export default Register