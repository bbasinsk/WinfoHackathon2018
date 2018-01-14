
import React, { Component } from 'react';
import './Header.css';
export default class Header extends Component {

    componentDidMount() {
        setTimeout(quote, 100);
        setTimeout(initiate, 6000);
    }


    render() {
        return (
            <div onClick={() => this.props.setPage('main')}>
                <div id="quote">
                    <h2> Racial Profiling (n.)</h2> 
                    <p> 
                        the use of <b> ethnicity </b> as grounds of 
                        <b> suspecting </b> someone of having commited
                        an offense.
                    </p>
                </div>
                <div id="enter">
                    <h1 className="title">Project Clearwater</h1>
                    <div id="firline"></div>
                    <p id="slogan">Exposing the inequality during police encounters.</p>
                </div>
            </div>
        );
    }
}

function initiate() {
    setTimeout(lineGrow, 500);
    setTimeout(appearh, 1400);
    setTimeout(appearp, 1400);
    setTimeout(start, 3500);
}

function quote() {
    var l = document.getElementById("enter");
    l.style.display = 'none';
    var el = document.getElementById("quote");
    var opac = 0;
    var inter = setInterval(frame, 70);
    function frame() {
        if (opac > 1) {
            clearInterval(inter);
        } else {
            opac = opac + 0.03;
            el.style.opacity = opac;
        }
    }
    setTimeout(function() {
        var el = document.getElementById("quote");
        var opac = 1;
        var inter = setInterval(frame, 70);
        function frame() {
            if (opac < 0) {
                clearInterval(inter);
            } else {
                opac = opac - 0.03;
                el.style.opacity = opac;
            }
        }
        setTimeout(function() {
            var l = document.getElementById("enter");
            l.style.display = 'block';
            el.style.display = 'none';
        }, 2300);
    }, 4000);
    
}


function lineGrow() {
    var el = document.getElementById("firline");
    var wid = 0;
    var inter = setInterval(frame, 30);
    function frame() {
        if (wid > 20) {
            clearInterval(inter);
        } else {
            wid = wid + 0.8;
            el.style.width = wid + "%";
        }
    }
}

function appearh() {
    var el = document.getElementsByTagName("h1")[0];
    var opac = 0;
    var inter = setInterval(frame, 70);
    function frame() {
        if (opac > 1) {
            clearInterval(inter);
        } else {
            opac = opac + 0.03;
            el.style.opacity = opac;
        }
    }
}
function appearp() {
    var el = document.getElementById("slogan");
    var opac = 0;
    var inter = setInterval(frame, 50);
    function frame() {
        if (opac > 1) {
            clearInterval(inter);
        } else {
            opac = opac + 0.03;
            el.style.opacity = opac;
        }
    }
}

function start() {
    var el = document.getElementById("enter");
    var translate = 300;
    var inter = setInterval(frame, 1);
    function frame() {
        if (translate < 0) {
            clearInterval(inter);
        } else {
            translate = translate - 0.8;
            el.style.marginTop = translate + "px";
        }
    }
}