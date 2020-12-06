import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

class App extends Component {
  render() {
    const { bgColor, desc, children } = this.props;
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
