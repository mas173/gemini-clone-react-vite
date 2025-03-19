 import React, { useContext, useRef } from 'react'
 import Card from './Card';
 import { assets } from '../../../assets/assets';
 import "./Content.css"
 import { GeminiStore } from '../store/Store';
 import Output from './Output';
 import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useState } from 'react';
import { useEffect } from 'react';
 const Content = () => {


 const showpara = useContext(GeminiStore).showpara;
   const [isListening, setIsListening] = useState(false);
 const setUserInput = useContext(GeminiStore).setUserInput;
 const userInput = useContext(GeminiStore).userInput;
 const onsent = useContext(GeminiStore).onsent;

 const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
   useSpeechRecognition();

 useEffect(() => {
  setUserInput(transcript);
 }, [transcript]); // Update state whenever transcript changes

 if (!browserSupportsSpeechRecognition) {
   return <span>Browser doesn't support speech recognition.</span>;
 }




  const data = [{para: "Suggest beautiful places to see on an upcoming trip." , img : assets.compass_icon
  }, {para: "Briefly summerize the concept :Time travelling" ,img:assets.bulb_icon},{para: "Suggest some good surprises for my friend's birthday",img:assets.message_icon},{para: " Help me to improve readeability of the code",img:assets.code_icon}];

   return (
    <div className="content"> 
    
{    showpara ? <Output></Output> :<div className='suggestion'>
    <Card data={data}></Card>
   </div>}
   <div className="input">
    <input type="text" name="" id="" placeholder="Enter prompt here..."  onChange={(e)=>setUserInput(e.target.value)} value={userInput}/>
    <div className='inputIcons'><img src={assets.gallery_icon} alt="" />
    <img src={assets.mic_icon} alt=""  onClick={() => { 
        setIsListening(true); 
        SpeechRecognition.startListening({ continuous: true, interimResults: true });
      }}/>
    <img src={assets.send_icon} alt=""  onClick={()=>{
      SpeechRecognition.stopListening();
    
      setIsListening(false);
      onsent()
      resetTranscript()}
      }/></div>

    
   </div>

  
   </div>
   )
   console.log(transcript);
 }
 
 export default Content;