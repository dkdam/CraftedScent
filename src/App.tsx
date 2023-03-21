import { useState } from 'react'
import Navbar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import './styles.css'

function App() {
  
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/login":
      component = <Login/>
      break
  }

  return (
    <>
    <Navbar />
    <div className="container">
      {component}
    </div>
    </>
  )
}

export default App
