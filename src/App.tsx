import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> {count} Hotdogs </h1>
      <br />
      <button onClick={() => setCount(count => count + 1)}>
        Hotdog Button
      </button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>
        Reset Hotdogs
      </button>
    </div>
  )
}

export default App
