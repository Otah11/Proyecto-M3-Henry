/*eslint-disable*/
import styles from "./Appointments.module.css"
const Appointments = ({ id, date, time, type, status }) => {
  return (
    <div className={styles.card}>
      <img src= "/src/components/secondary/img/yoga.png"/>
      <h2>{type}</h2>
      <p>Fecha: {date}</p>
      <p>Horario: {time}</p>
      <p>Turno nº: {id}</p>
      <p>Estado: {status}</p>
    </div>
  );
};

export default Appointments;

// className={styles.card}