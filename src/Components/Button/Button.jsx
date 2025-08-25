import PropTypes from 'prop-types';
import BackgroundSelector from './ButtonSelectors/BackgroundSelector';
import MuteSelector from './ButtonSelectors/MuteSelector';
import GenSelector from './ButtonSelectors/GenSelector';
import { useAudio } from '../../hooks/useAudio';

function Buttons({ backgrounds, currentBackground, onBackgroundChange, generations, currentGeneration, onGenerationChange }) {
    const { isMuted, playButtonSound, toggleMute } = useAudio();
    const changeGeneration = (index) => {
        onGenerationChange(index);
        playButtonSound();
    };

    const changeBackground = (index) => {
        onBackgroundChange(index);
        playButtonSound();
    };

    return (
        <>
            <div id="Buttons" className="flex flex-col justify-start items-start space-y-2 w-1/4 max-w-xs ml-5">
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


