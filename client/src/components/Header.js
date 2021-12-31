import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return(<div className='header'>
        <div className='header--inner'>
            <h2>KOZACKIE FURY</h2>
            <Link to="#carsList">
                <Button className='btn-gold'>SPRAWDŹ NASZĄ OFERTĘ</Button>
            </Link>
        </div>
    </div>)
}

export default Header;