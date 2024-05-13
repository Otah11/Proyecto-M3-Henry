/*eslint-disable*/
import { useState } from 'react';
import Appointments from '../../components/primary/appointments/Appointments';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './MisTurnos.module.css'
const MisTurnos = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
       axios.get ("http://localhost:3000/appointments/")
       .then(res => setAppointments(res.data))
    },[])

    return(
        <div className={styles.container}>
            <h1>Este es el componente MisTurnos</h1>
            <div className={styles.cardcontainer}>
                {appointments.map(appointment => {
                    const fecha = appointment.date.split('T')[0]
                 return <Appointments key={appointment.id} id={appointment.id} date={fecha} time={appointment.time} type={appointment.type} status={appointment.status} />
                })}
            </div>
        </div>       
    )
}

export default MisTurnos

// className={styles.container}

// className={styles.cardcontainer}