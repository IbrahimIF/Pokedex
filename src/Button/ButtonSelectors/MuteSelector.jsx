/*import { useState } from 'react'*/


function MuteSelector({isMuted, onToggleMute}) {

    return (
      <>
      <button
        className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
        onClick={onToggleMute}
        >
          {isMuted ? 'Unmute' : 'Mute'} Audio
        </button>
        <div className="flex bottom-0 right-0">
        </div>
      </>
    )
  }
  
  
  export default MuteSelector
  