import { useState } from 'react'

function useActive(initialState) {
  const [active, setActive] = useState(initialState = false)

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

  const { handleToggle, active, handleFalse, handleTrue } = useActive(false)


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

      <ShowInfo />
    </div>
  )
}

function ShowInfo() {

  const { active, handleToggle } = useActive()
  return (
    <div style={{ background: "#000", color: "white", marginTop: "10px" }}>
      <button onClick={() => handleToggle()}>
        show/hide
      </button>
      {
        active && (
          <div>
            <h1>user info</h1>
          </div>
        )
      }
    </div>
  )
}

export default App