import { useState} from 'react'

import './App.css'
import Pokedex from './Pokedex/Pokedex';
import Buttons from './Button/Button';


const backgrounds = [
  { name: 'City', url: 'url("/Backgrounds/City.png")' },
  { name: 'Green', url: 'url("/Backgrounds/Green.png")' },
  { name: 'Pokeball', url: 'url("/Backgrounds/PokeballBG.png")' },
];


function App() {
  const [currentBackground, setCurrentBackground] = useState(0);

  return (
    <>
      <div className = "bg-cover bg-center h-screen " style={{backgroundImage: backgrounds[currentBackground].url}}>
        <div className="flex w-full h-full p-10 justify-center  ">
          <Pokedex/>
          <Buttons
              backgrounds={backgrounds}
              currentBackground={currentBackground}
              onBackgroundChange={setCurrentBackground}
            />
        </div>
      </div>
    </>
  )
}

export default App
