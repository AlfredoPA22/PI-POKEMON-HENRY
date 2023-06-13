const {Pokemon,Type,pokemonType} =require('../db')
const getAllPokemon =require('./getAllPokemon')

const postPokemon = async({Nombre,Imagen,Vida,Ataque,Defensa,Velocidad,Altura,Peso,Tipo})=>{
    // const {Nombre,Imagen,Vida,Ataque,Defensa,Velocidad,Altura,Peso,Tipo}=req.body
    try {
        if(Tipo.length==0) throw new Error("Missing Data")
        let pokemon={
            Nombre,
            Imagen,
            Vida,
            Ataque,
            Defensa,
            Velocidad,
            Altura,
            Peso
        }
        const pokemonCreated= await Pokemon.create(pokemon);

        await Promise.all(Tipo.map(async (element) => {
            await pokemonType.create({pokemonID:pokemonCreated.ID,typeID:element})
        }));
        // return res.status(200).json({message:'Pokemon Created'})
        let tipo=[];
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
            where:{
                ID:pokemonCreated.ID
            }
        })
        const result=pokemons.shift();
        result.types.map((element)=>{
            tipo.push(element.Nombre)
        })
        const pokemonNew={
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
        return {message:'Pokemon Created',data:pokemonNew};
    } catch (error) {
        // return res.status(500).json({error:error.message})
        throw new Error(error.message);
    }
}

module.exports=postPokemon;