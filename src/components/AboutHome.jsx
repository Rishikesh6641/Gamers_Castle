import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import imgf from '../Images/img-featured.webp';
import { CardsPage } from './CardsPage';
import { CarouslePage } from './CarouslePage';
export function AboutHome() {
    return (
        <div style={{ marginTop: '50px' }}>
             <div>
            <CarouslePage/>
            <CardsPage/>
            </div>
            <p><h3>About Gamer's <span style={{color:'red'}}>Castle</span></h3></p>
           
            <hr></hr>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col lg={6} style={{marginTop:'50-px'}} >
                        <ul class="featured-list" style={{ lineHeight: '50px', fontSize:'20px', color:'blueviolet' }}>
                            <li>This Website provides You the Various Range of Game Libraries which are of completely different website in a single website.</li>
                            <li>This website Helps to Compare prices from various different website.</li>
                            <li>Helps you to Analyse the performance of the Game according to your PC Config.</li>
                        </ul>
                        <Button variant="danger">Read More</Button>
                    </Col>
                    <Col lg={6}>
                        <div>
                            {/* <img src={imgf} alt="" /> */}
                            <img src={imgf} alt="" style={{borderRadius:'30px'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
