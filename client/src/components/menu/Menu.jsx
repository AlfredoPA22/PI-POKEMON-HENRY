import style from './Menu.module.css';
import ButtonAcept from '../buttons/ButtonAcept';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getAllTypes,filterType,filterOrigin,alphabeticalOrder, atackOrder } from '../../redux/actions';
const Menu=({getAll,changePage})=>{
    const types=useSelector((state)=>state.allTypes);
    const dispatch= useDispatch();
    const [selectFilterType,setSelectFilterType]=useState('');
    const [selectFilterOrigin,setSelectFilterOrigin]=useState('');
    const [selectOrderAlpha,setSelectOrderAlpha]=useState('');
    const [selectOrderAtack,setSelectOrderAtack]=useState('');
    const handlerfilterType=(event)=>{
        setSelectFilterType(event.target.value);
        setSelectFilterOrigin('');
        setSelectOrderAlpha('');
        setSelectOrderAtack('');
        dispatch(filterType(event.target.value));
        changePage(1);
    }
    const handlerfilterOrigin=(event)=>{
        setSelectFilterOrigin(event.target.value);
        setSelectFilterType('');
        setSelectOrderAlpha('');
        setSelectOrderAtack('');
        dispatch(filterOrigin(event.target.value));
        changePage(1);
    }
    const handlerAlphabeticalOrder=(event)=>{
        setSelectOrderAlpha(event.target.value);
        setSelectOrderAtack('');
        dispatch(alphabeticalOrder(event.target.value))
    }
    const handlerAtackOrder=(event)=>{
        setSelectOrderAtack(event.target.value);
        setSelectOrderAlpha('');
        dispatch(atackOrder(event.target.value))
    }
    const resetAll=()=>{
        setSelectFilterType('');
        setSelectFilterOrigin('');
        setSelectOrderAlpha('');
        setSelectOrderAtack('');
        getAll();
    }
useEffect(async()=>{
   await dispatch(getAllTypes());
},[])
    return(
        <>
            <section className={style.reset}><ButtonAcept action={resetAll} text='Reset All'/></section>
            <section className={style.filter}>
                <select name='selectType' value={selectFilterType} onChange={handlerfilterType}>
                    <option value='All' defaultChecked>All Types</option>
                    {
                        types?.map((elem)=>{
                            return(
                                <option key={elem.ID} value={elem.Nombre}>{elem.Nombre}</option>
                            )
                        })
                    }
                </select>
                <select name='selectOrigin' value={selectFilterOrigin} onChange={handlerfilterOrigin}>
                    <option value='All' defaultChecked>All Origin</option>
                    <option value="API" >Poke API</option>
                    <option value="DB" >Data Base</option>
                </select>
                <select name='selectAlpha' value={selectOrderAlpha} onChange={handlerAlphabeticalOrder}>
                    <option value='default' defaultChecked>Alphabetical order</option>
                    <option value="asc" >A-Z</option>
                    <option value="desc" >Z-A</option>
                </select>
                <select name='selectAtack' value={selectOrderAtack} onChange={handlerAtackOrder}>
                    <option value='default' defaultChecked>Order by attack</option>
                    <option value="asc" >ASC</option>
                    <option value="desc" >DESC</option>
                </select>
            </section>
        </>
    )
}
export default Menu;