import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Message } from './Message';
import './App.css';

export default function App(){
  let [count , setCount] = useState(5);
  let [isMorning , setMorning] = useState(true)

  return (
    <div class={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />

      <button onClick={() => setCount(count + 5)}>update count</button>
      <button onClick={() => setMorning(!isMorning)}>Update day</button>

    </div>

  );
}
