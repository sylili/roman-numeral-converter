import { useState } from 'react';
import './App.css';
import { convertToRoman, convertToArabic } from './converter/converter';

function App() {
  const [inputTextInArabic, setInputTextInArabic] = useState('');
  const [inputTextInRoman, setInputTextInRoman] = useState('');

  const handleChangeInArabic = (event) => {
    setInputTextInArabic(event.target.value);
  };

  const handleChangeInRoman = (event) => {
    setInputTextInRoman(event.target.value);
  };

  const romanResult = convertToRoman(inputTextInArabic);
  const arabicResult = convertToArabic(inputTextInRoman);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Arabic to roman numeral converter</h2>

        <input value={inputTextInArabic} onChange={handleChangeInArabic} />

        <p>{romanResult || 'Enter a number!'}</p>

        <h2>Roman to arabic numeral converter</h2>

        <input value={inputTextInRoman} onChange={handleChangeInRoman} />

        <p>{arabicResult || 'Enter a number!'}</p>
      </header>
    </div>
  );
}

export default App;
