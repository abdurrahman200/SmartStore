import React, { useState } from 'react';
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import Data from '../../assets/fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = Data.slice(0, 5)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <Container>
            <Row>
                <Col lg={12} className="py-3">
                    <Form inline>
                        <FormControl size="lg" type="text" placeholder="Search " className="w-100" />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={8} sm={12} xs={12}>
                    {products.map(product => <Product showAddCart={true} product={product} key={product.key} addProduct={addProduct} />)}
                </Col>

                <Col lg={3} md={4} sm={12} xs={12}>
                    <Cart cart={cart} />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;