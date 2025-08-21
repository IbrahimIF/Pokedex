import PropTypes from 'prop-types';

export const backgrounds = [
    { name: 'Realistic', url: 'url(/Backgrounds/box_realistic.png)' },
    { name: 'City', url: 'url(/Backgrounds/box_city.png)' },
    { name: 'Nostalgic', url: 'url(/Backgrounds/Box_Nostalgic_BDSP.png)' },
    { name: 'Desert', url: 'url(/Backgrounds/Box_Desert_BDSP.png)' },
    { name: 'Distortion', url: 'url(/Backgrounds/Box_Distortion_Platinum_BDSP.png)' },
    { name: 'Team Galactic', url: 'url(/Backgrounds/Box_Team_Galactic_Platinum_BDSP.png)' },
    { name: 'PokeCenter', url: 'url(/Backgrounds/pokemon_center.png)' },
    { name: 'Forest', url: 'url(/Backgrounds/box_forest.png)' },
    { name: 'Volcano', url: 'url(/Backgrounds/box_volcano.png)' },
    { name: 'Pokeballs', url: 'url(/Backgrounds/pokeballs.png)' },
    { name: 'Simple', url: 'url(/Backgrounds/box_simple.png' },
    { name: 'Default', url: 'url(/Backgrounds/default.png)' },
];

function BackgroundSelector ({backgrounds, currentBackground, onBackgroundChange}){
    return(
        <select
            className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
            value ={currentBackground}
            onChange={(e) => onBackgroundChange(Number(e.target.value))}
        >
            {backgrounds.map((bg, index) => (
                <option key={index} value={index}>
                    {bg.name}
                </option>
            ))}
        </select>
    );
}

BackgroundSelector.propTypes = {
    backgrounds: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    currentBackground: PropTypes.number.isRequired,
    onBackgroundChange: PropTypes.func.isRequired,
  };

export default BackgroundSelector;