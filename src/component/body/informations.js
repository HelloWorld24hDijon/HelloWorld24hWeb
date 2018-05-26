import React, { Component } from 'react';

import Header from '../header/header';
import A_propos from './a_propos';
import Footer from '../footer/footer';

class Informations extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <A_propos />
                <Footer />
            </div >
        );
    }
}

export default Informations;
