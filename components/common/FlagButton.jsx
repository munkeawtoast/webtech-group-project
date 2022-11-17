import React, { useEffect, useState } from 'react'
import { useSiteConfig } from 'context/SiteConfigContext'
import Image from 'next/image'
import { css } from '@emotion/react'


export default function LanguageChangeButton() {
  const [siteConfig, setSiteConfig] = useSiteConfig()
  const { language, currency } = siteConfig
  const [otherLanguage, setOtherLanguage] = useState(language === 'en' ? 'th' : 'en')
  const [otherCurrency, setOtherCurrency] = useState(currency === 'thb' ? 'usd' : 'thb')

  useEffect(() => {
    setOtherLanguage(language === 'en' ? 'th' : 'en')
    setOtherCurrency(currency === 'thb' ? 'usd' : 'thb')
  }, [language, otherLanguage, otherCurrency, currency])

  function toggleLanguage() {
    setSiteConfig((siteConfig) => ({ ...siteConfig, language: otherLanguage }))
    setSiteConfig((siteConfig) => ({ ...siteConfig, currency: otherCurrency }))
  }
  
  return (
    <button
      css={css`
        all: unset;
        height: 40px;
        width: 40px;
        position: relative;
        cursor: pointer;
      `}
      onClick={toggleLanguage}
    >
      <Image
        alt='flag'
        src={'/flag/' + otherLanguage + '.svg'}
        layout='fill'
      />
    </button>
  )
}
