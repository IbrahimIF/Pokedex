import {useState, useEffect} from 'react'

import './index.css'
import Pokedex from './Components/Pokedex/Pokedex';
import Buttons from './Components/Button/Button';
import Loading from './Components/Loading/Loading';
import { backgrounds } from './Components/Button/ButtonSelectors/BackgroundSelector';
import { generationsData } from './Components/Button/ButtonSelectors/GenSelector';
import { useAudio } from './hooks/useAudio';

function App() {
  const [currentBackground, setCurrentBackground] = useState(() => {
    const savedBackground = localStorage.getItem('currentBackground');
    const parsedBackground = savedBackground !== null ? Number(savedBackground) : 0;
    return parsedBackground < backgrounds.length ? parsedBackground : 0;
  });
  const [currentGeneration, setCurrentGeneration] = useState(() => {
    const savedGeneration = localStorage.getItem('currentGeneration');
    const parsedGeneration = savedGeneration !== null ? Number(savedGeneration) : 0;
    return parsedGeneration < generationsData.length ? parsedGeneration : 0;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const { playButtonSound } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('currentBackground', currentBackground);
  }, [currentBackground]);
  
  useEffect(() => {
    localStorage.setItem('currentGeneration', currentGeneration);
  }, [currentGeneration]);

  return (
    <>
    {isLoading ? (
        <div className={`loading-screen ${isVisible ? 'visible' : 'hidden'}`}>
          <Loading/>
        </div>
      ) : (
          <div id="Background" className="content fade-in bg-cover bg-center h-screen" style={{ backgroundImage: backgrounds[currentBackground].url }}>
            <div id="Container" className="flex w-full h-full p-10 justify-center  ">
              <Pokedex
                currentGeneration={currentGeneration}
                generationsData={generationsData}
                playButtonSound={playButtonSound}
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
