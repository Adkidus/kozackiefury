import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const FooterEl = () => {

    return(<footer className="py-5"  style={{background:'#000',color:'#fff'}}>
        <Container>
            <Row>
                <Col md={4} className="pb-4">
                    <Link to="/" style={{color:'#e5bc42',fontWeight:'bold',textDecoration:'none'}}>
                        KOZACKIE FURY
                    </Link>
                </Col>
                <Col md={4}>
                    <div className="pb-2" style={{color:'#e5bc42'}}>KONTAKT</div>
                    <div className="mb-2">jedyne@kozackiefury.pl</div>
                    <div className="mb-4">(+48) 608-310-315</div>
                </Col>
                <Col md={4}>
                    <div className="pb-2" style={{color:'#e5bc42'}}>SOCIAL MEDIA</div>
                </Col>
            </Row>
        </Container>
    </footer>);
}

export default FooterEl;