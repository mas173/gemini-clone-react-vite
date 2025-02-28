import React, { createContext, useState } from "react";
import axios from "axios";

export const GeminiStore = createContext({
  ApiCall: () => {},
  setvalues: () => {},
  setPrompt: () => {},
  OnCall: () => {},
});

const GeminiStoreData = ({ children }) => {
  const [userInput, setUserInput] = useState("");
  const [recentpropmt, Setrecentprompt] = useState("");
  const [previousPrompt, SetPreviousPrompt] = useState([""]);
  const [showpara, setshowpara] = useState(false);
  const [loading, Setloading] = useState(false);
  const [Output, Setoutput] = useState("");

  // console.log(userInput);

  const ApiCall = async (value) => {
    // console.log("loading...");
    
    let response = await axios({
    
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${"AIzaSyBG0gTpcc3xJyenKUetu3CwdYpmEuizLWk"}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: value }],
          },
        ],
      },
    });

    // console.log(response);
    const ResponesVal =
      response["data"]["candidates"][0]["content"]["parts"][0]["text"];
    // console.log(ResponesVal);
    return ResponesVal;
  };

  const delayword = (index, nextword) => {
    setTimeout(function () {
      Setoutput((prev) => prev + nextword);
    }, 75 * index);
  };

  const onsent = async () => {
    Setoutput("");
    Setloading(true);
    setshowpara(true);
    Setrecentprompt(userInput);
    SetPreviousPrompt(prev => [userInput,...prev]);
    // console.log(previousPrompt);
    const response = await ApiCall(userInput);
    let responseArray = response.split("**");
    let NewArray = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        NewArray += responseArray[i];
      } else {
        NewArray += "<b>" + responseArray[i] + "</b>";
      }
    }

    let NewArray2 = NewArray.split("*").join("</br>");
    let newResponseArray = NewArray2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextword = newResponseArray[i];
      delayword(i, nextword + " ");
    }

    Setloading(false);
    setUserInput("");
  };

  const ONcardcall = async (value) => {
    Setoutput("");
    Setloading(true);
    setshowpara(true);
    Setrecentprompt(userInput);
    const response = await ApiCall(value);
    let responseArray = response.split("**");
    let NewArray = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        NewArray += responseArray[i];
      } else {
        NewArray += "<b>" + responseArray[i] + "</b>";
      }
    }

    let NewArray2 = NewArray.split("*").join("</br>");
    let newResponseArray = NewArray2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextword = newResponseArray[i];
      delayword(i, nextword + " ");
    }
    Setloading(false);
    setUserInput("");
  };

  return (
    <GeminiStore.Provider
      value={{
        ApiCall,
        Output,
        showpara,
        setshowpara,
        setUserInput,
        userInput,
        onsent,
        recentpropmt,
        loading,
        ONcardcall,
        previousPrompt
      }}
    >
      {children}
    </GeminiStore.Provider>
  );
};

export default GeminiStoreData;
