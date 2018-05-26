import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

class EventAnniversaire extends Component {
    render() {
        return (
            <div className="EventAnniversaire">
                <h2> <b><u> Evénement : Anniversaire </u></b> </h2> 
                <div>
                <img id="img1"src="images.png" alt="none" />
                </div>
                <p> <u> Description : </u></p> 
                <p>Nous vous attendons très nombreux afin de pourvoir féter les un ans de l'entreprise </p> 
                <p> Rendez vous à <u>17h le 6 juin 2018 </u> au bureau. </p>
                <div>
                <img id="img2"src="Logo_anniversaire.png" alt="none" />	
                </div>
                <br></br>
                
                <hr/>
            </div>
        );
    }
}

export default EventAnniversaire;