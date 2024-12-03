import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function MainNavbar({ setActiveSection }) {
    // Componente de barra de navegação principal, que recebe uma função setActiveSection como prop

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand
                    href="/">
                    <img
                        src="src/assets/logo.png"
                        alt="Logo"
                        className="logo"
                    />
                </Navbar.Brand>
                {/* Botão para expandir/colapsar a barra de navegação em dispositivos móveis */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {/* Ligações de navegação que atualizam o activesection ao serem clicadas */}
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