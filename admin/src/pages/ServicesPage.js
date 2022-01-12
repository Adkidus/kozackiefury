import React, {useState,useEffect} from 'react';
import axiosConfig from '../utils/axiosConfig';
import {Button, Row, Col} from 'react-bootstrap'
import ServiceItem from '../components/serviceItem'

const ServicesPage = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axiosConfig.get('services/list')
        .then(res => {
            setServices(res.data);
        })
    },[])
    const newService = () => {
        let newObj = [...services,{title: '', description:''}]
        setServices(newObj.reverse())
    }
    const updateService = (index,data) => {
        let arr = [...services]
        arr[index]=data;
        setServices(arr)
    }
    const removeService = index => {
        let arr = [...services]
        arr.splice(index, 1);
        setServices(arr)
    }
    return(
        <Row>
            <Col md={12} className="mb-4">
                <Button variant="success" onClick={newService}>Dodaj nową usługę</Button>
            </Col>
            {services.map((service, index) => <ServiceItem key={index} servInd={index} service={service} updateServ={updateService} removeServ={removeService} />)}
        </Row>
    )
}

export default ServicesPage;