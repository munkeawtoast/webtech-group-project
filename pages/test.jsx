import React from 'react'
import useLocalStorage from 'util/useLocalStorage'

function Test() {
  const [val, setVal] = useLocalStorage('testkey', 'testvalue')
  function setToOne() {
    setVal(1)
  }
  return (
    
    <div>
      {val}
      <button
        onClick={setToOne}
      >
        Click me
      </button>
    </div>
  )
}

export default Test