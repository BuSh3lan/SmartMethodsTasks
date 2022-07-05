import React from 'react';
import SpeechRecognition, { useSpeechRecognition} from 'react-speech-recognition';
import './App.css';

function App() {
  const {transcript, listening, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
  const startLeistening = () =>{ SpeechRecognition.startListening({continuous : true, language: "ar-SA"});}
const stopListening =() => {SpeechRecognition.stopListening();}
const reset = () => {resetTranscript();}
if(!browserSupportsSpeechRecognition)
{return <span> SpeechRecognition is not supported</span>}

  return (
    <div className="App">
  <button onClick={() => listening ? stopListening() :startLeistening() }>

    {listening ? 'Stop leistening' : 'Start leistening'}
  </button>
  <button onClick={()=> {reset()}}>Reset</button>
  <p>{transcript}</p>
    </div>
  );
}

export default App;
