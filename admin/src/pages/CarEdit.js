import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Service from '../components/service'

// const API_URL = 'http://localhost:5000/';
const API_URL = 'https://api.kozackiefury.pl/';

const CarEdit = () => {
    const params = useParams();
    const [car, setCar] = useState(null)
    useEffect(() => {
        axios.get(`${API_URL}cars/car/${params.carId}`)
        .then(res => {
            let thisCar = res.data
            setCar(thisCar);
        })
    }, [])
    const deleteService = (index) => {
        let arr = [...car.services]
        arr.splice(index, 1);
        setCar({...car,...{services: arr}})
    }
    const setService = (index, updatedValue) => {
        let arr = [...car.services]
        arr[index] = updatedValue
        setCar({...car,...{services: arr}})
    }
    const save = () => {
        axios.post(`${API_URL}cars/update`,car)
        .then(res => {
            alert('zapisano')
        })
    }
    return(<>
        {car ? <>
            <Form>
                <Row>
                    <Col md={12} style={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                        Dane
                    </Col>
                    <hr />
                    <Col md={6}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="marka"
                                value={car.brand}
                                onChange={e=>setCar({...car,...{brand: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Marka</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Floating >
                            <Form.Control
                                type="text"
                                placeholder="model"
                                value={car.model}
                                onChange={e=>setCar({...car,...{model: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Model</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Ilość koni"
                                value={car.horse_power}
                                onChange={e=>setCar({...car,...{horse_power: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Ilość koni</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Floating >
                            <Form.Control
                                type="text"
                                placeholder="silnik"
                                value={car.engine}
                                onChange={e=>setCar({...car,...{engine: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Silnik</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Floating >
                            <Form.Control
                                type="text"
                                placeholder="0-100km/h"
                                value={car.to_100}
                                onChange={e=>setCar({...car,...{to_100: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">0-100km/h (sekundy)</label>
                        </Form.Floating>
                    </Col>
                    <Col md={12} style={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                        Właściciel
                    </Col>
                    <hr />
                    <Col md={6}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Imię"
                                value={car.owner_first_name}
                                onChange={e=>setCar({...car,...{owner_first_name: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Imię</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Floating >
                            <Form.Control
                                type="text"
                                placeholder="Nazwisko"
                                value={car.owner_last_name}
                                onChange={e=>setCar({...car,...{owner_last_name: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Nazwisko</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={car.owner_email}
                                onChange={e=>setCar({...car,...{owner_email: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Email</label>
                        </Form.Floating>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Floating >
                            <Form.Control
                                type="text"
                                placeholder="Telefon"
                                value={car.phone}
                                onChange={e=>setCar({...car,...{phone: e.target.value}})}
                            />
                            <label htmlFor="floatingInputCustom">Telefon</label>
                        </Form.Floating>
                    </Col>
                    <Col md={12} style={{paddingBottom: "1rem", paddingTop: "2rem"}}>
                        Oferta
                    </Col>
                    <hr />
                    {car.services.map((el,index) => <Row key={index}>
                        <Service title={el.title} time={el.time} price={el.price} description={el.description} index={index} setService={setService} deleteService={deleteService} />
                        <hr />
                    </Row> )}
                    <Col md={12} style={{paddingBottom:'3rem'}}>
                        <div style={{display: 'flex',width:"100%",justifyContent:"space-between"}}>
                            <Link to="/">
                                <Button variant='danger'>Anuluj</Button>
                            </Link>
                            <Button variant='success' onClick={save}>Zapisz</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
        :'LOADING'}
    </>)
}

export default CarEdit;