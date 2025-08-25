import { useState, useEffect } from 'react';

const buttonSound = new Audio('/Sounds/Button Sound Effect.mp3');
const backgroundMusic = new Audio('/Sounds/Background Music.mp3');
backgroundMusic.loop = true;

export const useAudio = () => {
    const [isMuted, setIsMuted] = useState(() => {
        const savedMuteState = localStorage.getItem('isMuted');
        return savedMuteState !== null ? JSON.parse(savedMuteState) : false;
    });

    const [started, setStarted] = useState(false);

    useEffect(() => {
        buttonSound.muted = isMuted;
        backgroundMusic.muted = isMuted;

        if (!isMuted  && started) {
            backgroundMusic.play().catch(error => console.error("Error playing background music:", error));
        } else {
            backgroundMusic.pause();
        }

        localStorage.setItem('isMuted', JSON.stringify(isMuted));
    }, [isMuted, started]);

    const playButtonSound = () => {
        if (!isMuted) {
            buttonSound.play().catch(error => console.error("Error playing button sound:", error));
            setStarted(true);
        }
    };

    const toggleMute = () => {
        if (!started) {
            setStarted(true);
        }
        setIsMuted(prevMuteState => !prevMuteState);
    };

    return { isMuted, playButtonSound, toggleMute };
};