/* global Plotly */
import React, { Component } from 'react';

export default class Shootings extends Component {

  componentDidMount() {
    Plotly.d3.csv('https://raw.githubusercontent.com/bcdunbar/datasets/master/meteorites_subset.csv', function (err, rows) {

      var classArray = unpack(rows, 'class');
      var classes = [...new Set(classArray)];

      function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
      }

      var data = classes.map(function (classes) {
        var rowsFiltered = rows.filter(function (row) {
          return (row.class === classes);
        });
        return {
          type: 'scattermapbox',
          name: classes,
          lat: unpack(rowsFiltered, 'reclat'),
          lon: unpack(rowsFiltered, 'reclong')
        };
      });

      var layout = {
        title: 'Meteorite Landing Locations',
        font: {
          color: 'white'
        },
        dragmode: 'zoom',
        mapbox: {
          center: {
            lat: 38.03697222,
            lon: -90.70916722
          },
          domain: {
            x: [0, 1],
            y: [0, 1]
          },
          style: 'dark',
          zoom: 1
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
          text: 'Source: NASA',
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

