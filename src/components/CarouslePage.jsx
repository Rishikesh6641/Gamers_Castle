import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/slide_02.jpg'
import img3 from '../Images/slide_03.jpg'

export function CarouslePage() {
    return (
        <Carousel >
            <Carousel.Item>
                <img src={img1} alt="firstSlide" style={{ height: '90vh' }} />
                <Carousel.Caption>
                    <h3 style={{ color: 'red' }}>Decide</h3>
                    <h1>What to Buy</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} alt="firstSlide" style={{ height: '90vh' }} />
                <Carousel.Caption>
                    <h3 style={{ color: 'red' }}>Decide</h3>
                    <h1>Where to Buy</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} alt="firstSlide" style={{ height: '90vh' }} />
                <Carousel.Caption>
                    <h3 style={{ color: 'red' }}>Decide</h3>
                    <h1>Why to buy</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
