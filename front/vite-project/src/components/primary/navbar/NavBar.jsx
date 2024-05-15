import  styles from './NavBar.module.css'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const NavBar = () => {

    const user = useSelector(state => state.userLogged.userData.login)
    console.log(user)
    return(
        <div className={styles.navbar}>
            
            <div >
            <img src= "/src/components/secondary/img/logo.png" className={styles.image}/>
            
            </div>
            <div >
                <Link to = "/"><span>Home</span></Link>
                <span>About</span>
                <span>Contact</span>
                {user ? <Link to = "/turnos"><span>Turnos</span></Link> : null}
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