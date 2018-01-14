/* global Plotly */
import React, { Component } from 'react';
import './Shootings.css';
export default class Shootings extends Component {



  componentDidMount() {
    Plotly.d3.csv('https://raw.githubusercontent.com/bbasinsk/WinfoHackathon2018/master/stateRaces.csv', function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
      }

      var data = [{
        type: 'choropleth',
        showscale: false,
        locationmode: 'USA-states',
        locations: unpack(rows, 'code'),
        z: unpack(rows, 'race'),
        text: unpack(rows, 'state'),
        zmin: 0,
        zmax: 1,
        colorscale: [
          [0, 'rgb(230,230,230)'],
          [1, 'rgb(0,0,0)']
        ],
        marker: {
          line: {
            color: 'rgb(255,255,255)',
            width: 2
          }
        }
      }];

      var layout = {
        title: 'Most Common Ethnicities to be Shot by Police in Each State',
        titlefont: {
          size: 22,
          color: 'rgb(0, 0, 0)',
          family: 'Bodoni, serif',
        },
        geo: {
          scope: 'usa',
          showlakes: true,
          lakecolor: 'rgb(255,255,255)'
        },
        showlegend: false,
        hovermode: false
      };

      Plotly.plot('graphDiv', data, layout, { showLink: false, displayModeBar: false });
    });
  }

  render() {
    return (
      <div>
        <div id="graphDiv"></div>
        <div id="expla">
          <p>
            This map visualization shows racial disparities in the victims of police shootings. For each state, the most-targeted (per capita) race for police shootings is depicted; white for Caucasians, black for African American, and grey for other races (Hispanic, Native American)
          </p>

        </div>
      </div>

    );
  }

}

