import style from './SearchBar.module.css';
import ButtonAcept from '../buttons/ButtonAcept';
import { useState } from 'react';

const SearchBar=({handlerSearch})=>{
    const [value,setValue]=useState();
    const handleChange=(event)=>{
        let name=event.target.value;
        if(name == "") name = undefined;
        setValue(name);
    }
    return(
        <>
            <input className={style.input} type="text" value={value} onChange={handleChange} placeholder='Buscar' />
            <ButtonAcept action={handlerSearch} value={value} text='Search'/>
        </>
    )
}
export default SearchBar;