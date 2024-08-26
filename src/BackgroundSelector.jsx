import PropTypes from 'prop-types';


function BackgroundSelector ({backgrounds, currentBackground, onBackgroundChange}){
    return(
      
            <select
                className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                value  = {currentBackground}
                onChange = {(e) => onBackgroundChange(Number(e.target.value))}
                >
                    {backgrounds.map((bg, index) => (
                        <option key = {index} value = {index}>
                            {bg.name}
                        </option>
                    ))}
                    </select>
        
    );
}

BackgroundSelector.propTypes = {
    onClick: PropTypes.func,
  };
export default BackgroundSelector;