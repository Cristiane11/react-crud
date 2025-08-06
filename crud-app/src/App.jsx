import { BrowserRouter, Routes , Router } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'


import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element ={<Home/>}></Router>
        <Router path="/create" element ={<Create/>}></Router>
        <Router path="/update" element ={<Update/>}></Router>
        <Router path="/read" element ={<Read/>}></Router>
      </Routes>
    </BrowserRouter>
  )
}

export default App
