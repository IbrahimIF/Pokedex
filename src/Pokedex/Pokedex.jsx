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

  const CapsPokemon = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);


  return (
    <>
    <div className="flex justify-center w-full h-full">
      <div className="flex relative justify-center flex-col overflow-hidden border-neutral-600 min-h-[40vh] w-[70vh] m-5 p-10 rounded-[15px] border-2 border-solid bg-slate-600">
        <h1 className="text-white mb-5">Pokémon Information</h1>
        <input
          type="text"
          id="pokemonName"
          placeholder="Enter Pokémon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="p-2 mb-3 rounded"
        />
        <button onClick={handleGetPokemon} className="p-2 bg-blue-500 text-white rounded">
          Get Pokémon Info
        </button>
        <div id="pokemonInfo" className="mt-5 text-white">
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
  </>
  )
}

export default Pokedex
