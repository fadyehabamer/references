import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

  // const [render, setRender] = useState(0)
  const render = useRef(0)
  const [user, setUser] = useState()
  const inputRef = useRef()

  const inputWithBtn = useRef()
  const renderWithBtn = useRef(0)
  const [userWithBtn, setUserWithBtn] = useState()



  // useEffect(() => {
  //   setRender(render + 1) --> this will cause infinite loop
  // }, [render])

  useEffect(() => {
    inputRef.current.focus();
    render.current = render.current + 1
  }, [user])


  const sendRequest = () => {
    setUserWithBtn(inputWithBtn.current.value)
    renderWithBtn.current = renderWithBtn.current + 1
  }


  return (
    <div className="App">
      <h1> useRef Hook </h1>
      <input type="text" onChange={(e) => setUser(e.target.value)}
        ref={inputRef}
      />
      <h3>user is : {user}</h3>
      <h3>Component rendered  : {render.current} times </h3>
      <hr />
    {/* ========================================================== */}
      <input type="text" ref={inputWithBtn} />
      <button onClick={sendRequest}> Search </button>
      <h3>user is : {userWithBtn}</h3>
      <h3>Component rendered  : {renderWithBtn.current} times </h3>
    </div>
  )
}

export default App



// before useRef
// onchange input will reRender the whole app

// useRef : refrence any element in the DOM
// useRef : not cause inifinite loop