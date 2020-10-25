import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './header.css';

export class Header extends Component {
    render() {
        return (
        <Navbar className="header">
            <Navbar.Brand>
                 <span className="headerTitle">Cross-Sourcerer</span>
            </Navbar.Brand>
        </Navbar>
        )
    }
}

export default Header
