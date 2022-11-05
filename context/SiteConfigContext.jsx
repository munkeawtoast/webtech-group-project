import React, { createContext, useContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { siteConfig as siteConfigDefault } from 'constants/config.js';


const SiteConfigContext = createContext({siteConfigDefault});

export function useSiteConfig() {
  return useContext(SiteConfigContext).siteConfig
}
export function setSiteConfig() {
  return useContext(SiteConfigContext).setSiteConfig
}

function SiteConfigContextProvider({children}) {
  const [siteConfig, setSiteConfig] = useLocalStorage(siteConfigDefault)
  return (
    <SiteConfigContext.Provider value={{siteConfig, setSiteConfig}}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export default SiteConfigContextProvider