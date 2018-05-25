import React, { Component } from 'react';
import logo from '../../resource/logo.svg';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="NomEquipe">
                    <p>Equipe Hello World</p>
                </div>
                <div className="DateLieu">
                    <p>24h des DUT Informatique 2018</p>
                </div>
            </div>
        );
    }
}

export default Footer;
