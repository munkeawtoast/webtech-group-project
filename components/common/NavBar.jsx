import colors from "constants/colors.js";

import { css } from "@emotion/react";
import { TextButton, RoundButton, LogoutButton } from "components/common/Buttons";
import Logo from "components/common/Logo";
import { mediaQueries as mq } from "constants/mediaqueries";
import MobileNavButton from "components/common/NavBar/MobileNavButton";
import MobileLinkNavButton from "components/common/NavBar/MobileLinkNavButton";
import styled from "@emotion/styled";
import FlagButton from "./FlagButton";
import { useSiteConfig } from "context/SiteConfigContext";
import Image from "next/image";
import Router from 'next/router'
import { useEffect, useState } from "react";
import { isValidAccount } from "util/isValidAccount";
import languages from "constants/languages";
import { useAuth } from "context/AuthContext";
import { auth as defaultAuth } from 'constants/config'
import ItemCount from "./NavBar/ItemCount";

NavBar.defaultProps = {
  hasLogo: true,
};

function NavBar({ hasLogo, logoIsCenter }) {
  const [auth, setAuth] = useAuth();

  // from here
  const [accountIsValid, setAccountIsValid] = useState(false);


  useEffect(() => {
    if (isValidAccount(auth)) {
      setAccountIsValid(true);
    }
  }, [auth]);
  // til here

  const [siteConfig, setSiteConfig] = useSiteConfig();
  function changeLanguage() {
    if (siteConfig.language === "th") {
      setSiteConfig({ ...siteConfig, language: "en" });
    } else {
      setSiteConfig({ ...siteConfig, language: "th" });
    }
  }
  const { language } = siteConfig;
  return (
    <>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          padding: 0 25px 0 25px;
          background-color: ${colors.greenPrimary};
          color: ${colors.white};
        `}
      >
        {!logoIsCenter ? (
          <Logo
            fillColor="white"
            size="40"
            withText={true}
            hidden={!hasLogo}
            withLink={true}
          />
        ) : null}
        <div>
          {logoIsCenter ? (
            <div
              css={css`
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                top: 5px;
              `}
            >
              <Logo
                fillColor="white"
                size="45"
                withText={false}
                hidden={!hasLogo}
                withLink={true}
              />
            </div>
          ) : null}
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
          <FlagButton />
          <RoundButton href="/account/cart">
            <div
              css={css`
                position: relative;
              `}
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: colors.black }}
              />
              <ItemCount />
            </div>
          </RoundButton>
          <LogoutButton
            cssStyles={`
              display: ${accountIsValid ? 'block' : 'none'};
            `}
            onClick={
              () => {
                setAuth(defaultAuth)
                Router.reload(window.location.pathname);
              }}
          >
            {languages[language].logout}
          </LogoutButton>
          <TextButton href={accountIsValid ? "/account/library" : "/login"}>
            {accountIsValid
              ? languages[language].account
              : languages[language].login}
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
            z-index: 1000;
            bottom: 0;
            display: flex;
            padding-top: 3px;
            padding-bottom: 6px;
            box-shadow: 0px 0px 10px 0px ${colors.gray700 + "aa"};
          }
        `}
      >
        <MobileLinkNavButton
          icon={<i className="fa-solid fa-house" />}
          href="/category"
          text={languages[language].homePage}
        />
        <Divider hidden={!accountIsValid} />
        <MobileLinkNavButton
          icon={<i className="fa-solid fa-gamepad" />}
          href="/account/library"
          text={languages[language].library}
          hidden={!accountIsValid}
        />
        <Divider hidden={!accountIsValid} />
        <MobileLinkNavButton
          icon={
            <>
              <div
                css={css`
                  position: relative;
                `}
              >
                <i className="fa-solid fa-cart-shopping" />
                <ItemCount />
              </div>
            </>
          }
          href="/account/cart"
          text={languages[language].cart}
          hidden={!accountIsValid}
        />
        <Divider />
        <MobileNavButton
          icon={
            <div
              css={css`
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                filter:  grayscale(100%);
                transition: filter 0.2s ease-in-out;
                
              `}
            >
              <Image
                src={language === "th" ? "/flag/th.jpg" : "/flag/en.jpg"}
                alt="lang"
                width={20}
                height={16}
              />
            </div>
          }
          onClick={changeLanguage}
          text={languages[language].languageChangeMobileNavBar}
        />
        <Divider />
        {
          !accountIsValid ? (
            <MobileLinkNavButton
              icon={<i className="fa-solid fa-gear" />}
              href="/login"
              text={languages[language].login}
            />
          ) : (
            <MobileNavButton
              icon={<i className="fa-solid fa-right-from-bracket" />}
              onClick={
                () => {
                  setAuth(defaultAuth)
                  Router.reload(window.location.pathname);
                }}
              text={languages[language].logout}
            />
          )
        }
      </nav>
    </>
  );
}

const Divider = styled.div`
  background-color: ${colors.gray300};
  width: 1px;
  transform: translateY(-3px);
  margin: 10px 1px;
`;

export default NavBar;
