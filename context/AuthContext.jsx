import React, { useContext, createContext } from 'react'
import useLocalStorage from 'util/useLocalStorage';
import { auth as authDefault } from 'constants/config.js'

const AuthContext = createContext(authDefault);

export function getAuth() {
  return useContext(AuthContext).auth
}
export function setAuth() {
  return useContext(AuthContext).setAuth
}

function AuthContextProvider({children}) {
  const [auth, setAuth] = useLocalStorage(authDefault)
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider