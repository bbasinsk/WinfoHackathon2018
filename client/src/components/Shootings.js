/* global Plotly */ 
import React, { Component } from 'react';

export default class Shootings extends Component {

    componentDidMount() {
        var data = [{
            type:'scattermapbox',
            lat:['45.5017'],
            lon:['-73.5673'],
            mode:'markers',
            marker: {
              size:14
            },
            text:['Montreal']
          }]
          
          var layout = {
            autosize: true,
            hovermode:'closest',
            mapbox: {
              bearing:0,
              center: {
                lat:45,
                lon:-73
              },
              pitch:0,
              zoom:5
            },
          }
          
          Plotly.setPlotConfig({
            mapboxAccessToken: 'pk.eyJ1IjoiYmJhc2luc2siLCJhIjoiY2pjZHcxbnJ4MGp0czJxdDlmMWN1ZnMxZyJ9.xJBRfXzvzU0zI0v3LyDhUA'
          })
          
          Plotly.plot('myDiv', data, layout)
    }

    render() {
        return(
            <div id="myDiv"></div>
        );
    }
    
}

