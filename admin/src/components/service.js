import React from 'react';
import {Col, Form, FloatingLabel, Button} from 'react-bootstrap'

const Service = ({title, time, description, setService, deleteService, index}) => {
    const update = (name,value) => {
        let arr = {title: title, time: time, description: description}
        arr[name]=value;
        setService(index, arr)
    }
    return(
        <>
            <Col md={6}>
                <Form.Floating className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="nazwa"
                        value={title}
                        onChange={e=>update('title',e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Nazwa</label>
                </Form.Floating>
            </Col>
            <Col md={6} className="mb-3">
                <Form.Floating >
                    <Form.Control
                        type="text"
                        placeholder="czas"
                        value={time}
                        onChange={e=>update('time',e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Czas</label>
                </Form.Floating>
            </Col>
            <Col md={12} className="mb-3">
                <FloatingLabel label="Opis">
                    <Form.Control
                        as="textarea"
                        placeholder="Opis"
                        style={{ minHeight: '150px' }}
                        value={description}
                        onChange={e=>update('description',e.target.value)}
                    />
                </FloatingLabel>
            </Col>
            <Col md={12} style={{textAlign: 'right', marginBottom: '1rem'}}>
                <Button variant="danger" onClick={()=>deleteService(index)}>Usuń</Button>
            </Col>
        </>
    )
}

export default Service;