import { useState } from 'react'
import { getPokemonData } from '../PokeAPI/pokeapi'; 

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleGetPokemon = async () => {
    try {
      const data = await getPokemonData(pokemonName);
      setPokemonData(data);
      
      setError('');
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    }
  };



   // Ensure pokemonData is not null before using it
   const CapsPokemon = pokemonData ? pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1) : '';


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
        <div className="flex flex-col justify-start items-center text-center h-full mt-6 relative overflow-hidden border-neutral-600 min-h-[40vh] w-full p-10  rounded-[15px] border-2 border-solid bg-red-600">
          <h1 className="text-white mb-5">Pokémon Information</h1>
          <input
            type="text"
            id="pokemonName"
            placeholder="Enter Pokémon name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            className="p-2 mb-3 rounded w-full"
          />
          <button onClick={handleGetPokemon} className="p-2 bg-blue-500 text-white rounded w-full">
            Get Pokémon Info
          </button>
          <div id="pokemonInfo" className="mt-5 text-white ">
            {error && <p>{error}</p>}
            {pokemonData && (
              <div>
                <h2 className="text-xl">{CapsPokemon}</h2>
                <p>Species Name: {pokemonData.genus}</p>
                <img
                  src={pokemonData.sprites.front_default}
                  alt={pokemonData.name}
                  className="w-40 mx-auto"
                />
                <p>Height: {pokemonData.height}</p>
                <p>Weight: {pokemonData.weight}</p>
                <p>Type: {pokemonData.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
                <p className="mt-4">{ CapsPokemon +"," +" "+ "the" + " " + pokemonData.genus +"," + " " + pokemonData.description.toLowerCase()}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Pokedex
