import React, { Component } from 'react';
import logo from '../../resource/logo.svg';
import EventAnniversaire from './eventAnniversaire';
import EventReunion from './eventReunion';
import EventGala from './eventGala';
import EventRepasNoel from './eventRepasNoel';
import EventMariage from './eventMariage';

class Events extends Component {
    render() {
        return (
            <div className="Events">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
				
				<EventAnniversaire />

				<EventReunion />
					
				<EventGala />
			
				<EventRepasNoel />
					
				<EventMariage />
				
            </div>
        );
    }
}

export default Events;
