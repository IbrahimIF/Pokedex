/*import { useState } from 'react'*/
import './App.css'
import Pokedex from './Pokedex/Pokedex';
import Button from './Button/Button';

function App() {


  return (
    <>
      <div className="flex w-full h-full">
      <Button/>
      <Pokedex/>
      </div>
    </>
  )
}

export default App
