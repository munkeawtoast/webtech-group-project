import React, { createContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'

export const SiteConfigContext = createContext(null);

function SiteConfigContextProvider({children}) {
  const [siteConfig, setSiteConfig] = useLocalStorage({
    'siteConfig': {
      currency: 'thb',
      language: 'th'
    }
  })
  return (
    <SiteConfigContext.Provider value={{siteConfig, setSiteConfig}}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export default SiteConfigContextProvider