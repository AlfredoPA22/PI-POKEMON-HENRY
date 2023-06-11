const {Pokemon,Type,pokemonType} =require('../db')

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
        return {message:'Pokemon Created'};
    } catch (error) {
        // return res.status(500).json({error:error.message})
        throw new Error(error.message);
    }
}

module.exports=postPokemon;