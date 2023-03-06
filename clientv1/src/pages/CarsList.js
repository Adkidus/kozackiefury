import React, { useEffect, useState } from 'react'
import axiosConfig from '../utils/axiosConfig';
import { Container, Row, Col } from 'react-bootstrap';
import CarsSliderItem from '../components/cars/CarsSliderItem';

const CarsList = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        axiosConfig.get(`cars/list`)
        .then(res => {
            setCars(res.data);
        })
    }, [])
    return(
        <Container fluid className='dark-bg home-cars'>
            <Container className='py-5'>
            <Row>
                <Col md={12} className='my-4' style={{textAlign: 'center'}}>
                    <h1>NASZE FUURY</h1>
                </Col>
            </Row>
            <Row>
                {cars.map(car=><CarsSliderItem key={car._id} car={car} />)}
            </Row>
            </Container>
        </Container>
    )
}

export default CarsList;