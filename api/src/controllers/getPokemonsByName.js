const axios=require('axios')
const { Op } = require('sequelize');
const {Pokemon,Type,pokemonType}=require('../db')

const getPokemonsByName= async(name)=>{
    // const {name}=req.query;
    let pokemonDetail={};
    let tipo=[];
    try {
        const pokemons = await Pokemon.findAll({
            include: [
              {
                model: Type,
                through: {
                  model: pokemonType,
                },
                attributes: ['ID', 'Nombre'],
              },
            ],
            where:{
                Nombre:{
                    [Op.iLike]: `%${name}%`
                }
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

        const {data}=await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
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
        // return res.status(404).json({error:'Pokemon Not Found'})
        throw new Error('Pokemon Not Found');
    }
}

module.exports=getPokemonsByName;