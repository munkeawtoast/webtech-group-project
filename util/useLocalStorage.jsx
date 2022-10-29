import React, { useState, useEffect } from 'react'

function useLocalStorage(initialState) {
  const [state, setState] = useState(initialState)

  useEffect(function() {
    for (const key of Object.keys(initialState)) {
      if (localStorage.getItem(key) !== null) {
        setState(JSON.parse(localStorage.getItem(key)))
      }
    }
  }, [])

  useEffect(function () {
    for (const key of Object.keys(initialState)) {
      if (!state.hasOwnProperty(key)) return
      localStorage.setItem(key, JSON.stringify(state[key]))
    }
  }, [state])
  return [state, setState]
}

export default useLocalStorage