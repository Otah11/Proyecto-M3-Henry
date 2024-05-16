/*eslint-disable*/
import styles from "./Appointments.module.css";
import axios from 'axios';

const Appointments = ({ id, date, time, type, status, onCancel }) => {

  const handleCancel = async () => {
    if (!canCancel(date)) {
      alert("La cita solo puede ser cancelada con al menos un día de anticipación.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      alert("Cita cancelada");
      onCancel();
    } catch (error) {
      alert("Error al cancelar la cita");
    }
  };

 
  const canCancel = (appointmentDate) => {
    const currentDate = new Date();
    const appointment = new Date(appointmentDate);
   
    appointment.setDate(appointment.getDate() - 0);
    
    return currentDate <= appointment;
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'cancelled':
        return styles.cancelled;
      case 'active':
        return styles.confirmed;
      default:
        return '';
    }
  };

  return (
    <div className={styles.card}>
      {type === "Calistenia" && <img src="/src/components/secondary/img/calistenia.png" />}
      {type === "Crossfit" && <img src="/src/components/secondary/img/crossfit.png" />}
      {type === "Hiit" && <img src="/src/components/secondary/img/hit.png" />}
      {type === "Kickboxing" && <img src="/src/components/secondary/img/kickboxing.png" />}
      {type === "Pilates" && <img src="/src/components/secondary/img/pilates.png" />}
      {type === "Spinning" && <img src="/src/components/secondary/img/spinning.png" />}
      {type === "Streching" && <img src="/src/components/secondary/img/streching.png" />}
      {type === "Taebo" && <img src="/src/components/secondary/img/taebo.png" />}
      {type === "Taekwondo" && <img src="/src/components/secondary/img/taekwondo.png" />}
      {type === "Taichi" && <img src="/src/components/secondary/img/taichi.png" />}
      {type === "Zumba" && <img src="/src/components/secondary/img/zumba.png" />}
      {type === "Yoga" && <img src="/src/components/secondary/img/yoga.png" />}
      <h2>{type}</h2>
      <p>Fecha: {date}</p>
      <p>Horario: {time}</p>
      <p>Turno nº: {id}</p>
      <p className={`${styles.status} ${getStatusClass(status)}`}>Estado: {status}</p>
      <button onClick={handleCancel} className={styles.button}>Cancelar</button>
    </div>
  );
};

export default Appointments;
