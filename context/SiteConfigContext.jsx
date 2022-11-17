/* eslint-disable react-hooks/rules-of-hooks */

import React, { createContext, useContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { siteConfig as defaultSiteConfig } from 'constants/config'

const SiteConfigContext = createContext()

export function useSiteConfig() {
  return useContext(SiteConfigContext)
}

function SiteConfigContextProvider({ children }) {
  const [siteConfig, setSiteConfig] = useLocalStorage('siteConfig', defaultSiteConfig)
  return (
    <SiteConfigContext.Provider value={[siteConfig, setSiteConfig]}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export default SiteConfigContextProvider