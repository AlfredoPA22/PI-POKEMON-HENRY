import {getAllPokemons,getAllTypes,searchPokemon,firstMountHome} from '../../redux/actions';
import {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Card from "../card/Card"
import NavBar from '../navbar/NavBar';
import Menu from '../menu/Menu';
import Paginado from '../paginado/Paginado';
import style from './Home.module.css'
import imgLoading from './utils/giphy_1.gif'
const Home=()=>{
    const statePokemons=useSelector((state)=>state.auxPokemons)
    const stateMountHome=useSelector((state)=>state.homeMount)
    const dispatch=useDispatch();
    const [loader,setLoader]=useState(true)
    const [currentPage,setCurrentPage]=useState(1);
    const [nroPublics,setnroPublics]=useState(12);
    const LastPublication=currentPage*nroPublics;
    const FirstPublication=LastPublication-nroPublics
    const newArrayPokemons=statePokemons.slice(FirstPublication,LastPublication);
    const handlerSearch=(value)=>{
        dispatch(searchPokemon(value))
        changePage(1);
    }
    const changePage=(num)=>{
        setCurrentPage(num);
    }
    const nextPage=()=>{
        const next=currentPage+1;
        if(next<=Math.ceil(statePokemons.length / nroPublics)){
            setCurrentPage(next)
        }
    }
    const previusPage=()=>{
        const previus=currentPage-1;
        if(previus>=1){
            setCurrentPage(previus);
        }
    }
    useEffect(()=>{
        (async () => {
            if (stateMountHome) {
              await dispatch(getAllPokemons());
              await dispatch(firstMountHome());
              await dispatch(getAllTypes());
            }
            setLoader(false);
        })();
    },[])
  
    return(
        <div className={style.container}>
            <section className={style.nav}><NavBar handlerSearch={handlerSearch}/></section>
            <section className={style.menu}><Menu changePage={changePage} /></section>
            <section className={style.paginado}><Paginado nextPage={nextPage} previusPage={previusPage} nroPublics={nroPublics} totalPosts={statePokemons.length} changePage={changePage} currentPage={currentPage}/></section>
            {
                loader ? <img  className={style.imgLoad} src={imgLoading} alt="loading..." /> : <article className={style.article}>
                {
                newArrayPokemons?.map((elem)=>{
                    return(
                        <Card key={elem.ID} info={elem}/>
                    )
                })
                }
                </article>
            }
            <section className={style.paginado}><Paginado nextPage={nextPage} previusPage={previusPage} nroPublics={nroPublics} totalPosts={statePokemons.length} changePage={changePage} currentPage={currentPage}/></section>
            
        </div>
    )
}
export default Home