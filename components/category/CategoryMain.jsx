import { css } from "@emotion/react"
import Center from "components/common/Center"
import CategoryLink from "./CategoryLink"
import categories from "constants/categories"
import fonts from 'constants/fonts.js'
import { mediaQueries } from "constants/mediaqueries"
import games from "constants/games"
import { useSiteConfig } from "context/SiteConfigContext"
import languages from "constants/languages"

export default function CategoryMain({ recGames }) {
    const [siteConfig, ] = useSiteConfig()
    const { language } = siteConfig
    return (
        <div
        css=
            {css`
                /* padding: 25px; */
                /* border: 5px solid black; */
                font-family: ${fonts.normalFontFamily};
                font-size: ${fonts.titleFontSize};
                width: 1240px;
                margin: auto;
                ${mediaQueries[0]}{
                    font-size: 36px;
                    /* width: 900px; */
                    width: 80%;
                }
                ${mediaQueries[1]}{
                    font-size: 24px;
                    /* width: 600px; */
                }
                ${mediaQueries[2]}{
                    font-size: 12px;
                    width: 100%;
                }
            `}
        >
            <Center><h1>{languages[language].tags}</h1></Center>
            <div
            css=
                {css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;
                `}
            >
                {categories.filter(cate => cate.showOnCategory).map(cate => <CategoryLink key={cate.id} name={cate.displayTag[language]} link={'/category/'+cate.link} pic={'/category/'+cate.image}/>)}
            </div>

            <Center><h1>{languages[language].recommended}</h1></Center>
            <div
            css=
                {css`
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;
                `}
            >
                {games.filter(game => recGames.includes(game.id)).map(game => <CategoryLink key={game.id} name={game.displayName} link={'/game/'+game.name} pic={'/game/'+game.id+'/thumbnail-wide.jpg'}/>)}
            </div>
        </div>
    )
}
