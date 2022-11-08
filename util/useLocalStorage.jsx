import { useState, useEffect } from 'react'

function parseLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}

function useLocalStorage(name, initialState) {
  const [state, setState] = useState(initialState)

  function setLocalStorageViaEffect(newState) {
    setState(newState)
  }
  
  useEffect(function() {
    if (localStorage.getItem(name) !== null) {
      setLocalStorageViaEffect(parseLocalStorage(name))
    }
  }, [])
  
  useEffect(function () {
    localStorage.setItem(name, JSON.stringify(state))
  }, [state])
  
  return [state, setLocalStorageViaEffect]
}

export default useLocalStorage