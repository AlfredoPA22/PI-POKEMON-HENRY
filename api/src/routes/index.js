const { Router } = require('express');
const getAllPokemon = require('../controllers/getAllPokemon')
const getPokemonsById = require('../controllers/getPokemonsById')
const getPokemonsByName = require('../controllers/getPokemonsByName')
const postPokemon=require('../controllers/postPokemon')
const getTypes=require('../controllers/getTypes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', async (req,res)=>{
    try {
      const name=req.query.name || undefined;

      if(name){
        const response= await getPokemonsByName(name);
        return res.status(200).json(response);
      }else{
        const responseAll= await getAllPokemon();
        return res.status(200).json(responseAll);
      }

    } catch (error) {
      if(error.message === 'Pokemon Not Found') return res.status(404).json({error:error.message});
      return res.status(500).json({error:error.message});
      
    }
})

router.get('/pokemons/:idPokemon',async(req,res)=>{
   try {
      const {idPokemon}=req.params;
      const response=await getPokemonsById(idPokemon);
      return res.status(200).json(response);
   } catch (error) {
      if(error.message === 'Pokemon Not Found') return res.status(404).json({error:error.message});
      return res.status(500).json({error:error.message});
   }
})

router.post('/pokemons',async (req,res)=>{
   try {
      const body=req.body;
      const response=await postPokemon(body)
      return res.status(200).json(response);
   } catch (error) {
      return res.status(500).json({error:error.message});
   }
})

router.get('/types',async(req,res)=>{
   try {
      const response =await getTypes();
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({error:error.message}); 
   }
})

module.exports = router;
