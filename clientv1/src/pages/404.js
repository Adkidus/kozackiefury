import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return(
        <Container fluid className='dark-bg home-cars' style={{minHeight:'90vh'}}>
            <Container className='py-5'>
                <div style={{display: 'flex', flexDirection:'column',alignItems: 'center'}}>
                    <div style={{fontSize:'12rem'}}>404</div>
                    <div className="pb-4" style={{fontSize:'1.5rem'}}>NIE ZNALEZIONO STRONY</div>
                    <Link to='/'>
                        <Button className='btn-gold'>STRONA GŁÓWNA</Button>
                    </Link>
                </div>
            </Container>
        </Container>
    )
}

export default Page404;