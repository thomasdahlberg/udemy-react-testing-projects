import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {error ? <h2 data-test="error-message">Cannot decrement counter below zero</h2> : null}
      <button 
        data-test="increment-button"
        onClick={() => {
          setCount(prevCount => prevCount + 1);
          if(error) {
            setError(prevError => prevError = false);
          }
        }}
      >
        Increment Counter
      </button>
      <button 
        data-test="decrement-button"
        onClick={() => {
          setCount(prevCount =>
            prevCount 
              ? prevCount - 1 
              : prevCount
          )
          if(!count) {
            setError(prevError => prevError = true);
          }
        }}
      >
        Decrement Counter
      </button>      
    </div>
  );
}

export default App;
