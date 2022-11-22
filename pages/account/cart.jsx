//file tiger naa
import currencies from "constants/currencies.js";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import NavBar from "components/common/NavBar";
import colors from "constants/colors";
import fonts from "constants/fonts";
import games from "constants/games";
import { useAuth } from "context/AuthContext";
import { useSiteConfig } from "context/SiteConfigContext";
import { useRouter } from "next/router";
import { isValidAccount } from "util/isValidAccount";
import { mediaQueries as mq } from "constants/mediaqueries";
import Footer from "components/common/Footer";
import CartCard from "components/cart/CartCard";
import languages from "constants/languages";

function Cart() {
  const [siteConfig] = useSiteConfig();
  const { language, currency } = siteConfig;
  const [auth, setAuth] = useAuth();
  const { cart } = auth;
  const myJSON = JSON.stringify(cart);
  const [cartGames, setCartGames] = useState([]);
  const router = useRouter();
  const [allPrice, setAllPrice] = useState(0);

  useEffect(() => {
    if (!isValidAccount(auth)) {
      router.push('/login')
    }
  }, [auth])

  useEffect(() => {
    setCartGames(games.filter((game) => cart.includes(game.id)));
  }, [auth, auth.cart]);

  useEffect(() => {
    let tempPrice = 0;
    for (let i = 0; i < cartGames.length; i++) {
      tempPrice += cartGames[i].price[currency];
    }
    setAllPrice(tempPrice);
  }, [cartGames, currency]);

  return (
    <>
      <NavBar />
      <div
        className="library-top"
        css={css`
          font-family: ${fonts.titleFontFamily};
          color: ${colors.white};
          font-size: ${fonts.titleFontSize};
          background-color: ${colors.greenPrimary};
          padding: 50px 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        { languages[language].sumCart }
        <div
          className=""
          css={css`
            font-family: ${fonts.titleFontFamily};
            font-size: ${fonts.titleFontSize};
            color: ${colors.white};
            background-color: ${colors.greenPrimary};
            padding: 0px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          { languages[language].sumPrice } {currencies[currency].currencyTag} { allPrice.toFixed(2) }
        </div>
        <button
          css={css`
            all: unset;
            font-size: ${fonts.titleFontSize};
            background-color: ${colors.white};
            color: ${colors.greenPrimary};
            padding: 10px 20px;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;
            border: 3px solid transparent;
            &:hover {
              border: 3px solid white;
              cursor: pointer;
              background-color: ${colors.greenPrimary};
              color: ${colors.white};
            }
          `}
          onClick={() => {
            setAuth({ ...auth, cart: [], library: [...auth.library, ...cart] });
            router.push('/account/done')
          }}
        >
          { languages[language].payCart }
        </button>
      </div>
      <div
        className="cart-list"
        css={css`
          background-color: white;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 50px;
          ${mq[1]} {
            padding: 15px 15px;
          }
          ${mq[2]} {
            margin: 0;
          }
        `}
      >
        {
          cartGames.map((game) => (
            <CartCard game={game} key={game.name} />
          ))
        }
      </div>

      <Footer />
    </>
  );
}

export default Cart;
