import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavbarEl = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="black" variant="black">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Kozackie Fury</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link to='/samochody' className="navbar-link">SAMOCHODY</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarEl;