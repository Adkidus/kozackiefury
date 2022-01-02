import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CarsSliderItem from './CarsSliderItem';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
// const API_URL = 'http://localhost:5000/';
const API_URL = 'https://api.kozackiefury.pl/';

const CarsSlider = () => {
    const [cars, setCars] = useState([])
    const [carsData, setCarsData] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}cars/list`)
        .then(res => {
            setCars(res.data);
        })
    }, [])
    useEffect(() => {
        prepareDataForSlider()
    }, [cars])
    const prepareDataForSlider = () => {
        let obj = [];
        let tmp = []
        for(let i=0;i<cars.length;i++){
            tmp.push(cars[i])
            if(tmp.length === 3 || i===cars.length-1){
                obj.push(tmp)
                tmp = [];
            }
        }
        setCarsData(obj)
    }
    return(<>
        <Container>
            <Row>
                <Col xs={12}>
                    <Carousel id="carsListCaroysel" indicators={false} controls={cars.length>3} slide={false}>
                        {carsData.map((el,index) => (
                            <Carousel.Item key={index}>
                                <Row>
                                    {el.map(car=><CarsSliderItem key={car._id} car={car} />)}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>)
}

export default CarsSlider;