import { useState } from 'react'
import { getPokemonData } from '../PokeAPI/pokeapi';
import './Pokedex.css';
import { playButtonSound } from '/public/Sounds/sound';

import dex_one from '/public/Textures/dex1.png';

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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleGetPokemon();
        }
    };

    // Ensure pokemonData is not null before using it
    const CapsPokemon = pokemonData ? pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1) : '';
    const types = pokemonData ? pokemonData.types.map((typeInfo) => typeInfo.type.name) : '';

    const type1 = types[0] || '';  // First type
    const type2 = types[1] || '';  // Second type, or empty string if it doesn't exist

    return (
        <>
            <div className="pokedex-container">
                <div className="pokedex-inner">

                    <img src={dex_one} alt="pokedex texture"></img>

                    <div className="pokedex-screen-container">
                        <div id="pokemonInfo" className="pokemon-info">
                            {error && <p>{error}</p>}
                            {pokemonData && (
                                <div>
                                    <h2 className="pokemon-name">{CapsPokemon} // {pokemonData.genus}</h2>
                                    <div className="type-container">
                                        <span className={`type-pill ${type1}`}>{type1}</span>
                                        {type2 && (
                                            <span className={`type-pill ${type2}`}>{type2}</span>
                                        )}
                                    </div>
                                    <img
                                        src={pokemonData.sprites.front_default}
                                        alt={pokemonData.name}
                                        className="pokemon-sprite"
                                    />
                                    <div className="stats-container">
                                        <p>Height: {pokemonData.height}</p>
                                        <p>Weight: {pokemonData.weight}</p>
                                    </div>
                                    <p className="pokemon-description">{CapsPokemon + "," + " " + "the" + " " + pokemonData.genus + "," + " " + pokemonData.description.toLowerCase()}</p>
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            id="pokemonName"
                            placeholder="Enter Pokémon name"
                            value={pokemonName}
                            onChange={(e) => setPokemonName(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="pokemon-input"
                        />
                        <button onClick={handleGetPokemon} className="pokemon-button">
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokedex
