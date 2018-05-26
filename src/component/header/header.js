import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

import Menu from './menu';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Menu />
            </div>
        );
    }
}

export default Header;
