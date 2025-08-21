

export const getPokemonData = async (pokemonName) => {
  if (!pokemonName) {
    throw new Error('Please enter a Pokémon name.');
  }



  // Fetch basic Pokémon data
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
  if (!response.ok) {
    throw new Error('Pokémon not found');
  }
  const data = await response.json();


  // Fetch Pokémon species data to get the description
  const speciesResponse = await fetch(data.species.url);
  if (!speciesResponse.ok) {
    throw new Error('Pokémon species data not found');
  }
  const speciesData = await speciesResponse.json();


  // Extracting the genus in English
  const genusEntry = speciesData.genera.find(
    (genus) => genus.language.name === 'en'
  );
  const genus = genusEntry ? genusEntry.genus : 'No genus available';


  // Find the English description
  const englishEntry = speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  );
  const description = englishEntry ? englishEntry.flavor_text : 'No description available';

  return { ...data, description, genus };
};