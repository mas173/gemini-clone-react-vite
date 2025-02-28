import React, { useContext } from "react";
import "./Output.css";
import { GeminiStore } from "../store/Store";
import { assets } from "../../../assets/assets";
import Loading from "./Loading";


const Output = () => {
  const loading = useContext(GeminiStore).loading;
  const userInput = useContext(GeminiStore).userInput;
  const Output = useContext(GeminiStore).Output;
  const recentpropmt = useContext(GeminiStore).recentpropmt;
  return (
  <div className="output">
      <div className="outputTitle">
        <img src={assets.user_icon} alt="" />
        <p>{recentpropmt}</p>
      </div>
    <div className="outputPara">
   <img src={assets.gemini_icon} alt="" />
   {loading && 
   <Loading></Loading>}
 <p className="outputpara" dangerouslySetInnerHTML={{__html:Output}}></p>
 </div>
    </div>
  );
};

export default Output;
