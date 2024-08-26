import { useState, useEffect } from 'react'
import './App.css'
import Pokedex from './Pokedex/Pokedex';
import BackgroundSelector from './BackgroundSelector';
import Button from './Button/Button';
import GenSelector from './Button/GenSelector';


const backgrounds =[
  {name : 'City', url: 'url("/src/assets/City.png")'},
  {name : 'Green', url: 'url("/src/assets/Green.png")'},
  {name: 'Pokeball', url: 'url("/src/assets/PokeballBG.png")'},
]

const generations = [
  { name: 'Generation 1', url: 'path/to/foreground1.png' },
  { name: 'Generation 2', url: 'path/to/foreground2.png' },
]


function App() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentGeneration, setCurrentGeneration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);


  const changeBackground = (index) => {
    setCurrentBackground(index);
  };

  const changeGeneration = (index) => {
    setCurrentGeneration(index);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audioElements = document.getElementsByTagName('audio');
    for (let audio of audioElements){
      audio.muted = isMuted;
    }
  }, [isMuted]);


  return (
    <>
      <div className = "bg-cover bg-center h-screen " style={{backgroundImage: backgrounds[currentBackground].url}}>
        <div className="flex flex-row flex-wrap h-full w-full p-20 ">
        <div className='absolute top-4 right-4 space-y-2'>
          <BackgroundSelector
            backgrounds = {backgrounds}
            currentBackground = {currentBackground}
            onBackgroundChange = {changeBackground}
            />
            <GenSelector 
            generations={generations} 
            currentGeneration={currentGeneration} 
            onGenerationChange={changeGeneration} 
          />
          <Button isMuted={isMuted} onToggleMute={toggleMute} />
          </div>
          <p className="text-white">Current background index: {currentBackground}</p>
          <Pokedex/>
          
        </div>
      </div>
    </>
  )
}

export default App
