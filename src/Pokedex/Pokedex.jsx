import { useState } from 'react'
import { getPokemonData } from '../PokeAPI/pokeapi'; 
import './Type.css';
import { playButtonSound } from '/public/Sounds/sound';


function Pokedex() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleGetPokemon = async () => {
    try {
      const data = await getPokemonData(pokemonName);
      setPokemonData(data);
      playButtonSound();
      setError('');
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    }
  };



   // Ensure pokemonData is not null before using it
   const CapsPokemon = pokemonData ? pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1) : '';
   const types = pokemonData ? pokemonData.types.map((typeInfo) => typeInfo.type.name) : '';

   const type1 = types[0] || '';  // First type
   const type2 = types[1] || '';  // Second type, or empty string if it doesn't exist


  return (
    <>
    <div className="flex justify-start items-center w-full max-w-2xl">
      <div className="flex flex-col justify-start  text-center h-full relative overflow-hidden border-neutral-600 min-h-[40vh] w-full p-10 m-5 rounded-[15px] border-2 border-solid bg-red-900">
          <div className="flex justify-start w-1/2 space-x-3">
            <div className="flex w-12 h-12 ball"></div>
            <div className="flex w-5 h-5 rounded-full shadow-lg shadow-red-500/50 ball_r"></div>
            <div className="flex w-5 h-5 rounded-full shadow-lg shadow-yellow-500/50 ball_y"></div>
            <div className="flex w-5 h-5 rounded-full shadow-lg shadow-green-500/50 ball_g"></div>
          </div>
        <div className="flex flex-col justify-start items-center text-center h-full mt-3 relative overflow-hidden border-neutral-600 min-h-[40vh] w-full p-5  rounded-[15px] border-2 border-solid bg-red-600">
          {/*<h1 className="text-white mb-5">Pokémon Information</h1>*/}
          <div id="pokemonInfo" className="text-white border-2 bg-black border-yellow-100 mb-5 h-full w-full rounded-[15px]">
            {error && <p>{error}</p>}
            {pokemonData && (
              <div>
                <h2 className="text-xl mt-2">{CapsPokemon}</h2>
                <p>Species Name: {pokemonData.genus}</p>
                <img
                  src={pokemonData.sprites.front_default}
                  alt={pokemonData.name}
                  className="w-40 mx-auto border-2 mt-2 border-yellow-100 bg-black rounded-[15px]"
                />
                <div className=' flex flex-wrap justify-center items-center mt-2 w-full space-x-4'>
                  <p className='flex '>Height: {pokemonData.height}</p>
                  <p className='flex '>Weight: {pokemonData.weight}</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                  <span className={`flex flex-wrap mt-10 p-3 m-5 border-2 border-white rounded-[15px] justify-center w-1/4 ${type1}`}>{type1}</span>
                  {type2 && (
                    <span className={`flex flex-col mt-10 p-3 m-5 border-2 border-white rounded-[15px] justify-center w-1/4 ${type2}`}>{type2}</span>
                  )}
                </div>
                <p className="item-center p-5 ">{ CapsPokemon +"," +" "+ "the" + " " + pokemonData.genus +"," + " " + pokemonData.description.toLowerCase()}</p>
              </div>
            )}
          </div>
            <input
                type="text"
                id="pokemonName"
                placeholder="Enter Pokémon name"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                className="p-2 mb-3 rounded w-full rounded-[15px]"
              />
              <button onClick={handleGetPokemon} className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                Get Pokémon Info
              </button>
          </div>
      </div>
    </div>
  </>
  )
}

export default Pokedex
