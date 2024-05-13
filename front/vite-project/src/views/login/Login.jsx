import { useState } from "react";
import styles from './Login.module.css'
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        });
        const errors=validateLogin(loginData);
        setErrors(errors);
        // setErrors(validateLogin(loginData));
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (Object.keys(errors).length > 0) {
            axios.post("http://localhost:3000/users/login", loginData)
            .then(() => {alert("Iniciaste sesión exitosamente");
               
            })
            .catch(() => alert("Error al iniciar sesión"))
        } else{console.log(loginData)}
    }

    return (
        <form className={styles['login-form']}  onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Username</label>
            <input type="text" name="username" value={loginData.username} placeholder="username" onChange={handleInputChange} />
            {errors.username &&<p style={{color: 'red'}}>{errors.username}</p>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={loginData.password} placeholder="********" onChange={handleInputChange} />
            {errors.password &&<p style={{color: 'red'}}>{errors.password}</p>}
          </div>
          <button>Login</button>
        </form>
      );

}

export default Login