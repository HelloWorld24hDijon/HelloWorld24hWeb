import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './css/body.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import EventAnniversaire from './eventAnniversaire';
import EventReunion from './eventReunion';
import EventGala from './eventGala';
import EventRepasNoel from './eventRepasNoel';
import EventMariage from './eventMariage';

class Events extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Grid className="Events">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <EventAnniversaire />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <EventReunion />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <EventGala />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <EventRepasNoel />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <EventMariage />
                        </Col>
                    </Row>
                </Grid >
                <div className="Events-Footer">
                    <Footer />
                </div>
            </div >
        );
    }
}

export default Events;
