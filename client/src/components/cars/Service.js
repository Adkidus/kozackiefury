import React, {useState} from "react";
import { Card, Col, Button} from 'react-bootstrap';
import OrderForm from "../OrderForm";

const Service = ({service ,car}) => {
    const [displayForm, setDisplaForm] = useState(false)
    const closeForm = () => {
        setDisplaForm(false);
    }
    return(<Col lg={4} md={6} className="mb-3">
        <Card className="car-card">
            <Card.Body>
                <div style={{display:'flex',flexFlow:'column',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
                    <div style={{textAlign:'center', fontWeight: 'bold', height:'75px',display:'flex',justifyContent:'center',alignItems: 'center',fontSize:'1.1rem'}}>
                        {service.title}
                    </div>
                    <div style={{textAlign:'center'}}>
                        <div style={{color:'#e5bc42',fontWeight:'bold'}}>CZAS</div>
                        <div>{service.time || 'INDYWIDUALNIE DO USTALENIA'}</div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <div style={{color:'#e5bc42',fontWeight:'bold'}}>CENA</div>
                        <div>{service.price || 'INDYWIDUALNIE DO USTALENIA'}</div>
                    </div>
                </div>
                <Button className='btn-gold w-100 mt-4' onClick={()=>setDisplaForm(true)}>WYBIERAM</Button>
            </Card.Body>
        </Card>
        {displayForm?<OrderForm car={car} service={service} closeForm={closeForm} />:''}
    </Col>)
}

export default Service;