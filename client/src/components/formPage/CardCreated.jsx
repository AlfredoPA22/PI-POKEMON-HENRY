import style from './CardCreated.module.css'

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
import imgDefault from './utils/default.jpg'
import atackImage from './utils/atack.png'
import defenseImage from './utils/defense.png'
import speedImage from './utils/speed.png'
import heightImage from './utils/height.png'
import weightImage from './utils/weight.png'
import hpImage from './utils/hp.png'
const CardCreated=({data,types})=>{
    return(
        <div className={style.cardContainer}>
            <header className={style.title}><h1>Card Preview</h1></header>
            <article className={style.article}>
                    <section className={style.sectionSpec}>
                        <span>{data.Ataque}</span>
                        <img src={atackImage} alt={data.Ataque}/>
                        <span>{data.Defensa}</span>
                        <img src={defenseImage} alt={data.Defensa}/>
                        <span>{data.Velocidad}</span>
                        <img src={speedImage} alt={data.Velocidad}/>
                        
                    </section>
                    <section className={style.section2}> 
                        <h2>{data.Nombre}</h2>
                        <img src={data.Imagen?data.Imagen:imgDefault} alt={data.Nombre}/>
                    </section>
                    <section className={style.sectionSpec}>
                        <img src={hpImage} alt={data.Vida}/>
                        <span>{data.Vida}</span>
                        <img src={heightImage} alt={data.Velocidad}/>
                        <span>{data.Altura}</span>
                        <img src={weightImage} alt={data.Velocidad}/>
                        <span>{data.Peso}</span>
                    </section>
            </article>
            <footer className={style.tipos}>   
                        {types?.map((elem,index)=>{
                            return(
                                    <div key={index} className={style.typeSection}>
                                        <h2>{elem.Nombre}</h2>
                                        {elem.Nombre == "dark" && <img src={dark} alt="dark"/>}
                                        {elem.Nombre == "electric" && <img src={electric} alt="electric"/>}
                                        {elem.Nombre == "fairy" && <img src={fairy} alt="fairy"/>}
                                        {elem.Nombre == "fighting" && <img src={fighting} alt="fighting"/>}
                                        {elem.Nombre == "ground" && <img src={ground} alt="ground"/>}
                                        {elem.Nombre == "ice" && <img src={ice} alt="ice"/>}
                                        {elem.Nombre == "normal" && <img src={normal} alt="normal"/>}
                                        {elem.Nombre == "poison" && <img src={poison} alt="poison"/>}
                                        {elem.Nombre == "psychic" && <img src={psychic} alt="psychic"/>}
                                        {elem.Nombre == "rock" && <img src={rock} alt="rock"/>}
                                        {elem.Nombre == "water" && <img src={water} alt="water"/>}
                                        {elem.Nombre == "steel" && <img src={steel} alt="steel"/>}
                                        {elem.Nombre == "bug" && <img src={bug} alt="bug"/>}
                                        {elem.Nombre == "ghost" && <img src={ghost} alt="ghost"/>}
                                        {elem.Nombre == "fire" && <img src={fire} alt="fire"/>}
                                        {elem.Nombre == "grass" && <img src={grass} alt="grass"/>}
                                        {elem.Nombre == "dragon" && <img src={dragon} alt="dragon"/>}
                                        {elem.Nombre == "flying" && <img src={flying} alt="flying"/>}
                                        {elem.Nombre == "unknown" && <img src={unknown} alt="unknown"/>}
                                        {elem.Nombre == "shadow" && <img src={shadow} alt="shadow"/>}
                                    </div>
                                )
                        })}
            </footer>
                    
        </div>
    )
}

export default CardCreated;