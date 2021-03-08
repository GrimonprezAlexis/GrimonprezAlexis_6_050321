import React, { Component } from 'react';
import './App.scss';

import Customers from './components/customers/customers';
import Home from './components/home/Home';

class App extends Component {
  render(){
    return (
      <div>
        <Home />
      </div>
    );
  }
};

export default App;
