/* global Plotly */
// Plot.js
import './Plot.css';
import React, { Component } from 'react';

export default class Plot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xData: this.getData('All Ages'),
            yData: ['White', 'Asian', 'Hispanic', 'Black'],
            title: 'Likelihood of Search When Stopped: All Ages'
        };
    }

    componentDidMount() {
       this.componentDidUpdate();
    }

    componentDidUpdate() {
        let layout = {
            autosize: true,
            title: this.state.title,
            titlefont: {
                size: 22,
                color: 'rgb(0, 0, 0)',
                family: 'Bodoni, serif',
              },
            margin: {
              t: 50, r: 0, l: 100
            },
            xaxis: {
                tickformat: ',.0%',
                range: [0,.11],
                title: '% of stops that resulted in searches',
                titlefont: {
                    size: 16,
                    color: 'rgb(0, 0, 0)',
                    family: 'Bodoni, serif',
                  }
              }
          };

        Plotly.newPlot('plot', [{
            x: this.state.xData,
            y: this.state.yData,
            type: 'bar',
            orientation: 'h',
            marker: {
                color: 'rgb(0,0,0)'
            }
        }], layout, {
                displayModeBar: false
              }
        );
    }

    setData(age) {
        this.setState({xData: this.getData(age)});
        this.setState({title: 'Likelihood of search when stopped: ' + age});
    }

    getData(age) {
        // ['Other', 'White', 'Hispanic', 'Black', 'Asian']
        switch (age) {
            case '14-24':
                return [.0384, .0341, .0637, .0694];

            case '25-35':
                return [.0357, .0282, .0515, .0683];

            case '36-46':
                return [.0265, .0169, .0347, .0533];

            case '47+':
                return [.0167, .0101, .0254, .0356];

            default:
                return [.0284, .0225, .0478, .0589];
        }
    }

    render() {

        return (
            <div className='flex-container flex-row'>
                <div className='ages'>
                    <h2>Age Group</h2>
                    <ul><li><button onClick={() => this.setData('All Ages')} >All Ages</button></li></ul>
                    <ul><li><button onClick={() => this.setData('14-24')} >14-24</button></li></ul>
                    <ul><li><button onClick={() => this.setData('25-35')} >25-35</button></li></ul>
                    <ul><li><button onClick={() => this.setData('36-46')} >36-46</button></li></ul>
                    <ul><li><button onClick={() => this.setData('47+')} >47+</button></li></ul>
                </div>
                

                <div id="plot"></div>
            </div>

        );
    }
}

