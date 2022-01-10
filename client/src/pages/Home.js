import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import CarsSlider from '../components/cars/CarsSlider';

const Home = () => {
    return(<>
        <Header />
        <section id="carsList">
            <Container fluid className='dark-bg home-cars' style={{padding:'64px', display: 'flex', justifyContent:'center', flexFlow:'column', alignItems: 'center'}}>
                <h1 className='mb-5'>
                    NASZE FUURY
                </h1>
                <CarsSlider />
            </Container>
        </section>
    </>)
}

export default Home;