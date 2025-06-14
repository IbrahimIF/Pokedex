let isMuted = false;

export const setMuteState = (muted) => {
    isMuted = muted;
};

export const playButtonSound = () => {
    if (isMuted) {
        const audio = new Audio('/Sounds/Pokemon (A Button) - Sound Effect (HD).mp3');
        audio.play().catch(error => console.error("Error playing sound:", error));
    }
};
