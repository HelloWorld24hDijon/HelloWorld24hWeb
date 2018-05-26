import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

class EventReunion extends Component {
    render() {
        return (
            <div className="EventReunion">
                <h2> <b><u> Evénement : Réunion </u></b> </h2> 
		        <div>
                <img id="img3"src="reunion.jpg" alt="none" />
                </div>
                <p> <u> Description : </u></p> 
                <p>	Nous vous invitons fortement a venir a cette réunion afin de parler de l'avenir de l'entreprise.	</p> 
                <p> Rendez vous à <u>10h le 14 avril 2018 </u> en salle de réunion. </p>
                    
                <br></br>
                
                <hr/>
            </div>
        );
    }
}

export default EventReunion;