import React, {useState,useEffect} from 'react'
import axiosConfig from '../utils/axiosConfig';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Service from '../components/cars/Service';

const Car = () => {
    const params = useParams();
    const [car, setCar] = useState(null)
    const [header, setHeader] = useState('')
    const [loading, setLoading] = useState(true)
    const [fullImage, setFullImage] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        axiosConfig.get(`cars/car/${params.caId}`)
        .then(res => {
                let thisCar = res.data
                setCar(thisCar);
                let photos = thisCar.photos;
                let photo = photos.length > 0 ? photos[0].location : '';
                setHeader(photo)
                setLoading(false)
        })
        .catch(e => {
            navigate('/404')
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
                    <h5 style={{color:'#e5bc42'}}>O SAMOCHODZIE</h5>
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
                    <h5 style={{color:'#e5bc42'}}>OFERTA</h5>
                    <div className='my-4'>
                        <Row>
                            {car.services.map(service  => <Service key={service._id} service={service} />)}
                        </Row>
                    </div>
                </section>
                <section className='pt-4'>
                    <h5 style={{color:'#e5bc42'}}>GALERIA</h5>
                    <div className='gallery my-4'>
                        {car.photos.map(photo => <img key={photo._id} src={photo.location} alt="gallery-img" loading='lazy' onClick={()=>setFullImage(photo.location)} />)}
                    </div>
                </section>
                {fullImage ? <div className='full-page' style={{backgroundImage:`url(${fullImage})`}}>
                    <div style={{position: 'absolute',top:'1rem',right: '1rem',fontSize:'1.75rem',cursor:'pointer'}} onClick={()=>setFullImage(null)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>:''}
            </Container>
        </Container>
        </>: ''}
    </>)
}

export default Car;