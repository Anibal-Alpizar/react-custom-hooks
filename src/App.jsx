import { useState } from 'react'

function useMyHook() {
  const [active, setActive] = useState(false)

  const handleToggle = () => setActive(!active)
  const handleFalse = () => setActive(false)
  const handleTrue = () => setActive(true)

  return {
    active,
    handleToggle,
    handleFalse,
    handleTrue
  }
}

function App() {

  const {handleToggle, active, handleFalse, handleTrue} = useMyHook()


  return (
    <div>
       <button onClick={handleToggle}>
        Toggle
      </button>

      <button onClick={handleTrue}>
        True
      </button>

      <button onClick={handleFalse}>
        False
      </button> 

      {active.toString()}
    </div>
  )
}

export default App