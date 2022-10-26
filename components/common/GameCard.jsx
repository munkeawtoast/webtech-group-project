/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import Image from 'next/image'

import { css } from '@emotion/react'

import colors from 'constants/colors'
import fonts from 'constants/fonts'

GameCard.defaultProps = {
  showArgs: {
    showImage: true,
    showName: true,
  }
}

function GameCard(props) {
  return (
    <Link href={`/game/${props.name}`}>
      <div css={css`
        background-color: white;
        border-radius: 8px;
        border: 1px solid ${colors.gray300};
        padding: 4px;
        color: ${colors.black};
        font-family: ${fonts.normalFontFamily};
        font-weight: 500;
        font-size: 18;
      `}>
        <Image
          src={'/game/' + props.thumbnail}
          css={css`
            margin: 0 0 4px 0;
          `} 
          width={'100%'}
          height={'100%'}
          // layout={'intrinsic'}
        />
        <div>
          {props.en_displayTag}
        </div>
      </div>
    </Link>
  )
}

export default GameCard