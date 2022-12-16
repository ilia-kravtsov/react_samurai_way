import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#" target={'_blank'}>Home</a>
            <a href="#" target={'_blank'}>News</a>
            <a href="#" target={'_blank'}>Messages</a>
        </div>
    )
}

const Technologies = () => {
    return (
        <ul>
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
        </ul>
    )
}
export default App;
