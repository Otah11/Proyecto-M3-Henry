import { useState } from 'react';
import  styles from "./Register.module.css";
import axios from 'axios';
import {validateRegister} from '../../helpers/validateRegister.js'
const Register = () => {
  
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    birthDate: '', 
    dni: '', 
    username: '', 
    password: '', 
    confirmPassword: '' 
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value      
    });
    const errors=validateRegister(formData);
    setErrors(errors);
  };
  
  const [errors, setErrors] = useState({
  name: '', 
  email: '', 
  birthDate: '', 
  dni: '', 
  username: '', 
  password: '', 
  confirmPassword: '' 
});
  const handleSubmit = (e) => {
    e.preventDefault();


        if (Object.keys(errors).length > 0) {
        axios.post("http://localhost:3000/users/register", formData)
        .then(() => {alert("Usuario registrado exitosamente");
            setFormData({
                name: '', 
                email: '', 
                birthDate: '', 
                dni: '', 
                username: '', 
                password: '', 
                confirmPassword: ''
            })
        })
        .catch(() => alert("Error al registrar el usuario"))
    } 
  };

  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Nombre y Apellido:
        <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Juan Perez' />
        {errors.name && <p>{errors.name}</p>}
      </label>
      <label className={styles.label}>
        Email:
        <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} placeholder='juanperez@ejemplo.com'/>
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label className={styles.label}>
        Fecha de Nacimiento:
        <input className={styles.input} type="date" name="birthDate" value={formData.birthDate} onChange={handleChange}  />
        {errors.birthDate && <p>{errors.birthDate}</p>}
      </label>
      <label className={styles.label}>
        DNI:
        <input className={styles.input} type="text" name="dni" value={formData.dni} onChange={handleChange} placeholder='30400500'/>
        {errors.dni && <p>{errors.dni}</p>}
      </label>
      <label className={styles.label}>
        Username:
        <input className={styles.input} type="text" name="username" value={formData.username} onChange={handleChange} placeholder='juanperez1990' />
        {errors.username && <p>{errors.username}</p>}
      </label>
      <label className={styles.label}>
        Password:
        <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} placeholder='********' />
        {errors.password && <p>{errors.password}</p>}
      </label>
      <label className={styles.label}>
        Confirmar Password:
        <input className={styles.input} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='********'/>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </label>
      <button className={styles.button} >Registrar</button>
    </form>
  );
};

export default Register;