import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleDigitClick = (digit) => {
    if (result === "0") {
      setResult(digit.toString());
    } else {
      setResult(result.toString() + digit.toString());
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(result);
    setResult("0");
  };

  const handleClearClick = () => {
    setResult("0");
    setOperator(null);
    setPreviousValue(null);
  };

  const handleEqualClick = () => {
    if (operator === "+") {
      setResult((parseFloat(previousValue) + parseFloat(result)).toString());
    } else if (operator === "-") {
      setResult((parseFloat(previousValue) - parseFloat(result)).toString());
    } else if (operator === "*") {
      setResult((parseFloat(previousValue) * parseFloat(result)).toString());
    } else if (operator === "/") {
      setResult((parseFloat(previousValue) / parseFloat(result)).toString());
    }
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="keypad">
        <button className="operator" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        <button className="operator" onClick={() => handleOperatorClick("-")}>
          -
        </button>
        <button className="operator" onClick={() => handleOperatorClick("*")}>
          *
        </button>
        <button className="operator" onClick={() => handleOperatorClick("/")}>
          /
        </button>
        <button onClick={() => handleDigitClick(7)}>7</button>
        <button onClick={() => handleDigitClick(8)}>8</button>
        <button onClick={() => handleDigitClick(9)}>9</button>
        <button onClick={() => handleDigitClick(4)}>4</button>
        <button onClick={() => handleDigitClick(5)}>5</button>
        <button onClick={() => handleDigitClick(6)}>6</button>
        <button onClick={() => handleDigitClick(1)}>1</button>
        <button onClick={() => handleDigitClick(2)}>2</button>
        <button onClick={() => handleDigitClick(3)}>3</button>
        <button onClick={() => handleDigitClick(0)}>0</button>
        <button className="clear" onClick={handleClearClick}>
          C
        </button>
        <button className="equal" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
