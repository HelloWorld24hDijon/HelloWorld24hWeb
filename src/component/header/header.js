import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

import Menu from './menu';
import Bouton from './bouton';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome from Hello World !</h1>
                    
                    <Menu />
                </header>
            </div>
        );
    }
}

export default Header;
