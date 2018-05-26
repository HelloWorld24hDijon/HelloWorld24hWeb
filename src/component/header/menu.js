import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import logo from '../../resource/logo.svg';
import Events from 'react';

class Menu extends Component {
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`)
    }
    
    render() {
        
       return (     
            <Nav bsStyle="pills"  activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1} href="/">
                    Accueil
                </NavItem>
                <NavItem eventKey={2} href="/events">
                    Evenements
                </NavItem>
                <NavItem eventKey={3} href="/Informations">
                    Informations
                </NavItem>
            </Nav>
        );
    }
}

export default Menu;
