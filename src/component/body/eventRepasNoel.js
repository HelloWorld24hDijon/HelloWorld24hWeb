import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import img from '../../resource/Images/table.jpg';

class EventRepasNoel extends Component {
    render() {
        return (
            <div className="Event">
                <h2> <b><u> Evénement : Repas de Noël</u> </b> </h2>
                <div>
                    <Image src={img} alt="none" />
                </div>
                <p> <u> Description : </u></p>
                <p>	Nous vous invitons au repas de Noël avec toutes les personnes travaillant dans l'entreprise avec leurs proches. Nous comptons sur vous pour être présents a ce rendez vous.	</p>
                <p> Rendez vous à <u>19h le 25 juin 2018 </u> au restaurant ci-joint par mail. </p>

                <br></br>

                <hr />
            </div>
        );
    }
}

export default EventRepasNoel;