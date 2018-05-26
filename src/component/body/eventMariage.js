import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

class EventMariage extends Component {
    render() {
        return (
            <div className="EventMariage">
                <h2> <b><u> Evénement : Mariage </u></b> </h2>
                <div>
                <img id="img6"src="mariage.jpg" alt="none" />
                </div>
                <p> <u> Description : </u></p> 
                <p>Nous vous invitons au mariage de Julie et de Paul. </p> 
                <p> Rendez vous à <u>14h le 11 juillet 2018</u> à l'église indiquer dans la faire part. </p>
                <div>
                <img id="img7"src="bague.png" alt="none" />
                </div>
                <br></br>
            </div>
        );
    }
}

export default EventMariage;