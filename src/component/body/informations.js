import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

import Header from '../header/header';
import Footer from '../footer/footer';

class Informations extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Footer />
            </div >
        );
    }
}

export default Informations;
