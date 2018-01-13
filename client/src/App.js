import React, { Component } from 'react';

import './App.css';
import Plot from './components/Plot';
import Header from './components/Header';
import Shootings from './components/Shootings';
import Main from './components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main'
    }
  }

  setPage(newPage) {
    this.setState({page: newPage});
  }


  render() {
    let Content = '';
    switch (this.state.page) {
      case 'plot':
        Content = Plot;
        break;
      case 'map':
        Content = Shootings;
        break;
      default:
        Content = Main;
        break;
    }

    return (
      <div className="App">
        <Header setPage={(newPage) => this.setPage(newPage)} />
        <Content setPage={(newPage) => this.setPage(newPage)} />
      </div>
    );
  }
}
