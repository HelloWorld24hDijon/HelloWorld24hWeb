import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import './css/menu.css';

class Menu extends Component {
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`)
    }

    render() {
        return (
            <div className="Menu">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Accueil</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/events">
                                Évènements Public
                            </NavItem>
                            <NavItem eventKey={2} href="/a-propos">
                                A propos
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">
                                Connexion
                            </NavItem>
                            <NavItem eventKey={2} href="/register">
                                Inscription
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </div>
        );
    }
}

export default Menu;
