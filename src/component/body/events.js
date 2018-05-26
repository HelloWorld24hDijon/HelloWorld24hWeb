import React, { Component } from 'react';

import Accueil from './accueil';
import Header from '../header/header';
import Footer from '../footer/footer';
import EventAnniversaire from './eventAnniversaire';
import EventReunion from './eventReunion';
import EventGala from './eventGala';
import EventRepasNoel from './eventRepasNoel';
import EventMariage from './eventMariage';

class Events extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <EventAnniversaire />

                <EventReunion />

                <EventGala />

                <EventRepasNoel />

                <EventMariage />
                   
                <Footer />
            </div>
        );
    }
}

export default Events;
