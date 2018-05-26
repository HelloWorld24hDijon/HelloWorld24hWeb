import React, { Component } from 'react';
import '../css/App.css';
import './header/css/style.css';
import './header/css/menu.css';
import Accueil from './body/accueil';

import Header from './header/header';
import Footer from './footer/footer';

import AuthService from './Authentification/authservice';
import withAuth from './Authentification/withAuth';
const Auth = new AuthService();

class App extends Component {
    handleLogout() {
        Auth.logout();
        this.props.history.replace('/login');
    }

    render() {
        return (
            <div className="App">
                <Header text="ceci est le text du header" />
                <p className="App-intro">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
                <Footer />
            </div>
        );
    }
}

export default App;
