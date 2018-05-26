import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

class EventGala extends Component {
    render() {
        return (
            <div className="EventGala">
                <h2> <b> <u>Evénement : Gala de fin d'année </u></b> </h2>  
                <div>
                <img id="img4"src="danse.jpg" alt="none" />
                </div>
                <p> <u> Description : </u></p> 
                <p>	Nous vous invitons à notre traditionnel gala de fin d'année	</p> 
                <p> Rendez vous à <u>19h le 25 mai 2018 </u> à la salle polyvalente. </p>
                    
                <br></br>
                
                <hr/>
            </div>
        );
    }
}

export default EventGala;