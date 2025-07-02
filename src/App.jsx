import {useState, useEffect} from 'react'

import './App.css'
import Pokedex from './Pokedex/Pokedex';
import Buttons from './Button/Button';
import Loading from './Loading/Loading';
import { ThemeProvider } from "./Context/SavedChanges";



const backgrounds = [
    { name: 'City', url: 'url(/Backgrounds/box_city.png)' },
    { name: 'Nostalgic', url: 'url(/Backgrounds/Box_Nostalgic_BDSP.png)' },
    { name: 'Desert', url: 'url(/Backgrounds/Box_Desert_BDSP.png)' },
    { name: 'Distortion', url: 'url(/Backgrounds/Box_Distortion_Platinum_BDSP.png)' },
    { name: 'Team Galactic', url: 'url(/Backgrounds/Box_Team_Galactic_Platinum_BDSP.png)' },
    { name: 'PokeCenter', url: 'url(/Backgrounds/pokemon_center.png)' },
    { name: 'Forest', url: 'url(/Backgrounds/box_forest.png)' },
    { name: 'Volcano', url: 'url(/Backgrounds/box_volcano.png)' },
    { name: 'Pokeballs', url: 'url(/Backgrounds/pokeballs.png)' },
    { name: 'Simple', url: 'url(/Backgrounds/box_simple.png' },
    { name: 'Default', url: 'url(/Backgrounds/default.png)' },
];

const generationsData = [
  { name: 'Generation 1', image: '/public/Textures/dex1.png' }, 
  { name: 'Generation 2', image: '/public/Textures/dex1.png' }, //Dex 2 has been added but its a stand in.
];

function App() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentGeneration, setCurrentGeneration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (
        <div className={`loading-screen ${isVisible ? 'visible' : 'hidden'}`}>
          <Loading/>
        </div>
      ) : (
        <div className="content fade-in">
          <ThemeProvider>
            <div className="bg-cover bg-center h-screen" style={{ backgroundImage: backgrounds[currentBackground].url }}>
              <div className="flex w-full h-full p-10 justify-center  ">
                <Pokedex
                    currentGeneration={currentGeneration}
                    generationsData={generationsData}
                />
                <Buttons
                    backgrounds={backgrounds}
                    currentBackground={currentBackground}
                    onBackgroundChange={setCurrentBackground}
                    generations={generationsData}
                    currentGeneration={currentGeneration}
                    onGenerationChange={setCurrentGeneration}
                  />
              </div>
            </div>
          </ThemeProvider>
        </div>
      )}
    </>
  )
}

export default App
