/*eslint-disable*/
import styles from "./Appointments.module.css"
import axios from 'axios';
const Appointments = ({ id, date, time, type, status, onCancel }) => {

  const handleCancel = () => {
    try {
      axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        .then(()=>{
          alert("Cita cancelada")
          onCancel();
        })
    } catch (error) {
      alert("Error al cancelar la cita")
    }
  }
  return (
    <div className={styles.card}>
      {type==="Calistenia" && <img src= "/src/components/secondary/img/calistenia.png"/>}
      {type==="Crossfit" && <img src= "/src/components/secondary/img/crossfit.png"/>}
      {type==="Hiit" && <img src= "/src/components/secondary/img/hit.png"/>}	
      {type==="Kickboxing" && <img src= "/src/components/secondary/img/kickboxing.png"/>}
      {type==="Pilates" && <img src= "/src/components/secondary/img/pilates.png"/>}
      {type==="Spinning" && <img src= "/src/components/secondary/img/spinning.png"/>}
      {type==="Streching" && <img src= "/src/components/secondary/img/streching.png"/>}
      {type==="Taebo" && <img src= "/src/components/secondary/img/taebo.png"/>}
      {type==="Taekwondo" && <img src= "/src/components/secondary/img/taekwondo.png"/>}
      {type==="Taichi" && <img src= "/src/components/secondary/img/taichi.png"/>}
      {type==="Zumba" && <img src= "/src/components/secondary/img/zumba.png"/>}
      {type==="Yoga" && <img src= "/src/components/secondary/img/yoga.png"/>}
      <h2>{type}</h2>
      <p>Fecha: {date}</p>
      <p>Horario: {time}</p>
      <p>Turno nº: {id}</p>
      <p>Estado: {status}</p>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
};

export default Appointments;

