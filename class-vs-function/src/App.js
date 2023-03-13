import React, { useState } from 'react';
import './App.css';

export class AppClass extends React.Component {
  constructor () {
    super();
    this.state = { count: 0, started: false };
  }

  onButtonClick () {
    if (!this.state.started) {
      setTimeout(() => alert(`Your score IS ${this.state.count}!`), 1000);
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

export const AppFn = () => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  function increment() {
    setCount(count + 1);
  }

  function start() {
    if (!started) {
      setTimeout(() => alert(`Your score WAS ${count}!`), 1000);
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
