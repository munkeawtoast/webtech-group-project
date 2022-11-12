import React, { useContext, createContext } from 'react'
import useLocalStorage from 'util/useLocalStorage'
import { auth as authDefault } from 'constants/config.js'

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function useSetAuth(data) {
  useContext(AuthContext).myuseSetAuth(data)
}

export function useSetAuthKey(key, val) {
  useSetAuth({
    ...useAuth(),
    [key]: val
  })
}

export function useAuthKey(key) {
  return useAuth()[key]
}

export function useSetUsername(username) {
  useSetAuthKey('username', username)
}

export function useSetDisplayName(name) {
  useSetAuthKey('displayname', name)
}

export function useSetCart(cart) {
  useSetAuthKey('cart', cart)
}

export function useSetLibrary(library) {
  useSetAuthKey('library', library)
}

export function useUsername() {
  return useAuthKey('username')
}

export function useDisplayName() {
  return useAuthKey('displayname')
}

export function useCart() {
  return useAuthKey('cart')
}

export function useLibrary() {
  return useAuthKey('library')
}

export function useAddToCart(id) {
  useSetCart([...useCart(), id])
}

export function useRemoveFromCart(index) {
  useSetCart([...useCart()].slice(0, index) + [...useCart()].slice(index + 1))
}
export function useAddToLibrary(id) {
  useSetLibrary([...useLibrary(), id])
}

export function useRemoveFromLibrary(index) {
  useSetLibrary([...useLibrary()].slice(0, index) + [...useLibrary()].slice(index + 1))
}

function AuthContextProvider({ children }) {
  const [myAuth, myuseSetAuth] = useLocalStorage('auth', authDefault)
  return (
    <AuthContext.Provider value={{ ...myAuth, myuseSetAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider