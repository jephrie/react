import React, { useState } from 'react';
import './App.css';
import { AsyncRenderExample } from './examples/AsyncRender';

const getExampleComponent = (exampleName) => {
  switch(exampleName) {
    case 'async-render':
      return AsyncRenderExample;
    default:
      return null;
  }
};

export const App = () => {
  const [selectedExample, setSelectedExample] = useState();
  const ExampleComponent = getExampleComponent(selectedExample);

  if (ExampleComponent) {
    return <ExampleComponent />;
  }

  return (
    <div className='App'>
    <h1>Class componets vs function components</h1>
      <button
        onClick={() => {
          setSelectedExample('async-render');
        }}
      >
        Async render example
      </button>
    </div>
  );
};