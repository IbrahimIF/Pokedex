/*import { useState } from 'react'*/

/* Font awseome Icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';


function MuteSelector({isMuted, onToggleMute}) {
  
    return (
      <>
      <button
        className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-1/2"
        onClick={onToggleMute}

        >
          {isMuted ? <FontAwesomeIcon icon={faVolumeHigh} />  : <FontAwesomeIcon icon={faVolumeXmark} /> } 
        </button>
        <div className="flex bottom-0 right-0">
        </div>
      </>
    )
  }
  
  
  export default MuteSelector
  