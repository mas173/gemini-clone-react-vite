import React, { use, useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { GeminiStore } from "./store/Store";
const Sidebar = () => {
  const [expand, setExpand] = useState(true);
  const check = useContext(GeminiStore);
  // console.log(check)
  const previousPrompt = useContext(GeminiStore).previousPrompt;
  const setshowpara = useContext(GeminiStore).setshowpara;


  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu ">
          {" "}
          <img
            className="sideicon imgSize"
            src={assets.menu_icon}
            alt=""
            onClick={() => setExpand(!expand)}
          />
        </div>

        <div className="newChat " onClick={()=>setshowpara(false)}>
          <img className="imgSize" src={assets.plus_icon} alt="png"  />

          {expand && <p>New chat</p>}
        </div>

        <div className="recent ">{expand && <p>Recent</p>}
        {expand && previousPrompt.length > 0 && (
          previousPrompt.map((value)=>{
            return(
              <div key={`${value} ${Math.random()}`} className="recentprompt"><img className="imgSize" src={assets.message_icon} alt="" /><p>{`${value.slice(0,8)}...`}</p></div>
            )
          })
          
        )}
        </div>
      </div>

      <div className="bottom">
        <div className="help flex">
          <img className="imgSize" src={assets.question_icon} alt="" />

          {expand && <p>Help</p>}
        </div>

        <div className="activty flex ">
          <img className="imgSize" src={assets.history_icon} alt="" />
          {expand && <p>Activity</p>}
        </div>

        <div className="setting flex">
          <img className="imgSize" src={assets.setting_icon} alt="" />
          {expand && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
