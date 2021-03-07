import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Product.css'
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
    // console.log(props.product);
    // const { name, category, key, img, price, priceFraction, seller, shipping, star, starCount, stock, url, wholePrice } = props.product
    const { name, img, price, seller, shipping, stock } = props.product
    return (
        <>
            <Row py={5}>
                <Col className="p-3" lg={4} md={12} sm={12} xs={12} m={5}>
                    <img src={img} alt="img" />
                </Col>
                <Col className="p-3" lg={8} md={12} sm={12} xs={12} m={5}>
                    <h2 className="text-info"> {name} </h2>
                    <h5 className="font-weight-bold text-muted">{price}</h5>
                    <h5 className="font-weight-bold text-muted">By : {seller}</h5>
                    <h5 className="font-weight-bold text-muted">{shipping}</h5>
                    <h5 className="font-weight-bold text-muted"> Only {stock} Item Available</h5>
                    <Button onClick={() => props.addProduct(props.product)} className="btn w-25" variant="secondary" size="lg"> <FaShoppingCart /> Add TO CART</Button>
                </Col>
            </Row>
        </>
    );
};

export default Product;