import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../images/freelaning.JPG';
import Brand2 from '../../../images/how to talk to anyone.JPG';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;