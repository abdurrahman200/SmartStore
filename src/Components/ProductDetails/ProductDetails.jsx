import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Date from '../../assets/fakeData';
import Product from '../Product/Product';


const ProductDetails = () => {
    let { key } = useParams();
    const product = Date.find(pd => pd.key === key)
    return (
        <Container>
            <Card className="py-5">
                <h1 className="font-weight-bold text-danger text-center"> Your Product Details :  </h1>
                <Product showAddCart={false} product={product} />
            </Card>
        </Container>
    );
};

export default ProductDetails;