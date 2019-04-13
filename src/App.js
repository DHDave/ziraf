import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Navigation from './component/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Navigation />
        </HashRouter>
      </div>
    );
  }
}

export default App;