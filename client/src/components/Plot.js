/* global Plotly */
// Plot.js
import React, { Component } from 'react';

export default class Plot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xData: [.66, .80, .38, .83],
            yData: ['white', 'black', 'hispanic', 'asian']
        };
    }
    

  componentDidMount() {
    Plotly.newPlot('plot', [{
        x: this.state.xData,
        y: this.state.yData,
        type: 'bar',
        orientation: 'h'
      }], 
    //   {
    //     margin: {
    //       t: 0, r: 0, l: 30
    //     },
    //     xaxis: {
    //       gridcolor: 'transparent'
    //     }
    //   }, {
    //     displayModeBar: false
    //   }
    );
  }

  render() {
    return (
      <div id="plot"></div>
    );
  }
}

