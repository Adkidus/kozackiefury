import React, {useState} from 'react';
import { Col, Form, Row, FloatingLabel, Button } from 'react-bootstrap';
import ImagePreview from '../components/imagePreview';
import Service from '../components/service'

const NewCar = () => {
    const [services, setServices] = useState([])
    const addService = () => {
        let arr = [...services]
        arr.push({
            title: '',
            time: '',
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
                        />
                        <label htmlFor="floatingInputCustom">Marka</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="model"
                        />
                        <label htmlFor="floatingInputCustom">Model</label>
                    </Form.Floating>
                </Col>
                <Col md={6}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="marka"
                        />
                        <label htmlFor="floatingInputCustom">Moc Silnika</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="model"
                        />
                        <label htmlFor="floatingInputCustom">Silnik</label>
                    </Form.Floating>
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Floating >
                        <Form.Control
                            type="text"
                            placeholder="model"
                        />
                        <label htmlFor="floatingInputCustom">0-100km/h</label>
                    </Form.Floating>
                </Col>
                <Col md={12} className="mb-3">
                    <FloatingLabel label="Opis">
                        <Form.Control
                            as="textarea"
                            placeholder="Opis"
                            style={{ minHeight: '200px' }}
                        />
                    </FloatingLabel>
                </Col>
                <Col md={12} style={{paddingBottom: "1rem", paddingTop: "1rem"}}>
                    Zdjęcia
                </Col>
                <hr />
                <Col md={3} className="mb-3">
                    <ImagePreview id="image1" />
                </Col>
                <Col md={3} className="mb-3">
                    <ImagePreview id="image2" />
                </Col>
                <Col md={3} className="mb-3">
                    <ImagePreview id="image3" />
                </Col>
                <Col md={3} className="mb-3">
                    <ImagePreview id="image4" />
                </Col>
                <Col md={12} style={{paddingBottom: "1rem", paddingTop: "2rem"}}>
                    Usługi
                </Col>
                <hr />
                {services.map((el,index) => <Row key={index}>
                    <Service title={el.title} time={el.time} desc={el.description} index={index} setService={setService} deleteService={deleteService} />
                    <hr />
                </Row> )}
                <Button onClick={addService}>Dodaj kolejną</Button>
                <div style={{paddingTop: '2rem',paddingBottom: '2rem'}} ></div>
                <hr />
                <Col md={12} style={{paddingBottom:'3rem'}}>
                    <div style={{display: 'flex',width:"100%",justifyContent:"space-between"}}>
                        <Button variant='danger'>Anuluj</Button>
                        <Button variant='success'>Zapisz</Button>
                    </div>
                </Col>
            </Row>
        </Form>
        </>
    )
}

export default NewCar;