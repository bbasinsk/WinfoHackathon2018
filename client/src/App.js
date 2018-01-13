import React, { Component } from 'react';

import './App.css';
import Plot from './components/Plot';
import Header from './components/Header';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Plot />
      </div>
    );
  }
}
