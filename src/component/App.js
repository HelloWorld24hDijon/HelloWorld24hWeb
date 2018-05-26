import React, { Component } from 'react';
import '../css/App.css';
import './footer/css/footer.css';

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
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
