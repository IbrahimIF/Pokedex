import PropTypes from 'prop-types';
/*import { useState } from 'react'*/

function BackgroundSelector ({backgrounds, currentBackground, onBackgroundChange}){
    return(
      
            <select
                className = "bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
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