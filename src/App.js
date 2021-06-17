import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import {Message} from './Message.js';
export default function App() {
  let [count, setCount] = useState(2);
  let [isMorning, setMorning] = useState(false);

  // setCount(2);
  return (
    <div className={`box ${isMorning ? 'dayLight':''}`}>
       <h1>Day Time = {isMorning ? 'Morning' : 'Night'}</h1>
    
      <Message counter={count}/>
     <button onClick= {() =>setCount(++count)}>Update counter</button>
     <button onClick= {() =>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

