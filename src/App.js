import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/header';
import Content from './Components/content';
import Footer from './Components/footer';

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
