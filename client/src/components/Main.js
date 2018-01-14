import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className="parent">
                <div className="par1" onClick={() => this.props.setPage('plot')} >
                    <p><b>Stop and Search</b></p>
                </div>
                <div className="par2" onClick={() => this.props.setPage('map') }> 
                    <p><b>Police Shootings</b></p>
                </div>
                
            </div>



            /*<div>
                <button onClick={() => this.props.setPage('plot')} >Racial Profiling</button>
                <button onClick={() => this.props.setPage('map')}>Police Shootings</button>
            </div>*/

        );
    }
}

