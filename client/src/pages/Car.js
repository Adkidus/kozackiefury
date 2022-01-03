import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Service from '../components/cars/Service';

const API_URL = 'https://api.kozackiefury.pl/';

const Car = () => {
    const params = useParams();
    const [car, setCar] = useState(null)
    const [header, setHeader] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${API_URL}cars/car/${params.caId}`)
        .then(res => {
            let thisCar = res.data
            setCar(thisCar);
            let photos = thisCar.photos;
            let photo = photos.length > 0 ? photos[0].location : '';
            setHeader(photo)
            setLoading(false)
        })
    }, [])
    return(<>
        {!loading && car ? 
        <>
        <header className='header-single' style={{backgroundImage:'url('+header+')'}}>
            <div className='header-single__inner'>
                <h2>{car.brand}</h2>
                <h5>{car.model}</h5>
            </div>
            <div className='header-single__fade'></div>
        </header> 
        <Container fluid className='dark-bg home-cars'>
            <Container className='py-5'>
                <section>
                    <h5 style={{color:'#e5bc42'}}>O SAMOCHODZIE&nbsp;&nbsp;🔥</h5>
                    <div className='mt-2'>
                        {car.description}
                    </div>
                    <div className='mt-4 mb-4'>
                        <Row>
                            <Col xs={4}>
                                <div className='py-3' style={{background:'#e5bc42',width:'100%',display:'flex',flexFlow:'column',justifyContent: 'center',alignItems: 'center',gap:'.5rem'}}>
                                    <div style={{fontWeight:'600',fontSize:'1rem'}}>SILNIK</div>
                                    <div style={{fontWeight:'bold',fontSize:'1.5rem'}}>{car.engine}</div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='py-3' style={{background:'#e5bc42',width:'100%',display:'flex',flexFlow:'column',justifyContent: 'center',alignItems: 'center',gap:'.5rem'}}>
                                    <div style={{fontWeight:'600',fontSize:'1rem'}}>MOC</div>
                                    <div style={{fontWeight:'bold',fontSize:'1.5rem'}}>{car.horse_power} KM</div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className='py-3' style={{background:'#e5bc42',width:'100%',display:'flex',flexFlow:'column',justifyContent: 'center',alignItems: 'center',gap:'.5rem'}}>
                                    <div style={{fontWeight:'600',fontSize:'1rem'}}>100KM/H</div>
                                    <div style={{fontWeight:'bold',fontSize:'1.5rem'}}>{car.to_100} s</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className='pt-4'>
                    <h5 style={{color:'#e5bc42'}}>OFERTA&nbsp;&nbsp;🔥</h5>
                    <div className='my-4'>
                        <Row>
                            {car.services.map(service  => <Service key={service._id} service={service} />)}
                        </Row>
                    </div>
                </section>
                <section className='pt-4'>
                    <h5 style={{color:'#e5bc42'}}>GALERIA&nbsp;&nbsp;📷</h5>
                    <div className='gallery my-4'>
                        {car.photos.map(photo => <img key={photo._id} src={photo.location} alt="gallery-image" loading='lazy' />)}
                    </div>
                </section>
            </Container>
        </Container>
        </>: ''}
    </>)
}

export default Car;