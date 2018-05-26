import React, { Component } from 'react';
import '../css/App.css';
import './header/css/style.css';
import './header/css/menu.css';

import Header from './header/header';
import Footer from './footer/footer';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Header />
            
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Footer />
        </div>
        );
    }
}

export default App;
