import style from './FormPage.module.css'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllTypes } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import NavBarAlter from '../navbar/NavBarAlter';
import CardCreated from './CardCreated';
import Form from './Form';
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
    const handlerForm=(event)=>{
        setFormState({
            ...formState,
            [event.target.name]:event.target.value
        })
    }
    const handlerType=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        if(!typeSelected.some((objeto) => objeto.ID == value)){
            if(typeSelected.length< 3){
                setTypeSelected([...typeSelected,{ID:value,Nombre:name}])
                setFormState({...formState,Tipo:[...formState.Tipo,value]})
            }
        }else{
            const newArray=typeSelected.filter((elem)=>elem.ID !=value)
            let arrayForm=[]
            newArray.forEach((elem)=>{
                arrayForm.push(elem.ID)
            })
            setTypeSelected(newArray)
            setFormState({...formState,Tipo:arrayForm})
        }
        
    }
    const handlerImage=(event)=>{
        const file=event.target.files[0];
        if(file){
        const reader=new FileReader();
        
        reader.onload= (e)=>{
            const imagePath = e.target.result;
            setFormState({...formState,Imagen:imagePath});
        }
        reader.readAsDataURL(file);
        }
        
    }
    const handlerSubmit=(event)=>{
        event.preventDefault();
    }


    useEffect(()=>{
       dispatch(getAllTypes());
    },[])
    return(
        <div>
            <NavBarAlter/>
            <article className={style.generalContainer}>
                <CardCreated data={formState} types={typeSelected}/>
                <Form handlerForm={handlerForm} handlerType={handlerType} handlerImage={handlerImage} handlerSubmit={handlerSubmit} data={formState} types={types}/>
            </article>
        </div>
        
        
    )
}
export default FormPage