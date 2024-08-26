/*import { useState } from 'react'*/




function Button({isMuted, onToggleMute}) {

  return (
    <>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-50%"
      onClick={onToggleMute}
      >
        {isMuted ? 'Unmute' : 'Mute'} Audio
      </button>
      <div className="flex bottom-0 right-0">
      <p>Button</p>
      <p>Button</p>
      <p>Button</p>
      </div>
    </>
  )
}


export default Button
