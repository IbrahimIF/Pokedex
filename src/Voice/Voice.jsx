import React, { useState } from 'react';
import './Voice.css'

function ElevenLabsTTS({ descriptionText }) {

  const playHelloWorld = async () => {

    if (!descriptionText) {
        console.warn("No description text provided.");
        return;
      }

    const apiKey = 'sk_a6665a4dde6afb8c036b3fbf353076cf8411773ffa660dd3';
    const voiceId = 'to6VuvBuOdCU9DZoIzdr';

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
      body: JSON.stringify({
        text: descriptionText,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5,
        },
      }),
    });

    if (!response.ok) {
      console.error('Failed to generate speech');
      return;
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="voice-container">
      <button onClick={playHelloWorld} className="button">
      </button>
      <div className="buttonBellow"></div>
    </div>
  );
}


export default ElevenLabsTTS;