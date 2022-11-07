import React, { useState, useEffect } from 'react'

function parseLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}

function useLocalStorage(name, initialState) {
  const [state, setState] = useState({[name]: initialState})

  function setLocalStorageViaEffect(newState) {
    setState({[name]: newState})
  }
  
  useEffect(function() {
    if (localStorage.getItem(name) !== null) {
      setLocalStorageViaEffect(parseLocalStorage(name))
    }
  }, [])
  
  useEffect(function () {
    localStorage.setItem(name, JSON.stringify(state[name]))
  }, [state])
  
  return [state, setLocalStorageViaEffect]
}

export default useLocalStorage