/* global Plotly */
import React, { Component } from 'react';

export default class Shootings extends Component {

  

componentDidMount() {
  Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

    function log(rows, key) {
      console.log(unpack(rows, key));
    }

    let states = {
      Alaska: .5,
      Alabama: 1,
      Arkansas: 0,
      Arizona: 0,
      California: 1,
      Colorado: 1,
      Connecticut: 0,
      DC: 1,
      Delaware: 0,
      Florida: 1,
      Georgia: 1,
      Hawaii: .5,
      IA: 0,
      Idaho: 0,
      Illinois: 1,
      Indiana: 1,
      Kansas: .5,
      Kentucky: 1,
      Louisiana: 1,
      Massachusetts: 0,
      Maryland: 1,
      Maine: 0,
      Michigan: 0,
      Minnesota: 1,
      Missouri: 1,
      Mississippi: 0,
      Montana: 1,
      'North Carolina': 1,
      NE: 1,
      NH: 0,
      NJ: 1,
      NM: 0,
      NV: .5,
      NY: 1,
      OH: 1,
      OK: 1,
      OR: 0,
      PA: 1,
      SC: 1,
      TN: 1,
      TX: .5,
      UT: 0,
      VA: 1,
      WA: 1,
      WI: 0,
      WV: 0,
      WY: 0
    };

    var data = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: Object.keys(states),
      z: Object.values(states),
      text: unpack(rows, 'state'),
      zmin: 0,
      zmax: 1,
      colorscale: [
        [0, 'rgb(255,255,255)'], 
        // [0, 'rgb(242,240,247)'], 
        [1, 'rgb(0,0,0)']
      ],
      colorbar: {
        title: 'Millions USD',
        thickness: 0.2
      },
      marker: {
        line: {
          color: 'rgb(255,255,255)',
          width: 2
        }
      }
    }];


    var layout = {
      title: 'States Where Blacks are More Likely to be Shot by Police',
      geo: {
        scope: 'usa',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)'
      }
    };

    Plotly.plot('graphDiv', data, layout, { showLink: false });
  });
}

render() {
  return (
    <div id="graphDiv"></div>
  );
}

}

