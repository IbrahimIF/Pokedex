import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import BackgroundSelector from './ButtonSelectors/BackgroundSelector';
import MuteSelector from './ButtonSelectors/MuteSelector';
import GenSelector from './ButtonSelectors/GenSelector';
import { playButtonSound, setMuteState } from '/public/Sounds/sound';

function Buttons({ backgrounds, currentBackground, onBackgroundChange, generations, currentGeneration, onGenerationChange }) {
    const [isMuted, setIsMuted] = useState(false);

    const changeGeneration = (index) => {
        onGenerationChange(index);
        playButtonSound();
    };

    const toggleMute = () => {
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);
        setMuteState(newMutedState);
        playButtonSound();
    };

    const changeBackground = (index) => {
        onBackgroundChange(index);
        playButtonSound();
    };

    useEffect(() => {
        const audioElements = document.getElementsByTagName('audio');
        for (let audio of audioElements) {
            audio.muted = isMuted;
        }
        setMuteState(isMuted);
    }, [isMuted]);

    return (
        <>
            <div className="flex flex-col justify-start items-start space-y-2 w-1/4 max-w-xs ml-5">
                <BackgroundSelector
                    backgrounds={backgrounds}
                    currentBackground={currentBackground}
                    onBackgroundChange={changeBackground}
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

Buttons.propTypes = {
    backgrounds: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    currentBackground: PropTypes.number.isRequired,
    onBackgroundChange: PropTypes.func.isRequired,
    generations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    currentGeneration: PropTypes.number.isRequired,
    onGenerationChange: PropTypes.func.isRequired,
};

export default Buttons;


