//file tiger naa
import currencies from "constants/currencies.js";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import GameCard from "components/common/GameCard";
import NavBar from "components/common/NavBar";
import LibraryGameCard from "components/library/LibraryGameCard";
import colors from "constants/colors";
import fonts from "constants/fonts";
import games from "constants/games";
import languages from "constants/languages";
import { useAuth } from "context/AuthContext";
import { useSiteConfig } from "context/SiteConfigContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { isValidAccount } from "util/isValidAccount";
import { mediaQueries as mq } from "constants/mediaqueries";
import Footer from "components/common/Footer";
import CartCard from "components/cart/CartCard";

function Cart() {
  const [siteConfig] = useSiteConfig();
  const { language, currency } = siteConfig;
  const [auth, setAuth] = useAuth();
  const { cart } = auth;
  const myJSON = JSON.stringify(cart);
  const [cartGames, setCartGames] = useState([]);
  const [allPrice, setAllPrice] = useState(0);

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
        สรุปยอดคำสั่งซื้อ
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
          ยอดรวมสินค้า {currencies[currency].currencyTag} {allPrice}
        </div>
        <button>ชำระเงิน</button>
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
            margin: 0 15px;
          }
          ${mq[2]} {
            justify-content: center;
          }
        `}
      >
        {cartGames.map((game) => (
          <CartCard game={game} key={game.name} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
