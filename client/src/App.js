import React, { Component } from 'react';
import './App.scss';

import Customers from './components/customers/customers';
import Home from './components/home/home';

class App extends Component {
  render(){
    return (
      <div>
        <Home />
        <Customers />
      </div>
    );
  }
};

export default App;
