import React, { Component } from 'react';
import{Button,ButtonToolbar, Row, Popover}from 'react-bootstrap';


class A_propos extends Component {
    render() {
        return (
            <Row className="A_propos">
                <div style={{ height: 120 }}>
                  <Popover
                    id="popover-basic"
                    placement="right"
                    positionLeft={200}
                    positionTop={50}
                    title="Alexis"
                  >
                    Cette expérience a été trop <strong>amazing</strong> !!
                  </Popover>
                </div>;
                Ce site internet a été codé en 8 heures par un groupe d'étudiants durant la nuit de 22h à 6h (Soyez indulgent).
            </Row>
        );
    }
}

export default A_propos;
