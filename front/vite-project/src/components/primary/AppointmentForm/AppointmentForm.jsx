

const AppointmentForm = () => {

       
        
    

    return (
        <form >
          <h2>Solicitar Turno</h2>
          <div>
            <label>Fecha</label>
            <input type="date" name="Fecha"  />


           
          </div>
          <div>
            <label>Horario</label>
            <select name="Horario">
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
          </div>
          <div>
            <label>Actividad</label>
            <select name="Actividad">
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
          </div>
        </form>
      );

}

export default AppointmentForm