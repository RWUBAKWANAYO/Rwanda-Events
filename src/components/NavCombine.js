import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import {Link} from 'react-router-dom';

export class NavCombine extends Component {
    render() {
        return (
            <div>
                 <Navbar/>
                <div className="other-nav">
                <Link>CALENDAR</Link>
                <Link>AVENUE</Link>
                <Link>SUPPLIERS</Link>

                </div>
            </div>
        )
    }
}

export default NavCombine
