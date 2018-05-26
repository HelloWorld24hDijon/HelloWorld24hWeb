import React, { Component } from 'react';
import { Grid, Row, Col, code } from 'react-bootstrap';
class Footer extends Component {
    render() {
        return (
                <Grid className="Footer">
            
                    <Row className="DateLieu">
                         <Col sm={12} md={20}>
                            <code>24h des DUT Informatique 2018</code>
                        </Col>
                        
                        
                    </Row>
                    <Row className="NomEquipe">
                       <Col sm={12} md={20}>
                            <code>Equipe Hello World</code>
                        </Col>
                    </Row>
                   

                </Grid>
        
        );
    }
}

export default Footer;
