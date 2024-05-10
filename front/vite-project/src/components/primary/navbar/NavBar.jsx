import  styles from './NavBar.module.css'
const NavBar = () => {
    return(
        <div className={styles.navbar}>
            
            <div >
            <img src= "/src/components/secondary/img/logo.png" className={styles.image}/>
            
            </div>
            <div >
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <div className={styles.buttons}>
                <button >Log In</button>
                <button >Sign Up</button>
            </div>
      </div>
    )
}
export default NavBar