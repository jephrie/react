// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { StateOnlyForm } from './examples/state-only';

// <img src={logo} className="App-logo" alt="logo" />

function App() {
  const [page, setPage] = useState();

  const getPageComponent = () => {
    switch (page) {
      case 'state-only':
        return StateOnlyForm;
      default:
        return ExampleSelection;
    }
  };
  const Component = getPageComponent();

  return (
    <div className="App">
      <header className="App-header">
        <Component onClick={setPage} />
      </header>
    </div>
  );
}

const ExampleSelection = ({
  onClick,
}) => {
  return (
    <div>
      <p>Select an example below</p>
      <button onClick={() => onClick('state-only')}>State only form</button>
    </div>
  );
};

export default App;
