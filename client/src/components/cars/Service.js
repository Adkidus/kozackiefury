import React, {useState} from "react";
import { Card, Col, Button} from 'react-bootstrap';
import OrderForm from "../OrderForm";

const Service = ({service ,car}) => {
    const [displayForm, setDisplaForm] = useState(false)
    const closeForm = () => {
        setDisplaForm(false);
    }
    return(<Col md={4} className="mb-3">
        <Card className="car-card">
            <Card.Body>
                <div style={{display:'flex',flexFlow:'column',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
                    <div style={{textAlign:'center'}}>
                        {service.title}
                    </div>
                    <div style={{textAlign:'center'}}>
                        {service.time}
                    </div>
                    <div style={{textAlign:'center'}}>
                        {service.price}
                    </div>
                </div>
                <Button className='btn-gold w-100 mt-4' onClick={()=>setDisplaForm(true)}>WYBIERAM</Button>
            </Card.Body>
        </Card>
        {displayForm?<OrderForm car={car} service={service} closeForm={closeForm} />:''}
    </Col>)
}

export default Service;