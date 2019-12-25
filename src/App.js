import React, { Component } from 'react';
import Header from './Component/Header'
import './App.css';
import AppProvider from './Context/AppProvider'
import Home from './Component/Home'

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <Header />
          <Home />
        </div>
      </AppProvider>
    );
  }
}

export default App;
