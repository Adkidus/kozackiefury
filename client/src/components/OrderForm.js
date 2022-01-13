import React from 'react'
import { Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const OrderForm = ({car, closeForm}) => {

    return <div className="order-form" style={{overflowY:"auto"}}>
        <Container>
            <div>
                <FontAwesomeIcon icon={faTimes} style={{position: 'absolute',top:'1rem',right: '1rem',fontSize:'1.75rem',cursor:'pointer'}} onClick={closeForm}/>
            </div>
            <Form>
                <Row>
                    <Col md={12} className="mt-5 mb-2 d-flex" style={{justifyContent: 'center',alignItems: 'center',alignContent: 'center',flexFlow:'column'}}>
                        <div style={{fontSize:'1.75rem'}}>FORMULARZ WYCENY</div>
                        <div style={{width:'50%',height:'1px',backgroundColor:'#e5bc42', marginTop: '10px'}}></div>
                    </Col>
                    <Col md={12} className="mt-2 mb-5">
                        <div style={{width: '100%',textAlign: 'center', fontSize:'1.25rem', fontWeight:'bold', color:'#e5bc42'}}>
                            {car.brand} {car.model}
                        </div>
                    </Col>
                    <Col md={12} className="mb-3">
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>DANE KONTAKTOWE</div>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Imię"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Imię" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nazwisko"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Nazwisko" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Email" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Telefon"
                            className="mb-3"
                        >
                            <Form.Control type="phone" placeholder="Telefon" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel controlId="floatingSelectGrid" label="Wynajem na podmiot">
                            <Form.Select className="mb-3" aria-label="Wynajem na podmiot" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}}>
                                <option disabled>Wybierz</option>
                                <option value="Prywatnie">Prywatnie</option>
                                <option value="Firma">Firma</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={12} className='mb-3 mt-4'>
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>DANE FIRMY</div>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nazwa firmy"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Nazwa firmy" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="NIP"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="NIP" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Adres"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Adres" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Miejscowość"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Miejscowość" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Kod pocztowy"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Kod pocztowy" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={12} className='mb-3 mt-4'>
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>USŁUGA</div>
                    </Col>
                    <Col md={12}>
                        <FloatingLabel controlId="floatingSelectGrid" label="Rodzaj usługi">
                            <Form.Select className="mb-3" aria-label="Rodzaj usługi" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}}>
                                <option disabled>Wybierz</option>
                                {car.services.map(service =>  <option key={service._id} value={service._id}>{service.title}</option>)}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Miejscowość"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Miejscowość" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Data"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Data" style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff'}} />
                        </FloatingLabel>
                    </Col>
                    <Col md={12} className='mb-3 mt-4'>
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>UWAGI</div>
                    </Col>
                    <Col md={12}>
                        <FloatingLabel controlId="floatingTextarea2" label="Uwagi">
                            <Form.Control
                                as="textarea"
                                style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff',height:'100px'}}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md={12}>
                        <Button className='btn-gold w-100 my-5'>WYŚLIJ</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
}

export default OrderForm;