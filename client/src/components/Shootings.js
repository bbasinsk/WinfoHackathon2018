/* global Plotly */
import React, { Component } from 'react';

export default class Shootings extends Component {

  componentDidMount() {
    Plotly.d3.csv('https://raw.githubusercontent.com/fivethirtyeight/data/master/police-killings/police_killings.csv', function (err, rows) {

      var raceArray = unpack(rows, 'raceethnicity');
      var races = [...new Set(raceArray)];

      function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
      }

      var data = races.map(function (races) {
        var rowsFiltered = rows.filter(function (row) {
          return (row.raceethnicity === races);
        });
        return {
          type: 'scattermapbox',
          name: races,
          lat: unpack(rowsFiltered, 'latitude'),
          lon: unpack(rowsFiltered, 'longitude'),
        };
      });

      var layout = {
        title: 'Fatal Police Shootings',
        font: {
          color: 'white'
        },
        dragmode: 'zoom',
        mapbox: {
          center: {
            lat: 40,
            lon: -100
          },
          domain: {
            x: [0, 1],
            y: [0, 1]
          },
          style: 'dark',
          zoom: 2.5
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#191A1A',
        plot_bgcolor: '#191A1A',
        showlegend: true,
        annotations: [{
          x: 0,
          y: 0,
          xref: 'paper',
          yref: 'paper',
          text: 'Source: fivethirtyeight',
          showarrow: false
        }]
      };

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiYmJhc2luc2siLCJhIjoiY2pjZHcxbnJ4MGp0czJxdDlmMWN1ZnMxZyJ9.xJBRfXzvzU0zI0v3LyDhUA'
      });

      Plotly.plot('graphDiv', data, layout);
    });
  }

  render() {
    return (
      <div id="graphDiv"></div>
    );
  }

}

