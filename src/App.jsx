import {useState, useEffect} from 'react'

import './index.css'
import Pokedex from './Components/Pokedex/Pokedex';
import Buttons from './Components/Button/Button';
import Loading from './Components/Loading/Loading';
import { backgrounds } from './Components/Button/ButtonSelectors/BackgroundSelector';
import { generationsData } from './Components/Button/ButtonSelectors/GenSelector';

function App() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentGeneration, setCurrentGeneration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
          <div className="content fade-in bg-cover bg-center h-screen" style={{ backgroundImage: backgrounds[currentBackground].url }}>
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
      )}
    </>
  )
}

export default App
