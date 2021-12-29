import React from 'react';
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const column = {
    backgroundColor: "#b19d7f",
    textAlign: 'center',
    marginTop: "1rem",
    padding: 0
};

const linkText = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2.5rem',
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
}

const Header = () => {

    return(
        <Row style={{marginBottom: '2rem'}}>
            <Col md={4} style={column} >
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div style={linkText}>
                        FLOTA
                    </div>
                </Link>
            </Col>
            <Col md={{ span: 4, offset: 4 }} style={column}>
                <Link to="/dodaj-auto" style={{textDecoration: 'none'}}>
                    <div style={linkText}>
                        DODAJ
                    </div>
                </Link>
            </Col>
        </Row>
    )
}

export default Header;