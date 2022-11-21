import { css } from "@emotion/react";
import Image from "next/image";

import fonts from "constants/fonts.js";

import { mediaQueries } from "constants/mediaqueries";
import colors from "constants/colors";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isValidAccount } from "util/isValidAccount";
import { useSiteConfig } from "context/SiteConfigContext";
import languages from "constants/languages";
import currencies from "constants/currencies";

const GameInfo = ({ gameID, gameTag, gamePrice }) => {
  const [auth, setAuth] = useAuth();
  const [siteConfig] = useSiteConfig();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(isValidAccount(auth));
  }, [auth]);
  const { language, currency } = siteConfig;
  const router = useRouter();
  function isAlreadyInCart(ID) {
    return auth.cart.includes(ID);
  }
  return (
    <div
      css={css`
        /* width: 600px;
        height: 500px; */

        display: flex;
        flex-direction: column;

        font-family: ${fonts.normalFontFamily};
        font-size: ${fonts.normalFontSize};

        ${mediaQueries[1]} {
          flex-direction: row;
          margin-top: 62px;
        }
        ${mediaQueries[1]} {
          background-color: ${colors.gray200};
        }
      `}
    >
      <div
        css={css`
          margin: auto;
          position: relative;
          width: 400px;
          aspect-ratio: 16/9;
          margin-top: 0;
          ${mediaQueries[0]} {
            width: 240px;
            margin: 0;
          }
          ${mediaQueries[1]} {
            width: 350px;
          }
          ${mediaQueries[2]} {
            width: 128px;
          }
        `}
      >
        <Image
          css={css`
            border-radius: 15px;
          `}
          src={`/game/${gameID}/thumbnail-wide.jpg`}
          layout="fill"
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          ${mediaQueries[1]} {
            flex-direction: column;
            margin: 0 32px;
          }
        `}
      >
        <div
          css={css`
            font-size: ${fonts.uiFontSize};
          `}
        >
          <p
            css={css`
              ${mediaQueries[0]} {
                margin-bottom: 0;
              }
            `}
          >
            {currencies[currency]["currencyTag"]} {gamePrice[currency]}
          </p>
        </div>
        <div>
          <p
            css={css`
              ${mediaQueries[0]} {
                margin-top: 0;
              }
            `}
          >
            {languages[language]["tags"]}: {gameTag.map((tag) => tag.displayTag[language] + " ")}
          </p>
        </div>
        <button
          css={css`
            border: none;
            border-radius: 8px;

            padding: 6px;

            font-family: ${fonts.normalFontFamily};
            font-size: ${fonts.uiFontSize};

            cursor: pointer;
            
            transition:0.25s;
            :hover {
              color: ${colors.greenPrimary};
            }
          `}
          onClick={function () {
            if (isAuthenticated) {
              setAuth({
                ...auth,
                cart: !isAlreadyInCart(gameID)
                  ? [...auth.cart, gameID]
                  : (function () {
                      window.alert(languages[language]["alreadyhasgameincart"]);
                      return auth.cart;
                    })(),
              });
            } else {
              window.alert(languages[language]["notlogin"]);
              router.push("/login");
            }
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameInfo;
