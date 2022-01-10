import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const OrderForm = ({car}) => {

    return <div className="order-form">
        <Container>
            <Form>
                <Row>
                    <Col md={12} className="mt-5 mb-2">
                        <div style={{width: '100%',textAlign: 'center',fontSize:'1.75rem'}}>FORMULARZ WYCENY</div>
                    </Col>
                    <Col md={12} className="my-4 mb-5">
                        <div style={{width: '100%',textAlign: 'center', fontSize:'1.25rem', fontWeight:'bold', color:'#e5bc42'}}>
                            {car.brand} {car.model}
                        </div>
                    </Col>
                    <Col md={12} className='mt-4 mb-2'>
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>DANE KONTAKTOWE</div>
                    </Col>
                    <Col md={6}>Imię</Col>
                    <Col md={6}>Nazwsiko</Col>
                    <Col md={12}>Email</Col>
                    <Col md={12}>Telefon</Col>
                    <Col md={12}>Wynajem na podmiot prywatne/firma</Col>
                    <Col md={12}>
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>USŁUGA</div>
                    </Col>
                    <Col md={12}>Rodzja usługi</Col>
                    <Col md={6}>Miejscowość</Col>
                    <Col md={6}>Data</Col>
                    <Col md={12}>
                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>UWAGI</div>
                    </Col>
                    <Col md={12}>uwagi</Col>
                    <Col md={12}>
                        <Button className='btn-gold w-100 my-5'>WYŚLIJ</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
}

export default OrderForm;