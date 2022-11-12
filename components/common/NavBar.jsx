import colors from 'constants/colors.js'

import { css } from '@emotion/react'

import { TextButton, RoundButton } from 'components/common/Buttons'
import Logo from 'components/common/Logo'
import { mediaQueries as mq } from 'constants/mediaqueries'
import MobileNavButton from './MobileNavButton'
import styled from '@emotion/styled'


NavBar.defaultProps = {
  hasLogo: true
}

function NavBar({ hasLogo, logoIsCenter }) {
  return (
    <>
      <nav css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 25px;
        background-color: ${colors.greenPrimary};
        color: ${colors.white};
      `}>
        {
          !logoIsCenter
            ? <Logo fillColor="white" size="40" withText={true} hidden={!hasLogo} withLink={true} />
            : null
        }
        <div>
          {
            logoIsCenter
              ? <div css={css`
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                top: 5px;
              `}>
                <Logo fillColor="white" size="45" withText={false} hidden={!hasLogo} withLink={true} />
              </div>
              : null
          }
        </div>
        <div
          css={css`
            display: flex;
            gap: 10px;
            margin-left: auto;
            ${mq[2]} {
              display: none;
            }
          `}
        >
          <RoundButton href="/cart">
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: colors.black }}
            ></i>
          </RoundButton>
          <TextButton href="/account">
            {'Account'}
          </TextButton>
        </div>

      </nav>
      <nav
        css={css`
          display: none;
          ${mq[2]} {
            width: 100%;
            background-color: ${colors.white};
            position: fixed;
            z-index: 100;
            bottom: 0;
            display: flex;
            padding-top: 3px;
            padding-bottom: 6px;
            border-top: 1px solid ${colors.gray300};
          }
        `
        }>
        <MobileNavButton
          icon={
            <i
              className="fa-solid fa-house"
            />
          }
          href='/category'
          text='Home'
        />
        <Divider />
        <MobileNavButton
          icon={<i className="fa-solid fa-gamepad" />}
          href='/library'
          text='Library'
        />
        <Divider />
        <MobileNavButton
          icon={<i className="fa-solid fa-cart-shopping" />}
          href='/cart'
          text='Cart'
        />
        <Divider />
        <MobileNavButton
          icon={<i className="fa-solid fa-gear" />}
          href='/login'
          text='Login'
        />
      </nav>
    </>
  )
}

const Divider = styled.div`
  background-color: ${colors.gray300};
  width: 1px;
  transform: translateY(-3px);
  margin: 10px 1px;
`


export default NavBar