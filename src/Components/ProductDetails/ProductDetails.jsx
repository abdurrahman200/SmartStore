import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Date from '../../assets/fakeData';
import Product from '../Product/Product';


const ProductDetails = () => {
    let { key } = useParams();
    const product = Date.find(pd => pd.key === key)
    return (
        <Container className="bg-light">
            <Col className="py-3">
                <h1 className="font-weight-bold text-danger text-center"> Your Product Details :  </h1>
                <hr />
                <Product showAddCart={false} product={product} />
            </Col>
        </Container>
    );
};

export default ProductDetails;