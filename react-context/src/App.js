// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { StateOnlyForm } from './examples/state-only';
import { MegaContextForm } from './examples/mega-context';
import { SplitContextForm } from './examples/split-context';
import { RepeatContextCaveat } from './examples/repeat-context-caveat';
import { SplitContextByMutatorsCaveatForm } from './examples/split-context-by-mutators-caveat';

// <img src={logo} className="App-logo" alt="logo" />

function App() {
  const [page, setPage] = useState();

  const getPageComponent = () => {
    switch (page) {
      case 'state-only':
        return StateOnlyForm;
      case 'mega-context':
        return MegaContextForm;
      case 'repeat-context-caveat':
        return RepeatContextCaveat;
      case 'split-context-by-mutators-caveat':
        return SplitContextByMutatorsCaveatForm;
      case 'split-context':
        return SplitContextForm;
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
    }}>
      <p>Select an example below</p>
      <button onClick={() => onClick('state-only')}>State only form</button>
      <button onClick={() => onClick('mega-context')}>Mega context form</button>
      <button onClick={() => onClick('repeat-context-caveat')}>Repeat context caveat form</button>
      <button onClick={() => onClick('split-context-by-mutators-caveat')}>Split context by mutators caveat form</button>
      <button onClick={() => onClick('split-context')}>Split context form</button>
    </div>
  );
};

export default App;
