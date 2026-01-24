import { useState } from 'react';

import './App.css';

import { WeatherGrid } from './page/WeatherGrid';

function App() {
  const [resultSize, setResultSize] = useState(16);

  return (
    <div className="App">
      <header className="App-header">
        Weather app
      </header>
      <div>
        Results per page
        <select onChange={(e) => setResultSize(Number.parseInt(e.target.value))}>
          <option value={16} selected>16</option>
          <option value={32}>32</option>
        </select>
      </div>
      <WeatherGrid resultSize={resultSize} />
    </div>
  );
}

export default App;
