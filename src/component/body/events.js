import React, { Component } from 'react';

import Accueil from './accueil';
import Header from '../header/header';
import Footer from '../footer/footer';

class Events extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="Events">
                    <h2> <b><u> Evénement : Anniversaire </u></b> </h2>
                    <div>
                        <img id="img1" src="images.png" alt="none" />
                    </div>
                    <p> <u> Description : </u></p>
                    <p>Nous vous attendons très nombreux afin de pourvoir féter les un ans de l'entreprise </p>
                    <p> Rendez vous à <u>17h le 6 juin 2018 </u> au bureau. </p>
                    <div>
                        <img id="img2" src="Logo_anniversaire.png" alt="none" />
                    </div>
                    <br></br>

                    <hr />

                    <h2> <b><u> Evénement : Réunion </u></b> </h2>
                    <div>
                        <img id="img3" src="reunion.jpg" alt="none" />
                    </div>
                    <p> <u> Description : </u></p>
                    <p>	Nous vous invitons fortement a venir a cette réunion afin de parler de l'avenir de l'entreprise.	</p>
                    <p> Rendez vous à <u>10h le 14 avril 2018 </u> en salle de réunion. </p>

                    <br></br>

                    <hr />

                    <h2> <b> <u>Evénement : Gala de fin d'année </u></b> </h2>
                    <div>
                        <img id="img4" src="danse.jpg" alt="none" />
                    </div>
                    <p> <u> Description : </u></p>
                    <p>	Nous vous invitons à notre traditionnel gala de fin d'année	</p>
                    <p> Rendez vous à <u>19h le 25 mai 2018 </u> à la salle polyvalente. </p>

                    <br></br>

                    <hr />

                    <h2> <b><u> Evénement : Repas de Noël</u> </b> </h2>
                    <div>
                        <img id="img5" src="table.jpg" alt="none" />
                    </div>
                    <p> <u> Description : </u></p>
                    <p>	Nous vous invitons au repas de Noël avec toutes les personnes travaillant dans l'entreprise avec leurs proches. Nous comptons sur vous pour être présents a ce rendez vous.	</p>
                    <p> Rendez vous à <u>19h le 25 juin 2018 </u> au restaurant ci-joint par mail. </p>

                    <br></br>

                    <hr />

                    <h2> <b><u> Evénement : Mariage </u></b> </h2>
                    <div>
                        <img id="img6" src="mariage.jpg" alt="none" />
                    </div>
                    <p> <u> Description : </u></p>
                    <p>Nous vous invitons au mariage de Julie et de Paul. </p>
                    <p> Rendez vous à <u>14h le 11 juillet 2018</u> à l'église indiquer dans la faire part. </p>
                    <div>
                        <img id="img7" src="bague.png" alt="none" />
                    </div>
                    <br></br>


                </div>
                <Footer />
            </div>
        );
    }
}

export default Events;
