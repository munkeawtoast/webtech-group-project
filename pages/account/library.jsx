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
import React, { useEffect, useState } from "react";
import { isValidAccount } from "util/isValidAccount";
import { mediaQueries as mq } from "constants/mediaqueries";
import Footer from "components/common/Footer";

function Library() {
  const [auth] = useAuth();
  const router = useRouter();
  const { library, displayname } = auth;
  const [count, setCount] = useState(0); // แก้ปัญหาแบบเบร่อมากๆ

  useEffect(() => {
    if (count === 0) {
      setCount(count + 1);
    } else if (!isValidAccount(auth)) {
      router.push("/login");
    }
    setLibraryGames(games.filter((game) => library.includes(game.id)));
  }, [auth.library]);

  const [siteConfig] = useSiteConfig();
  const { language } = siteConfig;
  const [libraryGames, setLibraryGames] = useState([]);

  return (
    <>
      <NavBar />
      <div
        className="library-top"
        css={css`
          font-family: ${fonts.normalFontFamily};
          color: ${colors.white};
          background-color: ${colors.greenPrimary};
          padding: 50px 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: relative;
            width: 120px;
            aspect-ratio: 1;
            border-radius: 10000px;
            overflow: clip;
            margin-bottom: 20px;
          `}
        >
          <Image src="/user/default-profile.jpg" alt="profile" layout="fill" />
        </div>
        <h1
          css={css`
            margin: unset;
            margin-bottom: 20px;
          `}
        >
          {auth.displayname}
        </h1>
        <h3
          css={css`
            margin: unset;
            font-weight: normal;
          `}
        >
          {auth.email}
        </h3>
      </div>
      <div
        className="library-list-container"
        css={css`
          background-color: ${colors.white};
          min-height: 400px;
          font-family: ${fonts.normalFontFamily};
          padding: 30px 200px;
          ${mq[0]} {
            padding: 30px 50px;
          }
          ${mq[1]} {
            padding: 30px 30px;
          }
          ${mq[2]} {
            padding: 15px;
          }
        `}
      >
        <span
          css={css`
            font-size: 30px;
            margin-bottom: 10px;
            display: block;
          `}
        >
          {languages[language].library}
        </span>
        <div
          className="library-list"
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            cursor: pointer;
            ${mq[1]} {
              margin: 0 15px;
            }
            ${mq[2]} {
              justify-content: center;
            }
          `}
        >
          {libraryGames.map((game) => (
            <LibraryGameCard key={game.name} game={game} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Library;
