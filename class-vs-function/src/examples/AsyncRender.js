import React, { useState } from 'react';
import './AsyncRender.css';

class ClassExample extends React.Component {
  constructor () {
    super();
    this.state = { count: 0, started: false };
  }

  onButtonClick () {
    if (!this.state.started) {
      setTimeout(() => alert(`Your score is ${this.state.count}!`), 1000);
    }
    this.setState({ started: true, count: this.state.count + 1 })
  }

  render() {
    return (
      <button
        onClick={() => this.onButtonClick()}
      >
        {this.state.started ? "Current score: " + this.state.count : "Start"}
      </button>
    );
  }
};

const FnExample = () => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const increment = () => {
    setCount(count + 1);
  }

  const start = () => {
    if (!started) {
      setTimeout(() => alert(`Your score is ${count}!`), 1000);
    }
    setStarted(true);
  }

  return (
    <button
      onClick={() => {
        increment();
        start();
      }}
    >
      {started ? "Current score: " + count : "Start"}
    </button>
  );
}

export const AsyncRenderExample = () => (
  <>
    <div className='AppClass'>
      <h1>Class app</h1>
      <ClassExample />
    </div>
    <div className='AppFn'>
      <h1>Functional app</h1>
      <FnExample />
    </div>
  </>
);