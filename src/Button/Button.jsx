import React, { useEffect, useState } from 'react';
import BackgroundSelector from './ButtonSelectors/BackgroundSelector';
import MuteSelector from './ButtonSelectors/MuteSelector';
import GenSelector from './ButtonSelectors/GenSelector';

const generations = [
  { name: 'Generation 1', url: 'path/to/foreground1.png' },
  { name: 'Generation 2', url: 'path/to/foreground2.png' },
];

function Buttons({ backgrounds, currentBackground, onBackgroundChange }) {
  const [currentGeneration, setCurrentGeneration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const changeGeneration = (index) => {
    setCurrentGeneration(index);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audioElements = document.getElementsByTagName('audio');
    for (let audio of audioElements) {
      audio.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <div className="flex flex-col justify-start items-start space-y-2 w-1/4 max-w-xs ml-5">
        <BackgroundSelector
          backgrounds={backgrounds}
          currentBackground={currentBackground}
          onBackgroundChange={onBackgroundChange}
        />
        <GenSelector
          generations={generations}
          currentGeneration={currentGeneration}
          onGenerationChange={changeGeneration}
        />
        <MuteSelector isMuted={isMuted} onToggleMute={toggleMute} />
      </div>
    </>
  );
}

export default Buttons;