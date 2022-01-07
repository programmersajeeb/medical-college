import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img3 from './../../images/Banner/b5.jpg';
import img1 from './../../images/Banner/b1.jpg';
import img2 from './../../images/Banner/b2.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className='mt-1' id='home'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={img3}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption className='border border-1 rounded-pill banner-bg'>
                        <h3 className="banner-title">We Are The Best</h3>
                        <p className="banner-discription">Update meterial an update tecnology is our main priority, we all time ready to help you from our hart</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={img2}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption className='border border-1 rounded-pill banner-bg'>
                        <h3 className="banner-title">We Are The Best</h3>
                        <p className="banner-discription">Update meterial an update tecnology is our main priority, we all time ready to help you from our hart</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={img1}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption className='border border-1 rounded-pill banner-bg'>
                        <h3 className="banner-title">We Are The Best</h3>
                        <p className="banner-discription">Update meterial an update tecnology is our main priority, we all time ready to help you from our hart</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;