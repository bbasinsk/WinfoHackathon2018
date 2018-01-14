
import React, { Component } from 'react';
import './Header.css';
export default class Header extends Component {

    componentDidMount() {
        setTimeout(lineGrow, 500);
    }

    render() {
        return (

            <div className="header" onClick={() => this.props.setPage('main')}>
                <h1 className="title">Project Clearwater</h1>
                <div id="firline"></div>
                <p className="slogan">Exposing the inequality in police encounters.</p>
                <div className="secline"></div>
                
            </div>
        );
    }
}

function lineGrow() {
    var el = document.getElementById("firline");
    var wid = 0;
    var inter = setInterval(frame, 10);
    function frame() {
        if (wid === 20) {
            clearInterval(inter);
        } else {
            wid++;
            el.style.width = wid + "%";
        }
    }
}

