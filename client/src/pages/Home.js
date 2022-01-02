import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import CarsSlider from '../components/cars/CarsSlider';

const Home = () => {
    return(<>
        <Header />
        <section id="carsList">
            <Container fluid className='dark-bg home-cars' style={{padding:'64px', display: 'flex', justifyContent:'center', flexFlow:'column', alignItems: 'center'}}>
                <h3 className='mb-3'>
                    NASZE SAMOCHODY
                </h3>
                <CarsSlider />
            </Container>
        </section>
    </>)
}

export default Home;