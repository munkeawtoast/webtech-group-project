import React, { useState, createContext } from 'react'
import useLocalStorage from 'util/useLocalStorage';

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
  const [auth, setAuth] = useLocalStorage({
    'user': {
      username: '',
      email: '',
      library: []
    }
  })
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider