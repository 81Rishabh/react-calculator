import React, { useState } from "react";
import "./App.css";
import {Evaluation} from './helper/evaluation';

function App() {
  const [value, setvalue] = useState("");
  const [expression, setexpression] = useState("");
  const [ans , setans] = useState(0);
  const leftKeys = [
    "AC",
    "+/-",
    "%",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
  ];
  const rightKeys = ["*", "/", "-", "+", "="];
  let exp = "";
 
  function AddExpression(key) {
   
    // clear input
    if(key == 'AC') {
      setvalue("");
      setexpression("");
      setans(0);
      return;
    }

    exp += key;

    //  set Expression to dom evaluation box
    setexpression(function(prev) {
      let prevSign = prev.charAt(prev.length - 1);
      let len = prev.length;
      if (
        prevSign == "+" ||
        prevSign == "-" ||
        prevSign == "*" ||
        prevSign == "/"
      ) {
        if (key.charCodeAt(0) >= 48 && key.charCodeAt(0) <= 97) {
          return prev + exp;
        }
        return prev.slice(0, len - 1) + exp;
      }
      return prev + exp;
    });

    setvalue(expression);
  }


  function Evaluate() {
    var ans =  eval(expression);
    setans(ans);
    setvalue("");
    exp = "";
  }


  return (
    <div className="container">
    <div className="cal-input-container">
        {
          ans ? (
             <>
             <span className="result">{ans}</span>
             </>
          ) : (
            <>
               <input type="text" onChange={(e) => { setvalue(e.target.value);  setexpression(e.target.value)}}  value={expression || value} />
            </>
          )
        }
      </div>
      <div className="cal-key-container">
        <div className="cal-left-key">
          {leftKeys.map((key, idx) => {
            if (key === "0") {
              return (
                <div
                  className="cal-key-btn-dark key-zero"
                  key={idx}
                  onClick={() => AddExpression(key)}
                >
                  {key}
                </div>
              );
            } else {
              return (
                <div
                  className="cal-key-btn-dark"
                  key={idx}
                  onClick={() => AddExpression(key)}
                >
                  {key}
                </div>
              );
            }
          })}
        </div>
        <div className="cal-right-key">
          {rightKeys.map((key, idx) => {
            if (key === "=") {
              return (
                <div
                  className="cal-key-btn-dark key-zero"
                  key={idx}
                  onClick={Evaluate}
                >
                  {key}
                </div>
              );
            } else {
              return (
                <div
                  className="cal-key-btn-dark"
                  key={idx}
                  onClick={() => AddExpression(key)}
                >
                  {key}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
