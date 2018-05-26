import React, { Component } from 'react';
import '../css/App.css';
import './footer/css/footer.css';
import './body/css/accueil.css';

import Accueil from './body/accueil';
import A_propos from './body/a_propos';

import Header from './header/header';
import Footer from './footer/footer';
import Accueil from './body/accueil';

import AuthService from './Authentification/authservice';
//import withAuth from './Authentification/withAuth';
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
                <Accueil />

                <A_propos />

                <Footer />
            </div>
        );
    }
}

export default App;
