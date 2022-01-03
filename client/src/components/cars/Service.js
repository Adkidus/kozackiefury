import React from "react";
import { Card, Col, Button} from 'react-bootstrap';

const Service = ({service}) => {

    return(<Col md={4} className="mb-3">
        <Card className="car-card">
            <Card.Body>
                <div style={{display:'flex',flexFlow:'column',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
                    <div>NAZWA</div>
                    <div>CZAS</div>
                    <div>CENA</div>
                </div>
                <Button className='btn-gold w-100 mt-4'>WYBIERAM</Button>
            </Card.Body>
        </Card>
    </Col>)
}

export default Service;