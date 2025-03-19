import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Dictaphone = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (isListening && !listening) {
      // Restart listening if it stops unexpectedly
      SpeechRecognition.startListening({ continuous: true, interimResults: true });
    }
  }, [listening, isListening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => { 
        setIsListening(true); 
        SpeechRecognition.startListening({ continuous: true, interimResults: true });
      }}>
        Start
      </button>
      <button onClick={() => { 
        setIsListening(false);
        SpeechRecognition.stopListening();
      }}>
        Stop
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
