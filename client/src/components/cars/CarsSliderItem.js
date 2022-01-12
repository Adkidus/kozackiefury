import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import OrderForm from '../OrderForm';

const CarsSliderItem = ({car}) => {
    let [displayForm, setDisplaForm] = useState(false)
    let photos = car.photos;
    let photo = photos.length > 0 ? photos[0].location : '';
    const closeForm = () => {
        setDisplaForm(false);
    }
    return(<Col lg={4} md={6} className="mb-3"> 
        <Card className="car-card">
            {/* <div className='car-card__price'>
                <div>Cena</div>
                <div></div>
            </div> */}
            <Card.Img variant="top" src={photo} style={{width: '100%'}} />
            <Card.Body>
                <Card.Title>
                    <div className='car-card__header'>
                        <div className='car-card__header-brand mb-1' style={{textTransform:'uppercase'}}>{car.brand}</div>
                        <div className='car-card__header-model mb-3'>{car.model}</div>    
                    </div>
                </Card.Title>
                <div className='car-card__details'>
                    <div className='car-card__details--item'>
                        <div className='car-card__details--item-header'>Silnik</div>
                        <div>{car.engine}</div>
                    </div>
                    <div className='car-card__details--item'>
                        <div className='car-card__details--item-header'>Moc</div>
                        <div>{car.horse_power}</div>
                    </div>
                    <div className='car-card__details--item'>
                        <div className='car-card__details--item-header'>100km/h</div>
                        <div>{car.to_100}s</div>
                    </div>
                </div>
                <div>
                    <Link to={'/car/'+car.pathName}>
                        <Button className='btn-gold-outline w-100 mb-1 mt-4'>
                            POZNAJ MNIE
                        </Button>
                    </Link>
                    <Button className='btn-gold w-100 my-3' onClick={()=>setDisplaForm(true)}>
                        PRZEJEDŹMY SIĘ
                    </Button>
                </div>
            </Card.Body>
        </Card>
        {displayForm?<OrderForm car={car} closeForm={closeForm} />:''}
    </Col>)
}

export default CarsSliderItem;