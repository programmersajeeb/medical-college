import React from 'react';
import { Card, CardGroup, Nav } from 'react-bootstrap';
import './Experts.css'

const Expert = ({ expert }) => {
    const { name, img, description } = expert;
    return (
        <div className='col-md-3 col-sm-6 col-12'>
            <CardGroup>
                <Card className='card-area'>
                    <div className="card-content">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <div className="card-icon-area">
                        <div className="d-flex justify-content-center">
                            <Nav.Link><i className="fab fa-facebook-square fs-3"></i></Nav.Link>
                            <Nav.Link><i className="fab fa-twitter-square fs-3"></i></Nav.Link>
                            <Nav.Link><i className="fab fa-instagram-square fs-3"></i></Nav.Link>
                        </div>
                    </div>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Expert;