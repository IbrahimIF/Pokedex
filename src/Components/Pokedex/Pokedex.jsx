import PropTypes from 'prop-types';
import { useState } from 'react'
import { getPokemonData } from '../../api/pokeapi';
import './Pokedex.css';
import './Type.css'
import { playButtonSound } from '/public/Sounds/sound';
import Voice from '../Voice/Voice';

function Pokedex({ currentGeneration, generationsData }) {
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

    const type1 = types[0] || '';
    const type2 = types[1] || '';

    const cleanedDescription = pokemonData
  ? pokemonData.description.replace(/\u000c/g, ' ').toLowerCase()
  : '';

const descriptionText = pokemonData
  ? `${CapsPokemon}, the ${pokemonData.genus}, ${cleanedDescription}`
  : '';

    return (
        <>
            <div className="pokedex-container">
                    <Voice descriptionText={descriptionText} />
                    <img src={generationsData[currentGeneration]?.image} alt="pokedex texture"></img>
                    <div className="pokedex-screen-container">
                            {error && <p>{error}</p>}
                            {pokemonData && (
                                <div className="pokemon-info">
                                    <img
                                        src={pokemonData.sprites.front_default}
                                        alt={pokemonData.name}
                                        className="pokemon-sprite"
                                    />
                                    <div className="type-container">
                                        <span className={`type-pill ${type1}`}>{type1}</span>
                                        {type2 && (
                                            <span className={`type-pill ${type2}`}>{type2}</span>
                                        )}
                                    </div>

                                    <div className="stats-container">
                                        <p>Height: {pokemonData.height}</p>
                                        <p>Weight: {pokemonData.weight}</p>
                                    </div>
                                    <p className="pokemon-description">{descriptionText}</p>
                                </div>
                            )}
                    </div>
                    <div className="input-container">
                            <input
                                type="text"
                                id="pokemonName"
                                placeholder="Enter Pokémon name"
                                value={pokemonName}
                                onChange={(e) => setPokemonName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="pokemon-input"
                            />
                        </div>
            </div>
        </>
    )
}



Pokedex.propTypes = {
    currentGeneration: PropTypes.number.isRequired,
    generationsData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Pokedex


