const {Pokemon,Type,pokemonType}=require('../db')
const axios=require('axios')

const getAllPokemon= async()=>{
    let allPokemon=[];
    try {
        let pokemons= await Pokemon.findAll({
            include: [
                {
                  model: Type,
                  through: {
                    model: pokemonType,
                  },
                  attributes: ['ID', 'Nombre'],
                },
            ],
        })
        if(pokemons.length >0){
            pokemons.map((element)=>{
                let tipo=[];
                element.types.map((element)=>{
                    tipo.push(element.Nombre)
                })
                allPokemon.push({
                    ID:element.ID,
                    Nombre:element.Nombre,
                    Imagen:element.Imagen,
                    Vida:element.Vida,
                    Ataque:element.Ataque,
                    Defensa:element.Defensa,
                    Velocidad:element.Velocidad,
                    Altura:element.Altura,
                    Peso:element.Peso,
                    Tipo:tipo,
                    Origen:'DB'
                })
            })
        }
        const {data}=await axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=60`);
        await Promise.all(data.results.map(async(pokeInfo)=>{
                let tipo=[];
                const info = await axios(pokeInfo.url);
                info.data.types.map((elementType) => {
                    tipo.push(elementType.type.name)
                });
                allPokemon.push({
                    ID:info.data.id,
                    Nombre:info.data.name,
                    Imagen:info.data.sprites.other.dream_world.front_default,
                    Vida:info.data.stats[0].base_stat,
                    Ataque:info.data.stats[1].base_stat,
                    Defensa:info.data.stats[2].base_stat,
                    Velocidad:info.data.stats[5].base_stat,
                    Altura:info.data.height,
                    Peso:info.data.weight,
                    Tipo:tipo,
                    Origen:'API'
               });
        }))
        allPokemon.sort((a,b)=>a.ID-b.ID)
        // return res.status(200).json(allPokemon)
        return allPokemon
    } catch (error) {
        // return res.status(500).json({error:error.message})
        throw new Error(error.message)
    }
}

module.exports=getAllPokemon;