import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Service from '../components/service'
import ImagePreview from '../components/imagePreview';
import ModalApp from '../components/modal';

// const API_URL = 'http://localhost:5000/';
const API_URL = 'https://api.kozackiefury.pl/';

const CarEdit = () => {
    const params = useParams();
    const [car, setCar] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [photoToDelete, setPhotoToDelete] = useState(null)
    const image1 = useRef();
    const image2 = useRef();
    const image3 = useRef();
    const image4 = useRef();
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
        // let thisCar = {...car};
        // thisCar.photos[1].location = "https://kozackiefury.s3.eu-central-1.amazonaws.com/1640941901374.webp"
        // thisCar.photos[1].key = "1640941901374.webp"
        // console.log(thisCar)
        axios.post(`${API_URL}cars/update`,car)
        .then(res => {
            alert('zapisano')
        })
    }
    const deleteImage = () => {
        let photo = photoToDelete;
        let thisCar = {...car}
        let photoslist = [...car.photos]
        photoslist = photoslist.filter(obj => obj._id !== photo._id)
        thisCar.photos = [...photoslist]
        let toDelete = {
            car: thisCar,
            photokey: photo.key
        }
        axios.post(`${API_URL}cars/deleteImage`,toDelete)
        .then(res => {
            if(res.status === 200)
                setCar(thisCar)
        })
    }
    const uploadImages = () => {
        let id = car._id;
        if(image1.current.image)
            updateImage(id, image1.current.image)
        if(image2.current.image)
            updateImage(id, image2.current.image)
        if(image3.current.image)
            updateImage(id, image3.current.image)
        if(image4.current.image)
            updateImage(id, image4.current.image)
    }
    const updateImage= (id, img) => {
        let formData = new FormData();
        formData.append("fileUpload", img);
        axios.post(`${API_URL}cars/uploadImage/${id}`,formData)
    }
    return(<>
        {car ? <>
            <Form>
                <Row>
                    <Col md={12} style={{border: '1px solid rgba(0,0,0,.125)',boxShadow: '0px 0px 24px -17px rgba(66, 68, 90, 1)', marginBottom: '1.5rem'}}>
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
                            <Col md={12} style={{paddingBottom:'.75rem',paddingTop:'1.75rem'}}>
                                <div style={{display: 'flex',width:"100%",justifyContent:"right"}}>
                                    {/* <Button variant='danger'>Anuluj</Button> */}
                                    <Button variant='success' onClick={save}>Zapisz</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                       
                    <Col md={12} style={{border: '1px solid rgba(0,0,0,.125)',boxShadow: '0px 0px 24px -17px rgba(66, 68, 90, 1)', marginBottom: '1.5rem'}}>
                        <Row>
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
                            <Col md={12} style={{paddingBottom:'.75rem',paddingTop:'1.75rem'}}>
                                <div style={{display: 'flex',width:"100%",justifyContent:"right"}}>
                                    {/* <Button variant='danger'>Anuluj</Button> */}
                                    <Button variant='success' onClick={save}>Zapisz</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={12} style={{border: '1px solid rgba(0,0,0,.125)',boxShadow: '0px 0px 24px -17px rgba(66, 68, 90, 1)', marginBottom: '1.5rem'}}>
                        <Row>
                            <Col md={12} style={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                            Zdjęcia
                            </Col>
                            <hr />
                            {[...Array(4)].map((e,i)=>{
                                let photo = car.photos[i];
                                if(!photo){
                                    return <Col key={i} md={3} className="mb-3">
                                        <ImagePreview 
                                            id={'image4' + i} 
                                            ref={
                                                i===0?image1:
                                                i===1?image2:
                                                i===2?image3:
                                                i===3?image4:''} />
                                    </Col>
                                }else{
                                    return <Col key={i} md={3} className="mb-3">
                                        <img src={photo.location} alt={photo.key} className="form-img__img-preview" style={{width:'80%', maxHeight: '250px', objectFit: 'contain'}}/>
                                        <Button variant='danger'  style={{padding:'.5rem',fontSize:'.75rem', borderRadius:0, border:0}} onClick={()=>{setPhotoToDelete(photo);setModalShow(true)}}>
                                            USUŃ ZDJECIE
                                        </Button>
                                    </Col>
                                }
                            })}
                            <Col md={12} style={{paddingBottom:'.75rem',paddingTop:'1.75rem'}}>
                                <div style={{display: 'flex',width:"100%",justifyContent:"right"}}>
                                    {/* <Button variant='danger'>Anuluj</Button> */}
                                    <Button variant='success' onClick={uploadImages}>Zapisz</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col md={12} style={{border: '1px solid rgba(0,0,0,.125)',boxShadow: '0px 0px 24px -17px rgba(66, 68, 90, 1)', marginBottom: '1.5rem'}}>
                        <Row>
                            <Col md={12} style={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                                Oferta
                            </Col>
                            <hr />
                            {car.services.map((el,index) => <Row key={index} style={{paddingBottom: "5rem"}}>
                                <Service title={el.title} time={el.time} price={el.price} description={el.description} index={index} setService={setService} deleteService={deleteService} />
                            </Row> )}
                            <Col md={12} style={{paddingBottom:'.75rem'}}>
                                <div style={{display: 'flex',width:"100%",justifyContent:"right"}}>
                                    {/* <Link to="/">
                                        <Button variant='danger'>Anuluj</Button>
                                    </Link> */}
                                    <Button variant='success' onClick={save}>Zapisz</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Form>
            <ModalApp
                show={modalShow}
                onHide={() => setModalShow(false)}
                header=''
                body={`Czy napewno chcesz usunąć to zdjęcie?`}
                footer={<div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}><Button variant='danger' onClick={()=>{setPhotoToDelete(null);setModalShow(false)}}>Anuluj</Button><Button variant='success' onClick={deleteImage}>Tak, usuń!</Button></div>}
            />
        </>
        :'LOADING'}
    </>)
}

export default CarEdit;