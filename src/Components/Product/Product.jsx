import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Product.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, category, key, img, price, seller, shipping, star, starCount, stock } = props.product
    return (
        <>
            <Row py={5}>
                <Col className="p-3" lg={4} md={12} sm={12} xs={12} m={5}>
                    <img src={img} alt="img" />
                </Col>
                <Col className="p-3 font-weight-bold text-muted" lg={8} md={12} sm={12} xs={12} m={5}>
                    <Row>
                        <h2 className="text-info"> <Link to={"/product/" + key}> {name} </Link> </h2>
                        <Col lg={4} md={12} sm={12} xs={12}>
                            <h5>Price: {price}</h5>
                            <h5>By: {seller}</h5>
                            <h5>Shipping Cost: {shipping}</h5>
                            <h5> Only {stock} Item Available</h5>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <h5>Star: {star}</h5>
                            <h5>Star Count: {starCount}</h5>
                            <h5>Category: {category}</h5>
                        </Col>
                    </Row>
                    {props.showAddCart && <Button onClick={() => props.addProduct(props.product)} className="btn w-25" variant="secondary" size="lg"> <FaShoppingCart /> Add TO CART</Button>}
                </Col>
            </Row>
        </>
    );
};

export default Product;