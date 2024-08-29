/*import { useState } from 'react'*/

function GenSelector({ generations, currentGeneration, onGenerationChange }) {
  return (
    <select 
      className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
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

export default GenSelector;