import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className="parent">
                <div className="par1" onClick={() => this.props.setPage('plot')} >
                    <p>Racial Profiling</p>
                </div>
                <div className="par2" onClick={() => this.props.setPage('map') }> 
                    <p>Police Shooting</p>
                </div>
                <div className="tri">

                </div>
            </div>



            /*<div>
                <button onClick={() => this.props.setPage('plot')} >Racial Profiling</button>
                <button onClick={() => this.props.setPage('map')}>Police Shootings</button>
            </div>*/

        );
    }
}

