import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import logo from '../../assets/logo.png'

function MainNavbar({ setActiveSection }) {

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <img id="navbar-logo" src={logo} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => setActiveSection('hogwarts')}>Hogwarts</Nav.Link>
                        <Nav.Link onClick={() => setActiveSection('spells')}>Spells</Nav.Link>
                        <Nav.Link onClick={() => setActiveSection('characters')}>Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;