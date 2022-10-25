/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router'
import { css } from '@emotion/react' 

import colors from 'constants/colors'

import NavBar from 'components/common/NavBar'


function Category({  }) {
  const router = useRouter()
  const catQuery = router.query
  return (
    <>
      <NavBar hasLogo={false} />
        
      <div css={css`
        
      `}>
        <CategoryOptions />
        <ResultList />
      </div>
    </>
  )
}

function CategoryOptions() {
  return (
    <div css={css`
      background-color: ${colors.greenPrimary}
    `}>

    </div>
  ) 
}

function ResultList() {
  return (
    <>

    </>
  ) 
}

export default Category