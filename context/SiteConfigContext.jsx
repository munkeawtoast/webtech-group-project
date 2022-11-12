import React, { createContext, useContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { siteConfig as siteConfigDefault } from 'constants/config.js';


const SiteConfigContext = createContext();

export function useSiteConfig() {
  return useContext(SiteConfigContext)
}

export function useSetSiteConfig(data) {
  useContext(SiteConfigContext).mySetSiteConfig(data)
}

function SiteConfigContextProvider({children}) {
  const [mySiteConfig, mySetSiteConfig] = useLocalStorage('site_config', siteConfigDefault)
  return (
    <SiteConfigContext.Provider value={{...mySiteConfig, mySetSiteConfig}}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export default SiteConfigContextProvider