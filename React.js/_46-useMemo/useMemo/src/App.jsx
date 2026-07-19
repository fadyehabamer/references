import React, { useState, useMemo, useEffect } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themes = useMemo(() => {
    return{
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  },[dark])

  useEffect(() => {
    console.log('THEME CHANGED')
  }, [themes])

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <div style={themes}>
        {doubleNumber}
      </div>
    </div>
  )
}

export default App
const slowFunction = (number) => {
  console.log('slowFunction');
  for (let i = 0; i < 1000000000; i++) { }
  return number * 2
}