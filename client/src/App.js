import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Customers from './components/customers/customers';
import Home from './components/home/home';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Home />
        <Customers />
      </div>
    );
  }
};

export default App;
