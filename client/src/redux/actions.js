import axios from 'axios'
import {GETALLPOKEMONS,SEARCHPOKEMON,GETPOKEMONDETAIL, GETALLTYPES, FILTERTYPE, FILTERORIGIN, ALPHABETICALORDER, ATACKORDER} from './actions-type'

export const getAllPokemons=()=>{
    const endpoint='http://localhost:3001/pokemons/'
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(endpoint);
            return dispatch({
                type:GETALLPOKEMONS,
                payload:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const searchPokemon=(name)=>{
    const endpoint=`http://localhost:3001/pokemons/?name=${name}`
    return async (dispatch)=>{
        try {
            const {data}= await axios.get(endpoint);
            return dispatch({
                type:SEARCHPOKEMON,
                payload:data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export const getPokemonDetail=(id)=>{
    const endpoint=`http://localhost:3001/pokemons/${id}`
    return async (dispatch)=>{
        try {
            const {data}= await axios(endpoint);
            return dispatch({
                type:GETPOKEMONDETAIL,
                payload:data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export const getAllTypes=()=>{
    const endpoint=`http://localhost:3001/types`
    return async (dispatch)=>{
        try {
            const {data}=await axios(endpoint);
            return dispatch({
                type:GETALLTYPES,
                payload:data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const filterType=(type)=>{
    return {
        type:FILTERTYPE,
        payload:type
    }
}
export const filterOrigin=(origin)=>{
    return {
        type:FILTERORIGIN,
        payload:origin
    }
}
export const alphabeticalOrder=(order)=>{
    return{
        type:ALPHABETICALORDER,
        payload:order
    }
}
export const atackOrder=(order)=>{
    return{
        type:ATACKORDER,
        payload:order
    }
}