
import {Routes, Route, } from 'react-router-dom'

import NavBar from './components/primary/navbar/NavBar'
import Login from './views/login/Login'
import Register from './views/register/Register'
import MisTurnos from './views/mis turnos/MisTurnos'
import Gymhome from './views/gymhome/Gymhome'
import About from './views/about/About'
function App() {
  
  return (
  <div >
  <NavBar />
  <Routes>
  <Route path="/" element={<Gymhome />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/turnos" element={<MisTurnos />} />
  
  </Routes>
  </div>
  )
}

export default App
