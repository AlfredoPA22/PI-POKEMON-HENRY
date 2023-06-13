import style from './FormPage.module.css'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { createPokemon, getAllPokemons, getAllTypes } from '../../redux/actions';
import NavBarAlter from '../navbar/NavBarAlter';
import CardCreated from './CardCreated';
import Form from './Form';
import validation from './validation';
const FormPage=()=>{
    const types=useSelector((state)=>state.allTypes);
    const dispatch=useDispatch();
    const [formState,setFormState]=useState({
        Nombre:'',
        Imagen:'',
        Vida:0,
        Ataque:0,
        Defensa:0,
        Velocidad:0,
        Altura:0,
        Peso:0,
        Tipo:[]
    }); 
    const [typeSelected,setTypeSelected]=useState([]);
    const [validations,setValidations]=useState({error:true});
    const handlerForm=(event)=>{
        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })
        setValidations(validation({
            ...formState,
            [event.target.name]:event.target.value
        }));
    }
    const handlerType=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        if(!typeSelected.some((objeto) => objeto.ID == value)){
            if(typeSelected.length< 3){
                setTypeSelected([...typeSelected,{ID:value,Nombre:name}])
                setFormState({...formState,Tipo:[...formState.Tipo,value]})
                setValidations(validation({...formState,Tipo:[...formState.Tipo,value]}));
            }
        }else{
            const newArray=typeSelected.filter((elem)=>elem.ID !=value)
            let arrayForm=[]
            newArray.forEach((elem)=>{
                arrayForm.push(elem.ID)
            })
            setTypeSelected(newArray)
            setFormState({...formState,Tipo:arrayForm})
            setValidations(validation({...formState,Tipo:arrayForm}));
        }
        
    }
    const handlerSubmit= async(event)=>{
        event.preventDefault();
        const stateReset={
            Nombre:'',
            Imagen:'',
            Vida:0,
            Ataque:0,
            Defensa:0,
            Velocidad:0,
            Altura:0,
            Peso:0,
            Tipo:[]
        }
        await dispatch(createPokemon(formState))
        setFormState(stateReset);
        setValidations({error:true})
        setTypeSelected([])
    }
    useEffect(()=>{
        const get=async()=>{
            await dispatch(getAllTypes());
        }
       get();
    },[])
    return(
        <div className={style.container}>
            <NavBarAlter/>
            <article className={style.generalContainer}>
                <CardCreated data={formState} types={typeSelected} validations={validations}/>
                <Form validations={validations} handlerForm={handlerForm} handlerType={handlerType} handlerSubmit={handlerSubmit} data={formState} types={types}/>
            </article>
        </div>
    )
}
export default FormPage