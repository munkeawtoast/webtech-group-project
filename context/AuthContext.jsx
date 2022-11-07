import React, { useContext, createContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { auth as authDefault } from 'constants/config.js'

const AuthContext = createContext();

function getAuth() {
  return useContext(AuthContext)
}

function setAuth(data) {
  useContext(AuthContext).mySetAuth(data)
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

export function setUsername(username) {
  setAuthKey('username', username)
}

export function setDisplayName(name) {
  setAuthKey('displayname', name)
}

export function setCart(cart) {
  setAuthKey('cart', cart)
}

export function setLibrary(library) {
  setAuthKey('library', library)
}

export function getUsername() {
  return getAuthKey('username')
}

export function getDisplayName() {
  return getAuthKey('displayname')
}

export function getCart() {
  return getAuthKey('cart')
}

export function getLibrary() {
  return getAuthKey('library')
}

export function addToCart(id) {
  setCart([...getCart(), id])
}

export function removeFromCart(index) {
  setCart([...getCart()].slice(0, index) + [...getCart()].slice(index + 1))
}
export function addToLibrary(id) {
  setLibrary([...getLibrary(), id])
}

export function removeFromLibrary(index) {
  setLibrary([...getLibrary()].slice(0, index) + [...getLibrary()].slice(index + 1))
}

function AuthContextProvider({ children }) {
  const [myAuth, mySetAuth] = useLocalStorage('auth', authDefault)
  return (
    <AuthContext.Provider value={{ ...myAuth, mySetAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider