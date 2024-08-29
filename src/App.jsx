import { useState} from 'react'

import './App.css'
import Pokedex from './Pokedex/Pokedex';
import Buttons from './Button/Button';


const backgrounds = [
  { name: 'City', url: 'url(/Backgrounds/Box_City_BDSP.png)' },
  { name: 'Nostalgic', url: 'url(/Backgrounds/Box_Nostalgic_BDSP.png)' },
  { name: 'Simple', url: 'url(/Backgrounds/Box_Simple_BDSP.png)' },
];


function App() {
  const [currentBackground, setCurrentBackground] = useState(0);

  return (
    <>
      <div className = "bg-cover bg-center h-screen " style={{backgroundImage: backgrounds[currentBackground].url}}>
      {console.log("Applied background:", backgrounds[currentBackground].url)}
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
