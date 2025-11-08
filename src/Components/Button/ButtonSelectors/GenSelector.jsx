import PropTypes from 'prop-types';
import '../Button.css';

export const generationsData = [
  { name: 'Generation 1', image: '/Textures/dex1.png' }, 
  { name: 'Generation 2', image: '/Textures/dex1.png' },
];

function GenSelector({ generations, currentGeneration, onGenerationChange }) {
  return (
    <select 
      className="pixel-btn"
      value={currentGeneration}
      onChange={(e) => onGenerationChange(Number(e.target.value))}
    >
      {generations.map((gen, index) => (
        <option key={index} value={index}>
          {gen.name}
        </option>
      ))}
    </select>
  );
}


GenSelector.propTypes = {
  generations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentGeneration: PropTypes.number.isRequired,
  onGenerationChange: PropTypes.func.isRequired,
};
export default GenSelector;
