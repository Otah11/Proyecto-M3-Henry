import  styles from './NavBar.module.css'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setUserAppointments, setUserData } from '../../../redux/reducer'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const user = useSelector(state => state.userLogged.userData.login)
    console.log(user)

    const handleLogOut = () => {
        if(window.confirm("¿Estas seguro de cerrar sesion?")){
            dispatch(setUserAppointments([]))
            dispatch(setUserData({}))
            Navigate('/')
    }}

    return(
        <div className={styles.navbar}>
            
            <div >
            <img src= "/src/components/secondary/img/logo.png" className={styles.image}/>
            
            </div>
            <div >
                <Link to = "/"><span>Home</span></Link>
                <Link to = "/about"><span>About</span></Link>
                
                {user ? <Link to = "/turnos"><span>Mi Cuenta</span></Link> : null}
                {user ? <button onClick={handleLogOut} className={styles.buttons}>Log Out</button>: null}

            </div>
                {!user ?               
            <div className={styles.buttons}>
                <Link to= "/login"><button >Login</button></Link>
                <Link to ="/register"><button >Sign Up</button></Link>
            </div> : null
                }
      </div>
    )
}
export default NavBar

//llamar a la etiqueta link <Link to='/about' className={styles.item}>Sign Up</Link>