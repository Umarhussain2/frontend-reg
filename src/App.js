import React, { Component } from 'react';
import logo from '../src/logo.svg';
import './App.css';
import Form from '../src/form.js';



class App extends Component {
  render() {
    return (

      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Form Validation Demo</h2>
        </div>
        <Form />
       
      </div>
    );
  }
}

export default App;