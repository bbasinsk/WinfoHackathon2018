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

  componentDidMount() {
    disappear();
    setTimeout(appear, 11500);
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
        <div className="cont">
          <Content setPage={(newPage) => this.setPage(newPage)} />
        </div>
      </div>
    );
  }
}

function disappear() {
  var el = document.getElementsByClassName("cont")[0];
  el.style.display = 'none';
  el.disappear;
}

function appear() {
  var el = document.getElementsByClassName("cont")[0];
  el.style.opacity = 0;
  el.style.display = 'block';
  var opac = 0;
  var inter = setInterval(frame, 50);
  function frame() {
      if (opac > 1) {
          clearInterval(inter);
      } else {
          opac = opac + 0.03;
          el.style.opacity = opac;
      }
  }
}
