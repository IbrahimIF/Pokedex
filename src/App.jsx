import { useState} from 'react'

import './App.css'
import Pokedex from './Pokedex/Pokedex';
import Buttons from './Button/Button';
import { ThemeProvider } from "./Context/SavedChanges";



const backgrounds = [
  { name: 'City', url: 'url(/Backgrounds/Box_City_BDSP.png)' },
  { name: 'Nostalgic', url: 'url(/Backgrounds/Box_Nostalgic_BDSP.png)' },
  { name: 'Desert', url: 'url(/Backgrounds/Box_Desert_BDSP.png)' },
  { name: 'Distortion', url: 'url(/Backgrounds/Box_Distortion_Platinum_BDSP.png)' },
  { name: 'Team Galactic', url: 'url(/Backgrounds/Box_Team_Galactic_Platinum_BDSP.png)' },
  { name: 'PokeCenter', url: 'url(/Backgrounds/220px-Box_Pokemon_Center_BDSP.png)' },
  { name: 'Forest', url: 'url(/Backgrounds/Box_Forest_BDSP.png)' },
  { name: 'Volcano', url: 'url(/Backgrounds/Box_Volcano_BDSP.png)' },
  { name: 'Pokeballs', url: 'url(/Backgrounds/depositphotos_120454410-stock-illustration-pokeball-seamless-pattern.png)' },
  { name: 'Default', url: 'url(/Backgrounds/ff8208192e36b712cf3386f00797566d.png)' },
];


function App() {
  const [currentBackground, setCurrentBackground] = useState(0);

  return (
    <>
    <ThemeProvider>
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: backgrounds[currentBackground].url }}>
          <div className="flex w-full h-full p-10 justify-center  ">
            <Pokedex/>
            <Buttons
                backgrounds={backgrounds}
                currentBackground={currentBackground}
                onBackgroundChange={setCurrentBackground}
              />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
