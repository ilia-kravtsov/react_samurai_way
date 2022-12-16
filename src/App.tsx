import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
      </ul>
    </div>
  );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Messages</a>
        </div>
    )
}
export default App;
