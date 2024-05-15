import { useState } from 'react'
//import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { validateAppointment } from '../../../helpers/validateAppointment';
const AppointmentForm = () => {

  const userId = useSelector(state => state.userLogged.userData.user.id);

  const [formData, setFormData] = useState({
    date: '', 
    time: '', 
    type: '', 
    userId: userId
  });
  const[error, setError] = useState({date: "", time: "", type: ""});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    setError(validateAppointment(formData));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData)
   axios.post ("http://localhost:3000/appointments/schedule", formData)
   .then (() => alert("Turno solicitado"))
   .catch (() => alert("Error al solicitar el turno"))

 
}

    return (
        <form onSubmit={handleSubmit}>
          <h2>Solicitar Turno</h2>
          <div>
            <label>Fecha</label>
            <input onChange = {handleChange} value={formData.date} type="date" name="date"  />
            {error.date && <p>{error.date}</p>}


           
          </div>
          <div>
            <label>Horario</label>
            <select value={formData.time} onChange={handleChange} name="time">
              <option selected>Horario</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              </select>
              {error.time && <p>{error.time}</p>}
          </div>
          <div>
            <label>Actividad</label>
            <select value={formData.type} onChange={handleChange} name="type">
              <option selected >Clase</option>
              <option value="Calistenia">Calistenia</option>
              <option value="Crossfit">Crossfit</option>
              <option value="Hiit">Hit</option>
              <option value="Kickboxing">Kickboxing</option>
              <option value="Pilates">Pilates</option>
              <option value="Spinning">Spinning</option>
              <option value="Streching">Streching</option>
              <option value="Taebo">Taebo</option>
              <option value="Taekwondo">Taekwondo</option>
              <option value="Taichi">Taichi</option>
              <option value="Zumba">Zumba</option>
              <option value="Yoga">Yoga</option>
            </select>
            {error.type && <p>{error.type}</p>}
          </div>
          <button type="submit">Crear Cita</button>
        </form>
      );

}

export default AppointmentForm