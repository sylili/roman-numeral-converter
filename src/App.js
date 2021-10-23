import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Arabic to roman numeral converter.</p>
        <input value={inputText} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
