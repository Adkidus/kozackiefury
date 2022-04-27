import React from 'react'
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const validationSchema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().email().required(),
    location: Yup.string().required(),
    date: Yup.string().required(),
})

const initialValues = {
    first_name: '', 
    last_name: '',
    email: '', 
    phone: '',
    rent_for_subject: 'Prywatnie',
    company: '',
    company_nip: '',
    company_address: '',
    company_city: '',
    company_postal_code: '',
    serviceId: '',
    location: '',
    date: '',
    notes: ''
}

const onSubmit = values => {
    console.log('FORM VALUES ', values)
}

const OrderForm = ({car, service, closeForm}) => {
    console.log(service)
    console.log(car.services)
    return <div className="order-form" style={{overflowY:"auto"}}>
        <Container>
            <div>
                <FontAwesomeIcon icon={faTimes} style={{position: 'fixed',top:'1.25rem',right: '1.25rem',fontSize:'1.75rem',cursor:'pointer'}} onClick={closeForm}/>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {formik => 
                    <Form noValidate onSubmit={formik.handleSubmit}>
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
                            <Col md={6} className="mb-3">
                                <FloatingLabel
                                    controlId="first_name"
                                    label="Imię *"
                                >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Imię"
                                        className="input-gold"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.first_name}
                                        // isValid={formik.touched.first_name && !formik.errors.first_name}
                                        // isInvalid={!!formik.errors.first_name}
                                    />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid" style={{display: formik.errors.first_name ? 'block':'none'}}>
                                    To pole jest wymagane!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6} className="mb-3">
                                <FloatingLabel
                                    controlId="last_name"
                                    label="Nazwisko *"
                                >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Nazwisko" 
                                        className="input-gold"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.last_name}  />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid" style={{display: formik.errors.last_name ? 'block':'none'}}>
                                    To pole jest wymagane!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6} className="mb-3">
                                <FloatingLabel
                                    controlId="email"
                                    label="Email *"
                                >
                                    <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    className="input-gold"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}  />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid" style={{display: formik.errors.email ? 'block':'none'}}>
                                    To pole jest wymagane!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel
                                    controlId="phone"
                                    label="Telefon"
                                    className="mb-3"
                                >
                                    <Form.Control
                                    type="phone"
                                    placeholder="Telefon"
                                    className="input-gold"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}  />
                                </FloatingLabel>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel controlId="rent_for_subject" onChange={formik.handleChange} label="Wynajem na podmiot">
                                    <Form.Select aria-label="Wynajem na podmiot" className="input-gold mb-3">
                                        <option disabled>Wybierz</option>
                                        <option value="Prywatnie">Prywatnie</option>
                                        <option value="Firma">Firma</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md={12}>
                                <Row style={{display: formik.values.rent_for_subject === 'Firma' ? 'flex':'none'}}>
                                    <Col md={12} className='mb-3 mt-4'>
                                        <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>DANE FIRMY</div>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <FloatingLabel
                                            controlId="company_name"
                                            label="Nazwa firmy"
                                        >
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Nazwa firmy" 
                                                className="input-gold"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.company_name}  />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <FloatingLabel
                                            controlId="company_nip"
                                            label="NIP"
                                        >
                                            <Form.Control 
                                                type="text" 
                                                placeholder="NIP" 
                                                className="input-gold" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.company_nip}  />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <FloatingLabel
                                            controlId="company_address"
                                            label="Adres"
                                        >
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Adres" 
                                                className="input-gold" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.company_address}  />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <FloatingLabel
                                            controlId="company_city"
                                            label="Miejscowość"
                                        >
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Miejscowość" 
                                                className="input-gold" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.company_city}  />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <FloatingLabel
                                            controlId="company_postal_code"
                                            label="Kod pocztowy"
                                        >
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Kod pocztowy" 
                                                className="input-gold" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.company_postal_code}  />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} className='mb-3 mt-4'>
                                <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>USŁUGA</div>
                            </Col>
                            <Col md={12}>
                                <FloatingLabel controlId="serviceId" onChange={formik.handleChange} label="Rodzaj usługi">
                                    <Form.Select aria-label="Rodzaj usługi" className="input-gold mb-3">
                                        <option disabled>Wybierz</option>
                                        {car.services.map(service =>  <option key={service._id} value={service._id}>{service.title}</option>)}
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md={6} className="mb-3">
                                <FloatingLabel
                                    controlId="location"
                                    label="Miejscowość *"
                                    onChange={formik.handleChange} 
                                >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Data" 
                                        className="input-gold"
                                        onChange={formik.handleChange}
                                        value={formik.values.location}  />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid" style={{display: formik.errors.location ? 'block':'none'}}>
                                    To pole jest wymagane!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={6} className="mb-3">
                                <FloatingLabel
                                    controlId="date"
                                    label="Data *"
                                >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Data" 
                                        className="input-gold"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}  />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid" style={{display: formik.errors.date ? 'block':'none'}}>
                                    To pole jest wymagane!
                                </Form.Control.Feedback>
                            </Col>
                            <Col md={12} className='mb-3 mt-4'>
                                <div style={{fontSize:'1.25rem',fontWeight:'bold'}}>UWAGI</div>
                            </Col>
                            <Col md={12}>
                                <FloatingLabel controlId="notes" label="Uwagi">
                                    <Form.Control
                                        as="textarea"
                                        style={{background:'#000',border:'1px solid #e5bc42',borderRadius:0,color:'#fff',height:'100px'}}
                                        onChange={formik.handleChange}
                                        value={formik.values.notes}  />
                                </FloatingLabel>
                            </Col>
                            <Col md={12}>
                                <Button type="submit" className='btn-gold w-100 my-5'>WYŚLIJ</Button>
                            </Col>
                        </Row>
                    </Form>
                }
            </Formik>
        </Container>
    </div>
}

export default OrderForm;