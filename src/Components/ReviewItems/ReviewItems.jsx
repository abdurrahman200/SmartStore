import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ReviewItems = (props) => {
    const { name, quantity, price } = props.product
    return (
        <Row className="py-5">
            <Col lg={6}>

                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>$ {price}</small></p>
                <br />
                <Button className="btn w-25" variant="danger" size="lg" > <FaShoppingCart /> Remove</Button>
            </Col>
        </Row>
    );
};

export default ReviewItems;