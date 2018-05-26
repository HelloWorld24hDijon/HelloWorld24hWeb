import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import img from '../../resource/Images/images.png';
import img2 from '../../resource/Images/Logo_anniversaire.png';

class EventAnniversaire extends Component {
    render() {
        return (
            <div className="Event">
                <h2> <b><u> Evénement : Anniversaire </u></b> </h2>
                <div>
                    <Image src={img} alt="none" />
                </div>
                <p> <u> Description : </u></p>
                <p>Nous vous attendons très nombreux afin de pourvoir féter les un ans de l'entreprise </p>
                <p> Rendez vous à <u>17h le 6 juin 2018 </u> au bureau. </p>
                <div>
                    <Image src={img2} alt="none" />
                </div>
                <br></br>

                <hr />
            </div>
        );
    }
}

export default EventAnniversaire;