import { useState } from 'react';
import './App.css';
import { convertToRoman } from './converter/converter';

function App() {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const romanResult = convertToRoman(inputText);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Arabic to roman numeral converter.</h2>

        <input value={inputText} onChange={handleChange} />

        <p>Result: {romanResult}</p>
      </header>
    </div>
  );
}

export default App;
