import style from './Landing.module.css'
import ButtonLink from '../buttons/ButtonLink'
import image from '../landingPage/utils/PokemonIndex3.png'
import {NavLink} from 'react-router-dom'
const Landing=()=>{
    return(
        <div className={style.container}>
            <div className={style.image}> <img src={image} alt="imageIndex" width="1200px"/></div>
            <NavLink to='/home' className={style.button}><ButtonLink text='Home'/></NavLink>
        </div>
    )
}

export default Landing;