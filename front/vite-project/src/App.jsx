
import {Routes, Route, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

import NavBar from './components/primary/navbar/NavBar'
import Login from './views/login/Login'
import Register from './views/register/Register'
import MisTurnos from './views/mis turnos/MisTurnos'
import Gymhome from './views/gymhome/Gymhome'

import AppointmentForm from './components/primary/AppointmentForm/AppointmentForm'
function App() {
  
  return (
  <div >
  <NavBar />
  <Routes>
  <Route path="/" element={<Gymhome />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/turnos" element={<MisTurnos />} />
  <Route path="/cita" element={<AppointmentForm />} />
  
  </Routes>
  </div>
  )
}

export default App
