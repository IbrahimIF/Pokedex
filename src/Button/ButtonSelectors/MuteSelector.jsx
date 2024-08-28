/*import { useState } from 'react'*/


function MuteSelector({isMuted, onToggleMute}) {

    return (
      <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4"
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
  