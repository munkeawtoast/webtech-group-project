import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    let currentValue

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      )
    } catch (error) {
      currentValue = defaultValue
    }

    setValue(currentValue)
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export default useLocalStorage
