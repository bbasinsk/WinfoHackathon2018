
import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <div onClick={() => this.props.setPage('main')}>
                <h1>Project Clearwater</h1>
                <p>Exposing the inequality in police encounters.</p>
                <hr/>
            </div>
        );
    }
}

