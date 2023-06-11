import style from './NavBar.module.css'
import SearchBar from "../searchbar/SearchBar";
import ButtonLink from '../buttons/ButtonLink';
import { Link } from 'react-router-dom';

const NavBar=({handlerSearch})=>{
    return(
        <>
            <section className={style.back}> <Link to='/'><ButtonLink text='Inicio'/></Link> </section>
            <section className={style.search}><SearchBar handlerSearch={handlerSearch}/></section>
            <section className={style.create}><Link to='/form'><button className={style.btnCreate}>Create Pokemon</button></Link> </section>
        </>
            
        
    )
}
export default NavBar;