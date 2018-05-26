import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import img from '../../resource/Images/danse.jpg';

class EventGala extends Component {
    render() {
        return (
            <div className="Event">
                <h2> <b> <u>Evénement : Gala de fin d'année </u></b> </h2>
                <div>
                    <Image src={img} alt="none" />
                </div>
                <p> <u> Description : </u></p>
                <p>	Nous vous invitons à notre traditionnel gala de fin d'année	</p>
                <p> Rendez vous à <u>19h le 25 mai 2018 </u> à la salle polyvalente. </p>

                <br></br>

                <hr />
            </div>
        );
    }
}

export default EventGala;