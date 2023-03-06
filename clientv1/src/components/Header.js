import React from 'react'
import { Button } from 'react-bootstrap';

const Header = () => {
    const goToList = () => {
        document.getElementById('carsList').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return(<div className='header'>
        <div className='header--inner'>
            <h2>KOZACKIE FURY</h2>
            <Button className='btn-gold' onClick={goToList}>SPRAWDŹ NASZĄ OFERTĘ</Button>
        </div>
    </div>)
}

export default Header;