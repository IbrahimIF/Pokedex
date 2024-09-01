
export const playButtonSound = () => {
    const audio = new Audio('/Sounds/Pokemon (A Button) - Sound Effect (HD).mp3');
    audio.play().catch(error => console.error("Error playing sound:", error));
};