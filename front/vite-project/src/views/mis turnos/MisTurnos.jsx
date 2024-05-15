/*eslint-disable*/
import { useState } from 'react';
import Appointments from '../../components/primary/appointments/Appointments';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './MisTurnos.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserAppointments } from '../../redux/reducer';

const MisTurnos = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userLogged.userData.user.id);
    const appointments = useSelector(state => state.userLogged.userAppointments);
    console.log(userId)

    useEffect(() => {
       axios.get (`http://localhost:3000/users/${userId}`)
       .then (res => dispatch (setUserAppointments(res.data.appointments)))
    },[userId, dispatch])

    const handleCancel = () => {
        axios.get (`http://localhost:3000/users/${userId}`)
        .then (res => dispatch (setUserAppointments(res.data.appointments)))
        .catch (error => console.error("Error al actualizar los turnos:", error))
    }

    return(
        <div className={styles.container}>
            <h1>Este es el componente MisTurnos</h1>
            <div className={styles.cardcontainer}>
                {appointments.map(appointment => {
                    const fecha = appointment.date.split('T')[0]
                 return <Appointments key={appointment.id} id={appointment.id} date={fecha} time={appointment.time} type={appointment.type} status={appointment.status} onCancel={handleCancel} />
                })}
            </div>
        </div>       
    )
}

export default MisTurnos

// className={styles.container}

// className={styles.cardcontainer}