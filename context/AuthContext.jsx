import React, { createContext, useContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { auth as defaultAuth } from 'constants/config'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

function AuthContextProvider({children}) {
  const [auth, setAuth] = useLocalStorage('auth', defaultAuth)
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider