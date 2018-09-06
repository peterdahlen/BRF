import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>

            <Navbar.Header>
                <Navbar.Brand>
                    <a eventKey={1} componentClass={Link} href="/" to="/">BRF Havsbrisen</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavDropdown eventKey={2} title="Felanmälan" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} componentClass={Link} href="/felanmalan" to="/felanmalan">Felanmälan</MenuItem>
                            <MenuItem eventKey={2.2} componentClass={Link} href="/skotsel" to="/skotsel">Skötsel</MenuItem>
                            <MenuItem eventKey={2.3} componentClass={Link} href="/veidekke" to="/veidekke">Veidekke Nära</MenuItem>
                    </NavDropdown>    
                    <NavDropdown eventKey={3} title="Styrelse" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} componentClass={Link} href="/styrelse" to="/styrelse">Styrelse</MenuItem>
                            <MenuItem eventKey={3.2} componentClass={Link} href="/valberedning" to="/valberedning">Valberedning</MenuItem>
                            <MenuItem eventKey={3.3} componentClass={Link} href="/kontakt" to="/kontakt">Kontakt</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Stadgar" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1} componentClass={Link} href="/stadgar" to="/stadgar">Stadgar</MenuItem>
                            <MenuItem eventKey={4.2} componentClass={Link} href="/trivsel" to="/trivsel">Trivselregler</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Årsredovisning" id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1} componentClass={Link} href="/redovisning" to="redovisning">Årsredovisning</MenuItem>
                            <MenuItem eventKey={5.2} componentClass={Link} href="/blanketter" to="/blanketter">Blanketter</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}