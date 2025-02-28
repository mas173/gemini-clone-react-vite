import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import './Heading.css'
import { GeminiStore } from '../store/Store'

const Heading = () => {

  const showpara = useContext(GeminiStore).showpara;
  
  return (
    <div className='heading'>
      <div className='topheading'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
{
    !showpara && <div className="centerheading">

    <div> <p className='hello'>Hello, Dev.</p> <p className='headinghelp'>How can i help you today ?</p></div>
    </div>}




    </div>
  )
}

export default Heading;