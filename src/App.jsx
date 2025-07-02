import { useState } from 'react'

import './App.css'
import Pokedex from './Pokedex/Pokedex';
import Buttons from './Button/Button';
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


function App() {
    const [currentBackground, setCurrentBackground] = useState(0);

    return (
        <>
            <ThemeProvider>
                <div className="bg-cover bg-center h-screen" style={{ backgroundImage: backgrounds[currentBackground].url }}>
                    <div className="flex w-full h-full p-10 justify-center  ">
                        <Pokedex />
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
