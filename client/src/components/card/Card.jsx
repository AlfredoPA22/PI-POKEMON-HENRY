import style from "./Card.module.css"
import dark from '../card/utils/typesImage/dark.png'
import electric from '../card/utils/typesImage/electric.png'
import fairy from '../card/utils/typesImage/fairy.png'
import fighting from '../card/utils/typesImage/fighting.png'
import ground from '../card/utils/typesImage/ground.png'
import ice from '../card/utils/typesImage/ice.png'
import normal from '../card/utils/typesImage/normal.png'
import poison from '../card/utils/typesImage/poison.png'
import psychic from '../card/utils/typesImage/psychic.png'
import rock from '../card/utils/typesImage/rock.png'
import steel from '../card/utils/typesImage/steel.png'
import water from '../card/utils/typesImage/water.png'
import bug from '../card/utils/typesImage/bug.png'
import ghost from '../card/utils/typesImage/ghost.png'
import fire from '../card/utils/typesImage/fire.png'
import grass from '../card/utils/typesImage/grass.png'
import dragon from '../card/utils/typesImage/dragon.png'
import unknown from '../card/utils/typesImage/normal.png'
import shadow from '../card/utils/typesImage/normal.png'
import flying from '../card/utils/typesImage/flying.png'
import imgDefault from '..//utils/default6.png'
import { NavLink } from "react-router-dom"
const Card=({info})=>{
    return(
        <NavLink key={info.ID}  className={style.linkCard} to={`/detail/${info.ID}`}>
        <div className={style.container}>
            <section className={style.title}>
                <h2>{info.Nombre}</h2>
            </section>
            
            <img src={info.Imagen?info.Imagen:imgDefault} alt={info.Nombre} width='200px' height='200px'/>
            <section className={style.tipos}>
            {info.Tipo?.map((elem,index)=>{
                return(
                    <div key={index} className={style.typeSection}>
                        <h3>{elem}</h3>
                        {elem == "dark" && <img src={dark} alt="dark"/>}
                        {elem == "electric" && <img src={electric} alt="electric"/>}
                        {elem == "fairy" && <img src={fairy} alt="fairy"/>}
                        {elem == "fighting" && <img src={fighting} alt="fighting"/>}
                        {elem == "ground" && <img src={ground} alt="ground"/>}
                        {elem == "ice" && <img src={ice} alt="ice"/>}
                        {elem == "normal" && <img src={normal} alt="normal"/>}
                        {elem == "poison" && <img src={poison} alt="poison"/>}
                        {elem == "psychic" && <img src={psychic} alt="psychic"/>}
                        {elem == "rock" && <img src={rock} alt="rock"/>}
                        {elem == "water" && <img src={water} alt="water"/>}
                        {elem == "steel" && <img src={steel} alt="steel"/>}
                        {elem == "bug" && <img src={bug} alt="bug"/>}
                        {elem == "ghost" && <img src={ghost} alt="ghost"/>}
                        {elem == "fire" && <img src={fire} alt="fire"/>}
                        {elem == "grass" && <img src={grass} alt="grass"/>}
                        {elem == "dragon" && <img src={dragon} alt="dragon"/>}
                        {elem == "flying" && <img src={flying} alt="flying"/>}
                        {elem == "unknown" && <img src={unknown} alt="unknown"/>}
                        {elem == "shadow" && <img src={shadow} alt="shadow"/>}
                    </div>
                    
                )
            })}
            </section>
        </div>
        </NavLink>
    )
}

export default Card;