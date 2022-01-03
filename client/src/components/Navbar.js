import React from 'react';
import {Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavbarEl = () => {
    return(
        <Navbar bg="black">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Kozackie Fury</Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarEl;