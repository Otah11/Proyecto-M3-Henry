import { useState } from "react";
import styles from './Login.module.css'
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/reducer";

const Login = () => {
  const dispatch = useDispatch();  
  
  
  const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        });
        const errors=validateLogin(loginData);
        setErrors(errors);
       
        
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
       
        if (Object.keys(errors).length === 0) {
          try {
            const response = await axios.post("http://localhost:3000/users/login", loginData)
               alert("Login exitoso")
               dispatch(setUserData(response.data))
               console.log(response.data)
               navigate("/");
            }
           catch (error) {
            alert("Usuario o contraseña incorrectos")
          }
        } else{alert("Formulario incompleto")}
    }

    return (
         <div className={styles.container}>
        <form className={styles['login-form']}  onSubmit={handleSubmit}>
          
          <h2>Login</h2>
          <div>
            <label>Username</label>
            <input type="text" name="username" value={loginData.username} placeholder="username" onChange={handleInputChange} />
            {errors.username &&<p >{errors.username}</p>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={loginData.password} placeholder="********" onChange={handleInputChange} />
            {errors.password &&<p >{errors.password}</p>}
          </div>
          <button disabled={loginData.username === '' ||  loginData.password === '' || Object.keys(errors).length !== 0} >Login</button>
        </form>
        </div>
      );

}

export default Login