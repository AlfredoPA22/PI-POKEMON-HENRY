import { GETALLPOKEMONS,SEARCHPOKEMON,GETPOKEMONDETAIL,GETALLTYPES,FILTERTYPE,FILTERORIGIN, ALPHABETICALORDER, ATACKORDER } from "./actions-type";

const initialState={
    allPokemons:[],
    auxPokemons:[],
    pokemonDetail:{},
    allTypes:[]
}

const reducer=(state=initialState,actions)=>{
    switch(actions.type){
        case GETALLPOKEMONS:
            return {
                ...state,
                allPokemons:actions.payload,
                auxPokemons:actions.payload
            }
        case SEARCHPOKEMON:
            return{
                ...state,
                auxPokemons:[actions.payload]
            }
        case GETPOKEMONDETAIL:
            return{
                ...state,
                pokemonDetail:actions.payload
            }
        case GETALLTYPES:
            return{
                ...state,
                allTypes:actions.payload
            }
        case FILTERTYPE:
            let filterType=[];
            if(actions.payload == 'All') {
                filterType=state.allPokemons;
            }else{
                filterType=state.allPokemons.filter((elem)=> elem.Tipo.includes(actions.payload))
            }
            return{
                ...state,
                auxPokemons:filterType
            }
        case FILTERORIGIN:
            let filterOrigin=[];
            if(actions.payload == 'All') {
                filterOrigin=state.allPokemons;
            }else{
                filterOrigin=state.allPokemons.filter((elem)=> elem.Origen == actions.payload)
            }
            return{
                ...state,
                auxPokemons:filterOrigin
            }
        case ALPHABETICALORDER:
            let alphabeticOrder=[];
            if(actions.payload=='asc'){
                alphabeticOrder=[...state.auxPokemons].sort((a, b) => a.Nombre.localeCompare(b.Nombre))
            }else if(actions.payload=='desc'){
                alphabeticOrder=[...state.auxPokemons].sort((a,b) => b.Nombre.localeCompare(a.Nombre))
            }else{
                alphabeticOrder=[...state.auxPokemons]
            }
            return{
                ...state,
                auxPokemons:alphabeticOrder
            }
        case ATACKORDER:
            let atackOrder=[];
            if(actions.payload=='asc'){
                atackOrder=[...state.auxPokemons].sort((a, b) => a.Ataque - b.Ataque)
            }else if(actions.payload=='desc'){
                atackOrder=[...state.auxPokemons].sort((a,b) => b.Ataque - a.Ataque)
            }else{
                atackOrder=[...state.auxPokemons]
            }
            return{
                ...state,
                auxPokemons:atackOrder
            }
        default :
            return {...state}
    }
}

export default reducer;