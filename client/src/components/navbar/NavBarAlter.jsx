import style from './NavBarAlter.module.css'
import { NavLink } from 'react-router-dom';
const NavBarAlter=()=>{
    return(
        <nav className={style.nav}>
        <NavLink className={style.back} to='/home'>Home</NavLink>
        </nav>
    )
}
export default NavBarAlter;