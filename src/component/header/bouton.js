import React, { Component } from 'react';
import{Button,ButtonToolbar}from 'react-bootstrap';

class Bouton extends Component {
    render() {
        return (
            <div className="Bouton">
                 <ButtonToolbar className="deuxBoutons">
                    <Button bsStyle="primary" bsSize="small">
                      INSCRIPTION
                    </Button>
                    <Button bsSize="small">CONNEXION</Button>
                  </ButtonToolbar>
            </div>
        );
    }
}

export default Bouton;
