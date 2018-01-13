import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.setPage('plot')} >Racial Profiling</button>
                <button onClick={() => this.props.setPage('map')}>Police Shootings</button>
            </div>
        );
    }
}

