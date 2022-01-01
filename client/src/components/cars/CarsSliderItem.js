import React from 'react'
import { Card, Col } from 'react-bootstrap';

const CarsSliderItem = ({car}) => {
    
    return(<Col md={4} className="mb-3"> 
        <Card>{car.brand}</Card>
    </Col>)
}

export default CarsSliderItem;