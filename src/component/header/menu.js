import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import logo from '../../resource/logo.svg';

class Menu extends Component {
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`)
    }
    
    render() {
        
       return (
            
            
                /*<Nav bsStyle="pills"  activeKey={1} onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href="/home">
                      Accueil
                    </NavItem>
                    <NavItem eventKey={2} href="/home">
                      Evenements
                    </NavItem>
                    <NavItem eventKey={3} href="/home">
                      Informations
                    </NavItem>
                </Nav>*/
           
           <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Evenements</a></li>
                <li><a href="#">Informations</a></li>
                
           </ul>
           
            
        );
    }
}

export default Menu;
