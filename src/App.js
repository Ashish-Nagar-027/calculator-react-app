import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputValue] = useState("");
  const [result, setResult] = useState('0')

  const changeInputValueFunctions = () => {};
  const signs = [ '+', '-', '*', '/' ]

  const handleClick = (e) => {
    if (e.target.value === "clear") {
      setInputValue("");
      return;
    }
    if (e.target.value === "Del") {
      setInputValue(inputVal.slice(0,-1));
      return;
    }
    console.log()
    if(signs.includes(inputVal.charAt(inputVal.length-1)) && signs.includes(e.target.value)) {
      return
    }
    setInputValue(inputVal.concat(e.target.value));
  };

  useEffect(() => { 
    if(inputVal.charAt(inputVal.length-1) !== '+' &&
    inputVal.charAt(inputVal.length-1) !== '-'  &&
    inputVal.charAt(inputVal.length-1) !== '/' &&
    inputVal.charAt(inputVal.length-1) !== '*' ) {
    const str = inputVal.replace(/[^-()\d/*+.]/g, '');
    setResult(eval(str))
    }


  }, [inputVal]);

  return (
    <div className="App">
      <h2>Calculator React.js</h2>
      <div className="calculator">
        <div className="form">
          <input
            type="text"
            placeholder="0"
            value={inputVal}
            onChange={changeInputValueFunctions}
          />
          {
            result  && (<div className="result" align='start'>  {result}</div>)
          }
        </div>
        <div className="keyboard">
          <button value='1' onClick={handleClick}>1</button>
          <button value='2' onClick={handleClick}>2</button>
          <button value='3' onClick={handleClick}>3</button>
          <button value='-' onClick={handleClick}>-</button>
          <button value='4' onClick={handleClick}>4</button>
          <button value='5' onClick={handleClick}>5</button>
          <button value='6' onClick={handleClick}>6</button>
          <button value='+' onClick={handleClick}>+</button>
          <button  value='7'onClick={handleClick}>7</button>
          <button value='8' onClick={handleClick}>8</button>
          <button value='9' onClick={handleClick}>8</button>
          <button value='*' onClick={handleClick}>x</button>
          <button value='0' onClick={handleClick}>0</button>
          <button value='clear' onClick={handleClick} className="grid-2">
            clear
          </button>
          <button value='Del' onClick={handleClick}>Del</button>
          <button value='/' onClick={handleClick}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
