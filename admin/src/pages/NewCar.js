import React, {useState, useRef} from 'react';
import { Col, Form, Row, FloatingLabel, Button } from 'react-bootstrap';
import ImagePreview from '../components/imagePreview';
import Service from '../components/service'
import axios from 'axios';
import ModalApp from '../components/modal';
import { useNavigate } from 'react-router-dom';
// const API_URL = 'http://localhost:5000/';
const API_URL = 'https://api.kozackiefury.pl/';

const NewCar = () => {
    const navigate = useNavigate()
    const [modalShow, setModalShow] = useState(false);
    const [carInfo, setCarInfo] = useState({
        brand: '',
        model: '',
        horse_power: '',
        engine: '',
        to_100: '',
        description: '',
        category: '',
        owner_first_name: '',
        owner_last_name: '',
        owner_email: '',
        owner_phone: '',
    })
    const [services, setServices] = useState([])
    const image1 = useRef();
    const image2 = useRef();
    const image3 = useRef();
    const image4 = useRef();
    const addService = () => {
        let arr = [...services]
        arr.push({
            title: '',
            time: '',
            price: '',
            description: ''
        })
        setServices(arr)
    }
    const deleteService = (index) => {
        let arr = [...services]
        arr.splice(index, 1);
        setServices(arr)
    }
    const setService = (index, updatedValue) => {
        let arr = [...services]
        arr[index] = updatedValue
        setServices(arr)
    }
    const saveCar = () => {
        const dataToSave = {...carInfo}
        dataToSave.services = [...services];
        axios.post(`${API_URL}cars/newCar`,dataToSave)
        .then(res => {
            uploadImages(res.data._id)
        })
    }
    const uploadImages = id => {
        if(image1.current.image)
            updateImage(id, image1.current.image)
        if(image2.current.image)
            updateImage(id, image2.current.image)
        if(image3.current.image)
            updateImage(id, image3.current.image)
        if(image4.current.image)
            updateImage(id, image4.current.image)
        setModalShow(true)
    }
    const updateImage= (id, img) => {
        let formData = new FormData();
        formData.append("fileUpload", img);
        axios.post(`${API_URL}cars/uploadImage/${id}`,formData)
    }
    return(
        <>
        <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>Dodaj samochód</h2>
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
                            value={carInfo.brand}
                            onChange={e=>setCarInfo({...carInfo,...{brand: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Marka</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="model"
                            value={carInfo.model}
                            onChange={e=>setCarInfo({...carInfo,...{model: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Model</label>
                    </Form.Floating>
                </Col>
                <Col md={6}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Ilość koni"
                            value={carInfo.horse_power}
                            onChange={e=>setCarInfo({...carInfo,...{horse_power: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Ilość koni</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="silnik"
                            value={carInfo.engine}
                            onChange={e=>setCarInfo({...carInfo,...{engine: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Silnik</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="0-100km/h"
                            value={carInfo.to_100}
                            onChange={e=>setCarInfo({...carInfo,...{to_100: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">0-100km/h (sekundy)</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Select onChange={e=>setCarInfo({...carInfo,...{category: e.target.value}})}>
                            <option></option>
                            <option value="Fast&Furious">Fast&Furious</option>
                            <option value="Luxury&Business">Luxury&Business</option>
                            <option value="Retro&Soul">Retro&Soul</option>
                        </Form.Select>
                        <label htmlFor="floatingInputCustom">Kategoria</label>
                    </Form.Floating>
                </Col>
                <Col md={12} className="mb-3">
                    <FloatingLabel label="Opis">
                        <Form.Control
                            as="textarea"
                            placeholder="Opis"
                            style={{ minHeight: '200px' }}
                            value={carInfo.description}
                            onChange={e=>setCarInfo({...carInfo,...{description: e.target.value}})}
                        />
                    </FloatingLabel>
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
                            value={carInfo.owner_first_name}
                            onChange={e=>setCarInfo({...carInfo,...{owner_first_name: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Imię</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="Nazwisko"
                            value={carInfo.owner_last_name}
                            onChange={e=>setCarInfo({...carInfo,...{owner_last_name: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Nazwisko</label>
                    </Form.Floating>
                </Col>
                <Col md={6}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            value={carInfo.owner_email}
                            onChange={e=>setCarInfo({...carInfo,...{owner_email: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Email</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="Telefon"
                            value={carInfo.phone}
                            onChange={e=>setCarInfo({...carInfo,...{phone: e.target.value}})}
                        />
                        <label htmlFor="floatingInputCustom">Telefon</label>
                    </Form.Floating>
                </Col>
                <Col md={12} style={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                    Zdjęcia
                </Col>
                <hr />
                <Col md={3} className="mb-3">
                    <ImagePreview id="image1" ref={image1} />
                </Col>
                <Col md={3} className="mb-3">
                    <ImagePreview id="image2" ref={image2} />
                </Col>
                <Col md={3} className="mb-3">
                    <ImagePreview id="image3" ref={image3} />
                </Col>
                <Col md={3} className="mb-3">
                    <ImagePreview id="image4" ref={image4} />
                </Col>
                <Col md={12} style={{paddingBottom: "1rem", paddingTop: "2rem"}}>
                    Oferta
                </Col>
                <hr />
                {services.map((el,index) => <Row key={index}>
                    <Service title={el.title} time={el.time} price={el.price} description={el.description} index={index} setService={setService} deleteService={deleteService} />
                    <hr />
                </Row> )}
                <Button onClick={addService}>Dodaj kolejną</Button>
                <div style={{paddingTop: '2rem',paddingBottom: '2rem'}} ></div>
                <hr />
                <Col md={12} style={{paddingBottom:'3rem'}}>
                    <div style={{display: 'flex',width:"100%",justifyContent:"space-between"}}>
                        <div></div>
                        <Button variant='success' onClick={()=>saveCar()}>Zapisz</Button>
                    </div>
                </Col>
            </Row>
        </Form>
        <ModalApp
            show={modalShow}
            onHide={() => setModalShow(false)}
            header='Dodano samochód!'
            body={`Samochód ${carInfo.brand} ${carInfo.model} został dodany do bazy danych`}
            footer={<div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}><Button variant='success' onClick={()=>navigate('/')}>Moja Flota</Button><Button variant='success' onClick={()=>window.location.reload(true)}>Dodaj kolejny</Button></div>}
        />
        </>
    )
}

export default NewCar;