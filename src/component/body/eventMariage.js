import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import img from '../../resource/Images/mariage.jpg';
import img2 from '../../resource/Images/bague.png';

class EventMariage extends Component {
    render() {
        return (
            <div className="Event">
                <h2> <b><u> Evénement : Mariage </u></b> </h2>
                <div>
                    <Image src={img} alt="none" />
                </div>
                <p> <u> Description : </u></p>
                <p>Nous vous invitons au mariage de Julie et de Paul. </p>
                <p> Rendez vous à <u>14h le 11 juillet 2018</u> à l'église indiquer dans la faire part. </p>
                <div>
                    <Image src={img2} alt="none" />
                </div>
                <br></br>
            </div>
        );
    }
}

export default EventMariage;