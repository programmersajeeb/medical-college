import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className='col-md-3 col-sm-6 col-12 service-area'>
            <div className="service-card">
            <img className='img-fluid service-img' src={img} alt="" />
            <h2> {name}</h2>
            <p>{description}</p>
            <Link to={`/Booking/${id}`}>
                <button className='btn btn-primary service-btn'>Appointment on {name.toLowerCase()}</button>
            </Link>
            </div>
        </div>
    );
};

export default Service;