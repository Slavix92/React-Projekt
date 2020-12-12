import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    const { bgColor, desc, children } = this.props;
    return (
      <div className="App">
        <Header />
        <Content />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
