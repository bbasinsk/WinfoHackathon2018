
import React, { Component } from 'react';
import './Header.css';
export default class Header extends Component {

    componentDidMount() {
        setTimeout(lineGrow, 500);
    }

    render() {
        return (

            <div onClick={() => this.props.setPage('main')}>
                <h1 class="title">Project Clearwater</h1>
                <div id="firline"></div>
                <p class="slogan">Exposing the inequality in police encounters.</p>
                <div class="secline"></div>
                <hr/>
            </div>
        );
    }
}

function lineGrow() {
    var el = document.getElementById("firline");
    var wid = 0;
    var inter = setInterval(frame, 10);
    function frame() {
        if (wid == 20) {
            clearInterval(inter);
        } else {
            wid++;
            el.style.width = wid + "%";
        }
    }
}

