import React, { createContext, useContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { siteConfig as siteConfigDefault } from 'constants/config.js';


const SiteConfigContext = createContext();

export function getAuth() {
  return useContext(SiteConfigContext)
}

export function setAuth(data) {
  useContext(SiteConfigContext).mySetAuth(data)
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