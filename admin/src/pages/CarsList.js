import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';
const API_URL = 'http://localhost:5000/';
// const API_URL = 'https://api.kozackiefury.pl/';

const CarsList = () => {
    const [carsList, setCarsList] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}cars/list`)
        .then(res => {
            setCarsList(res.data);
        })
    }, [])
    return(
        <Row>
            {carsList.map(car => {
                let photos = car.photos;
                let photo = photos.length > 0 ? photos[0].location : '';
                return <Col md={4} className='my-4' key={car._id}>
                    <Card>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title>{car.brand} {car.model}</Card.Title>
                            <Card.Text>
                                Silnik: {car.engine}
                            </Card.Text>
                            <Card.Text>
                                Moc: {car.engine}
                            </Card.Text>
                            <Card.Text>
                                0-100km/h: {car.to_100}
                            </Card.Text>
                            <Card.Text>
                                Właściciel: {car.owner_first_name} {car.owner_last_name}
                            </Card.Text>
                            <Link to={'/auto/'+car._id}>
                                <Button variant="primary">Edytuj</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            })}
        </Row>
    )
}

export default CarsList;