import React from 'react';
import logo from '../images/logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p classNam e="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;