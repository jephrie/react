import React, { useState } from 'react';
import './App.css';
import { ParentRenders } from './examples/rule-one';
import { MemoComponents } from './examples/rule-two';

function App() {
  const [page, setPage] = useState();

  const getPageComponent = () => {
    switch (page) {
      case 'parent-renders':
        return ParentRenders;
      case 'memo-components':
        return MemoComponents;
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
      <div>
        <button onClick={() => onClick('parent-renders')}>Beware: parent component renders</button>
      </div>
      <div>
        <button onClick={() => onClick('memo-components')}>Memoize components</button>
      </div>
    </div>
  );
};

export default App;
