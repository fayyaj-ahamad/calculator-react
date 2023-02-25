import React from "react";
import { useState } from "react";
import "./css/calculator.css";
const Calculator = () => {
  const [data, setData] = useState("");

  const buttonDataHandler = (e) => {
      try{
        const getData = e.target.getAttribute("value");

    if(getData === "."  && data <= "." ) return
    if(getData === "0"  && data <= "0" ) return
    setData(data + e.target.value);
      }catch(error){
        setData("Error");
      }
  };

  const addButton = () => {
    try{
    setData(eval(data).toString());
    }catch(error){
      setData("Error");
    }
  };

  const clearData = () => {
    setData("");
  };

  const cancelData = () => {
    setData(data.slice(0, -1));
  };

  return (
    <>
      <div className="container">
        <div className="calc">
          <input type="text" value={data}/>
        </div>
        <div className="calc-btn">
          <button className="action btn-eqval" onClick={clearData}>
            AC
          </button>
          <button className="action" onClick={cancelData}>
            C
          </button>
          <button className="action" onClick={buttonDataHandler} value="/">
            &divide;
          </button>
          <br />
          <button onClick={buttonDataHandler} value="7">
            7
          </button>
          <button onClick={buttonDataHandler} value="8">
            8
          </button>
          <button onClick={buttonDataHandler} value="9">
            9
          </button>
          <button className="action" onClick={buttonDataHandler} value="*">
            &times;
          </button>
          <br />
          <button onClick={buttonDataHandler} value="6">
            6
          </button>
          <button onClick={buttonDataHandler} value="5">
            5
          </button>
          <button onClick={buttonDataHandler} value="4">
            4
          </button>
          <button className="action" onClick={buttonDataHandler} value="-">
            &minus;
          </button>
          <br />
          <button onClick={buttonDataHandler} value="1">
            1
          </button>
          <button onClick={buttonDataHandler} value="2">
            2
          </button>
          <button onClick={buttonDataHandler} value="3">
            3
          </button>
          <button className="action" onClick={buttonDataHandler} value="&#43;">
            &#43;
          </button>
          <br />
          <button onClick={buttonDataHandler} value="0">
            0
          </button>
          <button onClick={buttonDataHandler} value=".">
            .
          </button>
          <button className="btn-eqval action" onClick={addButton}>
            &#61;
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
