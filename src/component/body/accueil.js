import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import logo from '../../resource/logo.svg';
import img1 from '../../resource/Images/pique_nique.jpg'
import img2 from '../../resource/Images/anniv.jpg'
import img3 from '../../resource/Images/mariage.jpg'

class Accueil extends Component {
    render() {
        return (
            <div className="Accueil">
                <div id="degrade">
                    <h1>Bienvenue sur notre site !</h1>
                    <p>Vous trouverez ici un large choix d'organisation d'évènements.</p>
                    <p>Ce site a été réalisé durant l'épreuve web des 24h des iut !</p>
            
                    <div id="texte">
                        Reunionou.app est une application qui vous permet à vous et  d'autres personnes et permet de se fixer un rendez-vous en un lieu déterminé !
                        L'application est gratuite et disponible sur de multiple support !
                    </div>
               </div>
            </div>
        );
    }
}

export default Accueil;
