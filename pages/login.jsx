// file namkhaeng
import React, { useState } from 'react'
import { css } from "@emotion/react"
import ButtonInput from 'components/loginfunc/ButtonInput'
import FormInput from 'components/loginfunc/FormInput'
import colors from 'constants/colors'
import { mediaQueries  as mq } from 'constants/mediaqueries'
import fonts from 'constants/fonts'
import users from 'constants/users'
import { useRouter } from 'next/router'
import { useAuth } from 'context/AuthContext'

function Login() {
  const [auth, setAuth] = useAuth() // ดึง context authentication มาใช้
  const [email, setEmail] = useState('') // สร้าง state สำหรับเก็บค่า email
  const [password, setPassword] = useState('') // สร้าง state สำหรับเก็บค่า password
  const [formError, setFormError] = useState(false) // สร้าง state สำหรับเก็บค่า error
  const router = useRouter() // สร้างตัวแปร router เพื่อใช้ในการ redirect เมื่อ login สำเร็จ

  function triggerFormError() {
    setFormError(true)
    setTimeout(() => {
      setFormError(false)
    }, 3000) // แสดง error 3 วินาที
  }
  
  function handleForm() {
    const user = users.find((user) => user.email === email && user.password === password)
    if (user) {
      setAuth({
        username: user.username,
        displayname: user.displayname,
        email: user.email,
        cart: user.cart,
        library: user.library,
      })
      router.push('/account/library')
    }
    else {
      triggerFormError()
    }

  }
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
        height: 100vh;
      }
      h1 {
        margin: 0.3em 0 0.4em 0;
      }
    `}>
      <div css={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: ${colors.white};
        height: 100vh;
        align-items: center;
        justify-content: center;
        gap: 5px;
        ${mq[1]}{
          background-color: ${colors.white};
          width: 100vw;
          height: 70vh;
          padding-bottom: 100px;
        }
      `}>
          <h1>Sign In</h1>
          Email
          <FormInput type={'email'} value={email} onInputChange={setEmail} />
          Password
          <FormInput type={'password'} value={password} onInputChange={setPassword} />
          { // formError หมายถึง ถ้ามีการกรอกข้อมูลผิด จะแสดงข้อความแจ้งเตือน
            formError
            ? (
              <div
                css={css`
                  background-color: #ff4141;
                  color: ${colors.white};
                  padding: 10px;
                  border-radius: 5px;
                `}
              >
                Invalid email or password!
              </div>
            )
            : null
          }
          <ButtonInput placeholderText={'Sign In'} handleOnClick={handleForm}/>
      </div>
      <div css={css`
        display: flex;
        flex-direction: column;
        width: 400px;
        background-color: ${colors.greenPrimary};
        height: 100vh;
        color: ${colors.white};
        align-items: center;
        justify-content: center;
        text-align: center;
        ${mq[1]}{
          width: 100%;
          padding: 10px;
          height: 30vh;
        }
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