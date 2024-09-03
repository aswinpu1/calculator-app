import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState(''); // state to hold the input value

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to handle the "C" (clear) button
  const handleClear = () => {
    setInput('');
  };

  // Function to handle the "DEL" (delete) button
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  // Function to handle the "=" (equals) button
  const handleEquals = () => {
    try {
      setInput(eval(input).toString()); // Evaluate the expression
    } catch (error) {
      setInput('Error'); // Handle any errors in the evaluation
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" id="result" value={input} disabled />
      </div>
      <div className="buttons">
        <button className="btn clear" onClick={handleClear}>
          C
        </button>
        <button className="btn clear" onClick={handleDelete}>
          DEL
        </button>
        <button className="btn" onClick={() => handleClick('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleClick('8')}>
          8
        </button>
        <button className="btn" onClick={() => handleClick('9')}>
          9
        </button>
        <button className="btn operator" onClick={() => handleClick('/')}>
          /
        </button>

        <button className="btn" onClick={() => handleClick('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleClick('5')}>
          5
        </button>
        <button className="btn" onClick={() => handleClick('6')}>
          6
        </button>
        <button className="btn operator" onClick={() => handleClick('*')}>
          *
        </button>

        <button className="btn" onClick={() => handleClick('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleClick('2')}>
          2
        </button>
        <button className="btn" onClick={() => handleClick('3')}>
          3
        </button>
        <button className="btn operator" onClick={() => handleClick('-')}>
          -
        </button>

        <button className="btn" onClick={() => handleClick('0')}>
          0
        </button>
        <button className="btn" onClick={() => handleClick('.')}>
          .
        </button>
        <button className="btn" onClick={handleEquals}>
          =
        </button>
        <button className="btn operator" onClick={() => handleClick('+')}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
