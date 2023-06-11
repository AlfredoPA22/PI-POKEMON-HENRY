const axios=require('axios')
const {Pokemon,Type,pokemonType}=require('../db');

const getPokemonsById= async(idPokemon)=>{
    let pokemonDetail={};
    let tipo=[];
    try {
        if(esUUID(idPokemon)){
            const pokemons=await Pokemon.findAll({
                include:[
                    {
                        model:Type,
                        through:{
                            model:pokemonType
                        },
                        attributes:['ID','Nombre']
                    }
                ],
                where:{
                    ID:idPokemon
                }
            });
            if(pokemons.length > 0){
                const result=pokemons.shift();
                result.types.map((element)=>{
                    tipo.push(element.Nombre)
                })
                pokemonDetail={
                    ID:result.ID,
                    Nombre:result.Nombre,
                    Imagen:result.Imagen,
                    Vida:result.Vida,
                    Ataque:result.Ataque,
                    Defensa:result.Defensa,
                    Velocidad:result.Velocidad,
                    Altura:result.Altura,
                    Peso:result.Peso,
                    Tipo:tipo
                }
                // return res.status(200).json(pokemonDetail)
                return pokemonDetail;
            }
        }
        const {data}=await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        data.types.forEach(element => {
            tipo.push(element.type.name)
        });
        pokemonDetail={
            ID:data.id,
            Nombre:data.name,
            Imagen:data.sprites.other.dream_world.front_default,
            Vida:data.stats[0].base_stat,
            Ataque:data.stats[1].base_stat,
            Defensa:data.stats[2].base_stat,
            Velocidad:data.stats[5].base_stat,
            Altura:data.height,
            Peso:data.weight,
            Tipo:tipo
        }
        // return res.status(200).json(pokemonDetail);
        return pokemonDetail;

    } catch (error) {
        // return res.status(500).json({error:'Pokemon Not Found'})
        throw new Error('Pokemon Not Found');
    }
}

const esUUID=(variable)=> {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(variable);
}

module.exports=getPokemonsById;