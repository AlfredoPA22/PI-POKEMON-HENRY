const axios = require('axios');
const {Type}=require('../db')
const getTypes= async()=>{
    try {
        const dbTypes= await Type.findAll();
        if(dbTypes.length == 0){
            const {data}= await axios('https://pokeapi.co/api/v2/type');
            await Promise.all(data.results.map(async (element) => {
                await Type.create({ Nombre: element.name });
            }));
            const createdTypes = await Type.findAll();
            // return res.status(200).json(createdTypes);
            return createdTypes;
        }
        // return res.status(200).json(dbTypes)
        return dbTypes;
    } catch (error) {
        // return res.status(500).json({error:error.message})
        throw new Error(error.message)
    }
}

module.exports=getTypes