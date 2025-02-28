 import React, { useContext, useRef } from 'react'
 import Card from './Card';
 import { assets } from '../../../assets/assets';
 import "./Content.css"
 import { GeminiStore } from '../store/Store';
 import Output from './Output';

 const Content = () => {


 const showpara = useContext(GeminiStore).showpara;
 
 const setUserInput = useContext(GeminiStore).setUserInput;
 const userInput = useContext(GeminiStore).userInput;
 const onsent = useContext(GeminiStore).onsent;






  const data = [{para: "Suggest beautiful places to see on an upcoming trip." , img : assets.compass_icon
  }, {para: "Briefly summerize the concept :Time travelling" ,img:assets.bulb_icon},{para: "Suggest some good surprises for my friend's birthday",img:assets.message_icon},{para: " Help me to improve readeability of the code",img:assets.code_icon}];

   return (
    <div className="content"> 
    
{    showpara ? <Output></Output> :<div className='suggestion'>
    <Card data={data}></Card>
   </div>}
   <div className="input">
    <input type="text" name="" id="" placeholder="Enter prmopt here..."  onChange={(e)=>setUserInput(e.target.value)} value={userInput}/>
    <div className='inputIcons'><img src={assets.gallery_icon} alt="" />
    <img src={assets.mic_icon} alt="" />
    <img src={assets.send_icon} alt=""  onClick={()=>onsent()}/></div>

    
   </div>

  
   </div>
   )
 }
 
 export default Content;