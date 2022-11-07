import React, { createContext, useContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { siteConfig as siteConfigDefault } from 'constants/config.js';


const SiteConfigContext = createContext();

export function getSiteConfig() {
  return useContext(SiteConfigContext)
}

export function setSiteConfig(data) {
  useContext(SiteConfigContext).mySetSiteConfig(data)
}

export function setAuthKey(key, val) {
  setAuth({
    ...getAuth(),
    [key]: val
  })
}

export function getAuthKey(key) {
  return getAuth()[key]
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