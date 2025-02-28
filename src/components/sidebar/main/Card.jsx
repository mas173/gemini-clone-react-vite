import React, { useContext } from 'react'
import "./Card.css"
import { assets } from '../../../assets/assets'
import { GeminiStore } from '../store/Store'





const Card = ({data}) => {
const setUserInput = useContext(GeminiStore).setUserInput;
const onsent = useContext(GeminiStore).onsent;
const ONcardcall = useContext(GeminiStore).ONcardcall;



  // console.log(data);
  return (
    <>
      {data.map((data)=><div key={data.img} className='card' onClick={()=>{  
  console.log(data)

  ONcardcall(`${data.para} , first print the prompt in in first line and then after ":" answer the question from next line`);

      }}>
      <p>{data.para}</p>
      <img src={data.img} alt="" />
    </div>)}
    </>
  )
}

export default Card;