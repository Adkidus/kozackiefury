import React, {useState,useEffect} from 'react';
import axiosConfig from '../utils/axiosConfig';
import {Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap'

const ServiceItem = ({service, servInd, removeServ, updateServ}) => {
    const [editMode, setEditMode] = useState(false)
    const [thisService, setThisService] = useState({})
    const [serviceEdit, setServiceEdit] = useState({})
    useEffect(() => {
        setThisService(service)
        setServiceEdit(service)
        if(service.title===''&&service.description==='')
            setEditMode(true)
        else
            setEditMode(false)
    },[service])
    const setTitle = v => {
        setServiceEdit({...serviceEdit, title: v.target.value})
    }
    const setDescription = v => {
        setServiceEdit({...serviceEdit, description: v.target.value})
    }
    const initEdit = () => {
        setEditMode(true)
    }
    const cancelEdit = () => {
        setEditMode(false)
        setServiceEdit(thisService)
    }
    const save = e => {
        e.preventDefault()
        let api = thisService._id ? 'update':'new'
        axiosConfig.post(`services/${api}`,serviceEdit)
        .then(res => {
            updateServ(servInd, res.data)
            setThisService(res.data)
            setServiceEdit(res.data)
            setEditMode(false)
        })
    }
    const deleteService = () => {
        if(thisService._id){
            axiosConfig.delete('services/'+thisService._id)
            .then(res => {
                if(res.status === 200)
                    removeServ(servInd)
            })
        }else
            removeServ(servInd)
    }
    return <Col md={12} className="mb-5">
        <div style={{padding: '1rem', border:'1px solid rgba(0, 0, 0, 0.125)', boxShadow: "rgb(66 68 90) 0px 0px 24px -17px"}}>
            <Form onSubmit={save}>
                <Row>
                    <Col md={12} style={{paddingBottom:'1rem',display: 'flex',justifyContent: 'right'}}>
                        <Button variant="danger" onClick={deleteService}>Usuń</Button>
                    </Col>
                    <Col md={12}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="nazwa usługi"
                                value={serviceEdit.title}
                                onChange={setTitle}
                                disabled={!editMode}
                                required
                            />
                            <label htmlFor="floatingInputCustom">Nazwa usługi</label>
                        </Form.Floating>
                        <hr />
                    </Col>
                    <Col md={12}>
                        <FloatingLabel label="Opis">
                            <Form.Control
                                as="textarea"
                                placeholder="Opis"
                                style={{ minHeight: '250px' }}
                                value={serviceEdit.description}
                                onChange={setDescription}
                                disabled={!editMode}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md={12}>
                        <div className="d-flex w-100" style={{justifyContent:editMode?'space-between':'right',paddingTop:'1rem'}}>
                            {editMode?
                                <>
                                    <Button variant="danger" onClick={cancelEdit}>Anuluj</Button>
                                    <Button variant="success" type="submit">Zapisz</Button>
                                </>:
                                <Button onClick={initEdit}>Edytuj</Button>
                            }
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    </Col>
}

export default ServiceItem;