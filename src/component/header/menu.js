import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class Menu extends Component {
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`)
    }
    
    render() {
        
       return (     
           <Nav bsStyle="pills" activeKey={1}>
                <LinkContainer to={`/`}>
                    <NavItem eventKey={1} >
                        Accueil
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={`/events`}>
                    <NavItem eventKey={2} >
                        Évènements
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={`/a-propos`}>
                    <NavItem eventKey={3} >
                        A propos
                    </NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default Menu;
