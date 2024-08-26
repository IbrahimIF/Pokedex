import React from 'react';

function GenSelector({ generations, currentGeneration, onGenerationChange }) {
  return (
    <select 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
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