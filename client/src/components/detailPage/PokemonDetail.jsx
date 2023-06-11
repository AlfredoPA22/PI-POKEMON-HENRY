import style from './PokemonDetail.module.css'
import { useEffect,useState } from 'react';
import { useParams,NavLink,useNavigate} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { getPokemonDetail } from '../../redux/actions';
import NavBarAlter from '../navbar/NavBarAlter';

import imgLoading from '../homePage/utils/Loading.gif'
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
import imgDefault from './utils/default.png'

const PokemonDetail=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const detail=useSelector((state)=>state.pokemonDetail)

useEffect(async()=>{
    await dispatch(getPokemonDetail(id))
    setLoader(false)
},[])
    return(
        <>
            {loader ? <img  className={style.imgLoad} src={imgLoading} alt="loading..." />:
            <div className={style.body}>
                <NavBarAlter/>
            <div className={style.container}>
                <section className={style.sectionImage}>
                    <h1>#{detail.ID} {detail.Nombre}</h1>
                    <img src={detail.Imagen} alt={imgDefault} />
                    <section className={style.tipos}>   
                        {detail.Tipo?.map((elem,index)=>{
                            return(
                                    <div key={index} className={style.typeSection}>
                                        <h2 key={index}>{elem}</h2>
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
                </section>
                <section className={style.sectionDetails}>
                    <h1>Details</h1>
                    <div className={style.details}>
                        <h2>Hp:</h2>
                        <input className={style.range} type="range" min='0' max='100' value={detail.Vida} readOnly/>
                        <h2>{detail.Vida}</h2>
                        <h2>Attack: </h2>
                        <input className={style.range} type="range" min='0' max='100' value={detail.Ataque} readOnly/>
                        <h2>{detail.Ataque}</h2>
                        <h2>Defense: </h2>
                        <input className={style.range} type="range" min='0' max='100' value={detail.Defensa} readOnly/>
                        <h2>{detail.Defensa}</h2>
                        <h2>Speed: </h2>
                        <input className={style.range} type="range" min='0' max='100' value={detail.Velocidad} readOnly/>
                        <h2>{detail.Velocidad}</h2>
                        <h2>height: </h2>
                        <input className={style.range} type="range" min='0' max='100' value={detail.Altura} readOnly/>
                        <h2>{detail.Altura}</h2>
                        <h2>weight: </h2>
                        <input className={style.range} type="range" min='0' max='100' value={detail.Peso} readOnly/>
                        <h2>{detail.Peso}</h2>
                    </div>             
                </section>              
            </div>
            </div>
           
            }
        </>
    )
}

export default PokemonDetail;