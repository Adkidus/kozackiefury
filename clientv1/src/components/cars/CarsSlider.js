import React, { useEffect, useState } from 'react'
import axiosConfig from '../../utils/axiosConfig';
import CarsSliderItem from './CarsSliderItem';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const slideButton = {
    color: '#fff',
    backgroundColor: '#e5bc42',
    padding: '.5rem .75rem',
    cursor: 'pointer',
    fontSize: '1.5rem'
}

const CarsSlider = () => {
    const [index,setIndex] = useState(0)
    const [cars, setCars] = useState([])
    const [carsData, setCarsData] = useState([])
    useEffect(() => {
        axiosConfig.get(`cars/list`)
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
    const setSliderPage = () => {
        let ind = index;
        ind--;
        if(ind < 0) return;
        else setIndex(ind)
    }
    const setSliderPageNext = () => {
        let pages = Math.ceil(cars.length/3)
        let ind = index;
        ind++;
        if(ind >= pages) return;
        else setIndex(ind)
    }
    return(<>
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="d-flex mb-4" style={{gap:'1.5rem', justifyContent: 'center'}}>
                        <div style={slideButton} onClick={setSliderPage}>
                            <FontAwesomeIcon icon={faAngleLeft}  />
                        </div>
                        <div style={slideButton} onClick={setSliderPageNext}>
                            <FontAwesomeIcon icon={faAngleRight}  />
                        </div>
                    </div>
                </Col>
                <Col xs={12}>
                    <Carousel id="carsListCaroysel" indicators={false} controls={false} touch={true} slide={true} activeIndex={index} >
                        {carsData.map((el,index) => (
                            <Carousel.Item key={index}>
                                <Row>
                                    {el.map(car=><CarsSliderItem key={car._id} car={car} />)}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={12}>
                    <div className="d-flex mt-4" style={{gap:'1.5rem', justifyContent: 'center'}}>
                        <div style={slideButton} onClick={setSliderPage}>
                            <FontAwesomeIcon icon={faAngleLeft}  />
                        </div>
                        <div style={slideButton} onClick={setSliderPageNext}>
                            <FontAwesomeIcon icon={faAngleRight}  />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>)
}

export default CarsSlider;