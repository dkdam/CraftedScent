import Navbar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import Product from './Components/Product'
import { Route, Routes } from 'react-router-dom'
import './styles.css'

function App() {

  return (
    <>
    <Navbar />
    
    <div className="container">
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/about' element = {<About/>} />
        <Route path ='/login' element = {<Login/>} />
        <Route path ='/product' element = {<Product/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
