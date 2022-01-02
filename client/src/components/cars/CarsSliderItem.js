import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const CarsSliderItem = ({car}) => {
    let photos = car.photos;
    let photo = photos.length > 0 ? photos[0].location : '';
    return(<Col md={4} className="mb-3"> 
        <Card className="car-card">
            {/* <div className='car-card__price'>
                <div>Cena</div>
                <div></div>
            </div> */}
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>
                    <div className='car-card__header'>
                        <div className='car-card__header-brand mb-1'>{car.brand}</div>
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
                    <Link to={'/car/'+car._id}>
                        <Button className='btn-gold-outline w-100 mb-1 mt-4'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </Link>
                    <Button className='btn-gold w-100 my-3'>REZERWUJ</Button>
                </div>
            </Card.Body>
        </Card>
    </Col>)
}

export default CarsSliderItem;