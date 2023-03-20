import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
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
